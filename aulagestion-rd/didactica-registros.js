// Registro docente: se integra al respaldo existente sin sustituir calificaciones.
function didacticaName(name){return normalizedName(name).replace(/\bnv\b/g,'').trim()}
function didacticaIsArtes(m){const c=cursoById(m?.cursoId);return !!c&&String(c.grado).startsWith('4')&&String(c.seccion).toUpperCase()==='H'&&c.modalidad==='Modalidad en Artes'&&normalizedName(m.nombre).includes('identidad')}
function didacticaMatches(a,m){return !!m&&(a.materiaId?String(a.materiaId)===String(m.id):a.subjectKey==='ARTES-4H'?didacticaIsArtes(m):!!m.codigo&&a.moduleCode===m.codigo)}
function didacticaActivities(m){return actividades.filter(a=>didacticaMatches(a,m)).sort((a,b)=>Number(a.number||String(a.code).replace(/\D/g,''))-Number(b.number||String(b.code).replace(/\D/g,'')))}
function didacticaValue(a){return a.points==null?'Sin valor individual':`${a.points} pts${a.orientative?' · orientativo':''}`}
function didacticaBest(values){const nums=(values||[]).filter(v=>v!==null&&v!==undefined&&v!=='').map(Number);return nums.length?Math.max(...nums):null}
function didacticaRecord(kind,s,m,key){return evaluaciones.find(r=>r.kind===kind&&String(r.studentId)===String(s.id)&&String(r.materiaId)===String(m.id)&&r.registerKey===key)}
function didacticaRecordId(kind,s,m,key){return `didactica:${kind}:${s.id}:${m.id}:${key}`}
function didacticaEvaluationDetail(r){
  let rows=[];
  if(r.kind==='activity-register')rows=r.maxScore==null?[['Realización',r.completed==null?'Sin registrar':r.completed?'Realizada':'No realizada']]:[...(r.attempts||[]).map((v,i)=>['Intento '+(i+1),v??'Pendiente']),['Mejor',r.score??'Pendiente'],['Valor',r.maxScore]];
  if(r.kind==='notebook-register')rows=[...['Organización / 3','Claridad / 3','Completitud / 4'].map((label,i)=>[label,r.values?.[i]??'Pendiente']),['Total / 10',r.score??'Pendiente']];
  if(r.kind==='period-register')rows=[...(r.orientative?[['Proceso y portafolio / 20',r.portfolio??'Pendiente']]:[]),...(r.recoveries||[]).map((v,i)=>['Recuperación '+(i+1),v??'Pendiente'])];
  return `<table class="table mt-3"><thead><tr><th>Registro</th><th>Resultado</th></tr></thead><tbody>${rows.map(([label,value])=>`<tr><td>${esc(label)}</td><td>${esc(value)}</td></tr>`).join('')}</tbody></table>${r.orientative?'<p class="text-xs mt-2">Ponderación orientativa de Artes.</p>':''}`;
}
async function migrateDidactica(){
  const update=window.DIDACTICA_UPDATE;if(!update)throw new Error('No se pudo cargar la planificación didáctica. Recarga la aplicación.');
  if(await dbGetMeta(update.revision))return;
  // Leer primero y escribir toda la actualización en una sola transacción.
  const [cs,ms,ss,acts]=await Promise.all(['cursos','materias','alumnos','actividades'].map(dbGetAll));
  const put={cursos:[],materias:[],alumnos:[],actividades:[]};
  let cid=Math.max(1004,...cs.map(c=>Number(c.id)||0)),mid=Math.max(2004,...ms.map(m=>Number(m.id)||0)),sid=Math.max(4000,...ss.map(s=>Number(s.id)||0));
  for(const [grade,section,code,name,arts] of [
    ...['A','B','C','D','E'].map(section=>['3ro Secundaria',section,'MF_600_3','Orientación gráfica y multimedia',false]),
    ['5to Secundaria','E','MF_629_3','Retoque y tratamiento de imágenes',false],
    ...['D','E'].map(section=>['6to Secundaria',section,'MF_632_3','Productos interactivos, multimedia y webs',false]),
    ['4to Secundaria','H','','Identidad, Cultura y Emprendimiento',true]
  ]){
    const modalidad=arts?'Modalidad en Artes':'Técnico Profesional';
    let c=cs.find(c=>String(c.grado).startsWith(grade[0])&&String(c.seccion).toUpperCase()===section&&c.modalidad===modalidad);
    if(!c){c={id:++cid,grado:grade,seccion:section,modalidad,especialidad:arts?'Bachillerato en Artes · Cine y Fotografía':'Bachillerato Técnico en Multimedia y Gráfica'};cs.push(c);put.cursos.push(c)}
    let m=ms.find(m=>String(m.cursoId)===String(c.id)&&(code?m.codigo===code:normalizedName(m.nombre).includes('identidad')));
    if(!m){m={id:++mid,cursoId:c.id,tipo:arts?'Asignatura':'Módulo Formativo',codigo:code,nombre:name,horas:'',ponderacion:100};ms.push(m);put.materias.push(m)}
    if(arts)for(const [i,nombre] of update.students4H.entries()){
      if(ss.some(s=>String(s.cursoId)===String(c.id)&&didacticaName(s.nombre)===didacticaName(nombre)))continue;
      const used=new Set(ss.filter(s=>String(s.cursoId)===String(c.id)).map(s=>String(s.numero)));let numero=i+1;while(used.has(String(numero)))numero++;
      const s={id:++sid,cursoId:c.id,nombre,numero:String(numero)};ss.push(s);put.alumnos.push(s);
    }
  }
  for(const a of update.activities){
    const existing=acts.find(x=>x.id===a.id||((a.subjectKey?x.subjectKey===a.subjectKey:x.moduleCode===a.moduleCode)&&x.code===a.code&&!x.materiaId));
    if(!existing){acts.push(a);put.actividades.push(a)}
    else if(existing.seeded){const merged={...existing,...a,id:existing.id};put.actividades.push(merged)}
  }
  await new Promise((resolve,reject)=>{const tx=db.transaction([...Object.keys(put),'meta'],'readwrite');for(const [store,items] of Object.entries(put))items.forEach(item=>tx.objectStore(store).put(item));tx.objectStore('meta').put({key:update.revision,value:true});tx.oncomplete=resolve;tx.onabort=()=>reject(tx.error||new Error('Actualización interrumpida.'));tx.onerror=()=>reject(tx.error)});
  const state=await dbGetMeta('cloudState')||{};await dbSetMeta('cloudState',{...state,dirty:true,lastLocalChange:nowIso()});
}

function renderDidactica(){
  const select=$('didMateria');if(!select)return;const keep=select.value;
  select.innerHTML=materias.map(m=>`<option value="${esc(m.id)}">${esc((cursoById(m.cursoId)?.grado||'')+' '+(cursoById(m.cursoId)?.seccion||'')+' · '+materiaLabel(m))}</option>`).join('');
  if(materias.some(m=>String(m.id)===keep))select.value=keep;
  syncDidacticaActivity();
}
function syncDidacticaActivity(){
  const m=materiaById($('didMateria').value),acts=didacticaActivities(m),keep=$('didActivity').value;
  $('didActivity').innerHTML=acts.map(a=>`<option value="${esc(a.id)}">${esc(`${a.code} · ${a.title} · ${didacticaValue(a)}`)}</option>`).join('')||'<option value="">Sin actividades</option>';
  if(acts.some(a=>a.id===keep))$('didActivity').value=keep;
  const count=didacticaIsArtes(m)?4:m?.codigo==='MF_632_3'?3:5;
  $('didReview').innerHTML=Array.from({length:count},(_,i)=>`<option value="REV-CUAD-${String(i+1).padStart(2,'0')}">REV-CUAD-${String(i+1).padStart(2,'0')} · Revisión del cuaderno ${i+1} · 10 pts${didacticaIsArtes(m)?' · P'+(i+1):''}</option>`).join('');
  renderDidacticaRows();renderDidacticaNotebooks();renderDidacticaSummary();
}
function didacticaInput(value,max,label,extra=''){return `<input type="number" class="field did-score" style="min-width:80px" min="0" max="${max}" step="0.5" value="${esc(value??'')}" aria-label="${esc(label)}" ${extra}>`}
function renderDidacticaRows(){
  const m=materiaById($('didMateria').value),a=actividades.find(a=>a.id===$('didActivity').value),body=$('didRows');body.innerHTML='';
  if(!m||!a){$('didActivityMeta').textContent='Selecciona una actividad.';return}
  const process=a.points==null;
  $('didActivityMeta').textContent=`${a.code} · ${a.title} · ${didacticaValue(a)} · ${fmtDate(a.date)}${a.period?' · '+a.period:''}${a.gradingKind==='diagnostic'?' · Registro diagnóstico independiente de la nota del período.':''}`;
  $('didHead').innerHTML=process?'<tr><th>No.</th><th>Estudiante</th><th>Realización</th><th>Observación</th></tr>':'<tr><th>No.</th><th>Estudiante</th><th>Intento 1</th><th>Intento 2</th><th>Intento 3</th><th>Mejor</th><th>Observación</th></tr>';
  body.innerHTML=studentsForCourse(m.cursoId).map((s,i)=>{const r=didacticaRecord('activity-register',s,m,a.id),attempts=r?.attempts||[];return `<tr data-student="${esc(s.id)}"><td>${esc(s.numero||i+1)}</td><td>${esc(s.nombre)}</td>${process?`<td><select class="field did-done" aria-label="Realización de ${esc(s.nombre)}"><option value="">Sin registrar</option><option value="1" ${r?.completed===true?'selected':''}>Realizada</option><option value="0" ${r?.completed===false?'selected':''}>No realizada</option></select></td>`:attempts.concat([null,null,null]).slice(0,3).map((v,j)=>`<td>${didacticaInput(v,a.points,`${s.nombre}, intento ${j+1}`,'oninput="updateDidacticaBest(this)"')}</td>`).join('')+`<td class="did-best">${didacticaBest(attempts)??'—'}</td>`}<td><input class="field did-note" aria-label="Observación de ${esc(s.nombre)}" value="${esc(r?.observations||'')}"></td></tr>`}).join('')||'<tr><td colspan="7">Este grupo aún no tiene estudiantes matriculados.</td></tr>';
}
function updateDidacticaBest(input){const row=input.closest('tr'),values=[...row.querySelectorAll('.did-score')].map(i=>i.value);row.querySelector('.did-best').textContent=didacticaBest(values)??'—'}
function didacticaReadScore(input,max){if(input.value==='')return null;const value=Number(input.value);if(!Number.isFinite(value)||value<0||value>max)throw new Error(`La puntuación debe estar entre 0 y ${max}.`);return value}
async function didacticaWrite(records){
  await new Promise((resolve,reject)=>{const tx=db.transaction('evaluaciones','readwrite');records.forEach(r=>tx.objectStore('evaluaciones').put(r));tx.oncomplete=resolve;tx.onabort=()=>reject(tx.error);tx.onerror=()=>reject(tx.error)});
  for(const r of records){const i=evaluaciones.findIndex(x=>x.id===r.id);if(i<0)evaluaciones.push(r);else evaluaciones[i]=r}await markDirty();renderEvaluationHistory();renderDashboardCards();
}
async function saveDidacticaActivities(){try{
  const m=materiaById($('didMateria').value),a=actividades.find(a=>a.id===$('didActivity').value);if(!m||!a)return;
  const records=[];for(const row of $('didRows').querySelectorAll('[data-student]')){const s=alumnoById(row.dataset.student),old=didacticaRecord('activity-register',s,m,a.id),attempts=[...row.querySelectorAll('.did-score')].map(i=>didacticaReadScore(i,a.points)),done=row.querySelector('.did-done')?.value,observations=row.querySelector('.did-note').value.trim();if(!old&&!attempts.some(v=>v!==null)&&(!done||done==='')&&!observations)continue;const score=didacticaBest(attempts);records.push({id:didacticaRecordId('activity-register',s,m,a.id),kind:'activity-register',registerKey:a.id,studentId:s.id,courseId:m.cursoId,materiaId:m.id,activityId:a.id,title:`${a.code} · ${a.title}`,period:a.period||'',date:a.date,attempts,score,maxScore:a.points,completed:done===undefined||done===''?null:done==='1',observations,updatedAt:nowIso()})}
  await didacticaWrite(records);renderDidacticaRows();renderDidacticaSummary();toast('Registro de actividades guardado.','success');
}catch(e){toast(e.message,'error')}}

function renderDidacticaNotebooks(){
  const m=materiaById($('didMateria').value),key=$('didReview').value;const body=$('didNotebookRows');if(!m)return;
  body.innerHTML=studentsForCourse(m.cursoId).map((s,i)=>{const r=didacticaRecord('notebook-register',s,m,key),values=r?.values||[];return `<tr data-student="${esc(s.id)}"><td>${esc(s.numero||i+1)}</td><td>${esc(s.nombre)}</td>${[3,3,4].map((max,j)=>`<td>${didacticaInput(values[j],max,`${s.nombre}, ${['Organización','Claridad','Completitud'][j]}`)}</td>`).join('')}<td>${r?.score??'—'} / 10</td></tr>`}).join('')||'<tr><td colspan="6">Sin estudiantes en este grupo.</td></tr>';
}
async function saveDidacticaNotebooks(){try{
  const m=materiaById($('didMateria').value),key=$('didReview').value;if(!m||!key)return;const records=[];
  for(const row of $('didNotebookRows').querySelectorAll('[data-student]')){const s=alumnoById(row.dataset.student),old=didacticaRecord('notebook-register',s,m,key),values=[...row.querySelectorAll('.did-score')].map((input,j)=>didacticaReadScore(input,[3,3,4][j]));if(!old&&values.every(v=>v===null))continue;const score=values.every(v=>v!==null)?values.reduce((a,b)=>a+b,0):null;records.push({id:didacticaRecordId('notebook-register',s,m,key),kind:'notebook-register',registerKey:key,studentId:s.id,courseId:m.cursoId,materiaId:m.id,title:`${key} · Revisión del cuaderno · 10 pts`,period:didacticaIsArtes(m)?'P'+Number(key.slice(-2)):'',date:$('didNotebookDate').value||todayIso(),values,score,maxScore:10,updatedAt:nowIso()})}
  await didacticaWrite(records);renderDidacticaNotebooks();toast('Revisión de cuadernos guardada.','success');
}catch(e){toast(e.message,'error')}}

function didacticaSummary(s,m,key){
  const arts=didacticaIsArtes(m),acts=didacticaActivities(m).filter(a=>arts?a.period===key&&a.gradingKind==='final':a.raCode===key),scores=acts.map(a=>didacticaRecord('activity-register',s,m,a.id)?.score??null),registered=scores.filter(v=>v!==null).length;
  const old=didacticaRecord('period-register',s,m,key),base=acts.length&&registered===acts.length?scores.reduce((a,b)=>a+b,0):null,portfolio=old?.portfolio??null,subtotal=base===null||arts&&portfolio===null?null:base+(arts?portfolio:0),best=didacticaBest([subtotal,...(old?.recoveries||[])]);
  return {acts,registered,base,portfolio,subtotal,best,recoveries:old?.recoveries||[]};
}
function renderDidacticaSummary(){
  const m=materiaById($('didMateria').value),arts=didacticaIsArtes(m),sixth=m?.codigo==='MF_632_3',sel=$('didSummaryKey'),keep=sel.value;$('didSummaryPanel').classList.toggle('hidden',!arts&&!sixth);if(!arts&&!sixth)return;
  const keys=arts?['P1','P2','P3','P4']:['RA6.1','RA6.2','RA6.3'];sel.innerHTML=keys.map(key=>`<option>${key}</option>`).join('');if(keys.includes(keep))sel.value=keep;
  const key=sel.value,max=arts?100:{'RA6.1':30,'RA6.2':40,'RA6.3':30}[key];
  $('didSummaryNote').textContent=arts?'Ponderación orientativa: dos proyectos de 40 + proceso/portafolio de 20 = 100 por período. Validar con coordinación. Los cuadernos y las marcas de realización no se suman automáticamente. Este registro sirve de evidencia para las competencias.':'RA6.1: 30 · RA6.2: 40 · RA6.3: 30. Suma del mejor intento de cada actividad; tres recuperaciones. Las calificaciones oficiales existentes de RA se conservan por separado.';
  $('didSummaryHead').innerHTML=`<tr><th>Estudiante</th><th>Registradas</th><th>Suma ${arts?'proyectos / 80':'actividades / '+max}</th>${arts?'<th>Proceso / 20</th>':''}<th>Subtotal</th>${Array.from({length:arts?1:3},(_,i)=>`<th>Recuperación ${i+1} / ${max}</th>`).join('')}<th>Mejor / ${max}</th></tr>`;
  $('didSummaryRows').innerHTML=studentsForCourse(m.cursoId).map(s=>{const x=didacticaSummary(s,m,key);return `<tr data-student="${esc(s.id)}"><td>${esc(s.nombre)}</td><td>${x.registered}/${x.acts.length}</td><td>${x.base??'—'}</td>${arts?`<td>${didacticaInput(x.portfolio,20,`${s.nombre}, proceso y portafolio`,'data-portfolio="true"')}</td>`:''}<td>${x.subtotal??'—'}</td>${Array.from({length:arts?1:3},(_,i)=>`<td>${didacticaInput(x.recoveries[i],max,`${s.nombre}, recuperación ${i+1}`,'data-recovery="true"')}</td>`).join('')}<td>${x.best??'—'}</td></tr>`}).join('');
}
async function saveDidacticaSummary(){try{
  const m=materiaById($('didMateria').value),key=$('didSummaryKey').value,arts=didacticaIsArtes(m),max=arts?100:{'RA6.1':30,'RA6.2':40,'RA6.3':30}[key],records=[];
  for(const row of $('didSummaryRows').querySelectorAll('[data-student]')){const s=alumnoById(row.dataset.student),old=didacticaRecord('period-register',s,m,key),portfolio=arts?didacticaReadScore(row.querySelector('[data-portfolio]'),20):null,recoveries=[...row.querySelectorAll('[data-recovery]')].map(i=>didacticaReadScore(i,max));if(!old&&portfolio===null&&recoveries.every(v=>v===null))continue;records.push({id:didacticaRecordId('period-register',s,m,key),kind:'period-register',registerKey:key,studentId:s.id,courseId:m.cursoId,materiaId:m.id,title:`${key} · Proceso y recuperación`,period:arts?key:'',date:todayIso(),portfolio,recoveries,orientative:arts,updatedAt:nowIso()})}
  await didacticaWrite(records);renderDidacticaSummary();toast('Proceso y recuperaciones guardados.','success');
}catch(e){toast(e.message,'error')}}
function exportDidacticaExcel(){
  if(typeof XLSX==='undefined'){toast('Excel no está disponible. Puedes descargar el respaldo JSON.','error');return}
  const m=materiaById($('didMateria').value);if(!m)return;const wb=XLSX.utils.book_new(),rows=[];
  for(const s of studentsForCourse(m.cursoId))for(const a of didacticaActivities(m)){const r=didacticaRecord('activity-register',s,m,a.id);rows.push({Numero:s.numero,Estudiante:s.nombre,Actividad:a.code,Nombre:a.title,Valor:a.points??'Sin valor individual',Orientativa:a.orientative?'Sí':'',Fecha:a.date,RA:a.raCode,Periodo:a.period||'',Intento1:r?.attempts?.[0]??'',Intento2:r?.attempts?.[1]??'',Intento3:r?.attempts?.[2]??'',Mejor:r?.score??'',Realizada:r?.completed==null?'':r.completed?'Sí':'No',Observacion:r?.observations||''})}
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(rows),'Actividades');
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(evaluaciones.filter(r=>r.kind==='notebook-register'&&String(r.materiaId)===String(m.id)).map(r=>({Estudiante:alumnoById(r.studentId)?.nombre,Revision:r.registerKey,Nombre:r.title,Fecha:r.date,Organizacion:r.values?.[0]??'',Claridad:r.values?.[1]??'',Completitud:r.values?.[2]??'',Total:r.score??'',Valor:10}))),'Cuadernos');
  const keys=didacticaIsArtes(m)?['P1','P2','P3','P4']:m.codigo==='MF_632_3'?['RA6.1','RA6.2','RA6.3']:[];
  if(keys.length)XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(studentsForCourse(m.cursoId).flatMap(s=>keys.map(key=>{const x=didacticaSummary(s,m,key);return {Estudiante:s.nombre,Resultado:key,Orientativo:didacticaIsArtes(m)?'Sí':'',Registradas:x.registered,Actividades:x.acts.length,Suma:x.base??'',Proceso:x.portfolio??'',Subtotal:x.subtotal??'',RP1:x.recoveries[0]??'',RP2:x.recoveries[1]??'',RP3:x.recoveries[2]??'',Mejor:x.best??''}}))),'Resumen');
  XLSX.writeFile(wb,`Didactica_${(cursoById(m.cursoId)?.grado||'')}_${cursoById(m.cursoId)?.seccion||''}_2026-2027.xlsx`);
}
