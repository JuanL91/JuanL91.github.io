// La lectura e importación ocurren en el navegador; los archivos personales no se publican.
let attendanceImportDraft=null;
function attendanceImportName(name){return normalizedName(String(name||'').replace(/\([^)]*\)?/g,'')).replace(/\bnv\b/g,'').replace(/\s+/g,' ').trim()}
function attendanceImportText(value){return String(value??'').replace(/\s+/g,' ').trim()}
function attendanceImportColumn(n){let out='';while(n){n--;out=String.fromCharCode(65+n%26)+out;n=Math.floor(n/26)}return out}
function attendanceImportDate(value,date1904=false){
  if(value instanceof Date)return `${value.getUTCFullYear()}-${String(value.getUTCMonth()+1).padStart(2,'0')}-${String(value.getUTCDate()).padStart(2,'0')}`;
  if(typeof value==='number'||/^\d+(\.\d+)?$/.test(String(value))){const n=Number(value);if(!Number.isFinite(n)||n<40000||n>55000)return null;return new Date(Date.UTC(date1904?1904:1899,date1904?0:11,date1904?1:30)+Math.floor(n)*86400000).toISOString().slice(0,10)}
  const s=attendanceImportText(value);if(/^20\d{2}-\d{2}-\d{2}$/.test(s))return s;const parts=s.match(/^(\d{1,2})\/(\d{1,2})\/(20\d{2})$/);return parts?`${parts[3]}-${parts[2].padStart(2,'0')}-${parts[1].padStart(2,'0')}`:null;
}
function parseAttendanceWorkbook(workbook,source){
  const groups=[],issues=[];let sourceMarks=0,duplicates=0;
  const date1904=!!workbook.Workbook?.WBProps?.date1904;
  for(const sheetName of workbook.SheetNames){
    const match=sheetName.trim().match(/^([3456])(?:ro|to)\s*([A-H])$/i);if(!match)continue;
    const grade=Number(match[1]),section=match[2].toUpperCase(),sheet=workbook.Sheets[sheetName];
    const group={grade,section,modalidad:grade===4?'Modalidad en Artes':'Técnico Profesional',moduleCode:{3:'MF_600_3',4:'',5:'MF_629_3',6:'MF_632_3'}[grade],subjectName:{3:'Orientación gráfica y multimedia',4:'Identidad, Cultura y Emprendimiento',5:'Retoque y tratamiento de imágenes',6:'Productos interactivos, multimedia y webs'}[grade],students:[]};
    if(groups.some(g=>g.grade===grade&&g.section===section))throw new Error(`Hay dos hojas para ${grade}.º ${section}. Revisa el archivo.`);
    const roster=new Map(),seen=new Map();
    for(let row=10;row<=48;row++){
      const name=attendanceImportText(sheet['C'+row]?.v);if(!name)continue;const key=attendanceImportName(name);if(!key)continue;
      if(roster.has(key)){issues.push({sheet:sheetName,cell:'C'+row,message:'Nombre repetido en la matrícula: se conserva un solo estudiante.'});continue}
      const student={name,number:attendanceImportText(sheet['B'+row]?.v)||String(group.students.length+1),records:[]};group.students.push(student);roster.set(key,student);
    }
    if(!roster.size)throw new Error(`No se encontró el listado de estudiantes en ${sheetName}.`);
    if(grade===4&&attendanceImportText(sheet.R2?.v).includes('MF_629'))issues.push({sheet:sheetName,cell:'R2',message:'El encabezado copiado de 5.º se vincula a Identidad, Cultura y Emprendimiento de Artes 4.º H.'});
    for(let block=0;block<5;block++)for(let row=10+48*block;row<=48+48*block;row++)for(const n of [...Array.from({length:23},(_,i)=>i+4),...Array.from({length:24},(_,i)=>i+38)]){
      const col=attendanceImportColumn(n),cell=sheet[col+row],raw=attendanceImportText(cell?.v);if(!raw||cell?.f)continue;
      sourceMarks++;const name=attendanceImportText(sheet['C'+row]?.v),student=roster.get(attendanceImportName(name));
      if(!student){issues.push({sheet:sheetName,cell:col+row,message:'Marca sin un estudiante de la matrícula inicial: pendiente de revisión.',raw});continue}
      const date=attendanceImportDate(sheet[col+(8+48*block)]?.v,date1904)||attendanceImportDate(sheet[col+(9+48*block)]?.v,date1904);
      const status=raw.toUpperCase()==='F'?'A':raw.toUpperCase();
      if(!['P','A','T','E','R'].includes(status)){issues.push({sheet:sheetName,cell:col+row,message:'Marca sin clasificación: pendiente de revisión.',raw,name,date});continue}
      if(!date||date<'2026-08-01'||date>'2027-07-31'){issues.push({sheet:sheetName,cell:col+row,message:'Fecha fuera del año escolar o no reconocida: pendiente de revisión.',raw,name,date});continue}
      const key=attendanceImportName(student.name)+'|'+date,prior=seen.get(key);
      if(prior){if(prior.status===status){duplicates++;prior.sourceCells.push(col+row)}else{issues.push({sheet:sheetName,cell:col+row,message:'Dos marcas distintas para el mismo estudiante y fecha: se excluyen ambas para revisión.',raw,name,date});student.records=student.records.filter(r=>r!==prior);seen.set(key,{status:'CONFLICT'})}continue}
      const record={date,status,raw,sourceSheet:sheetName,sourceCell:col+row,sourceCells:[col+row],note:status==='R'?'Retirado (marca R en el archivo).':raw.toUpperCase()==='F'?'Falta o ausencia (marca F en el archivo).':''};student.records.push(record);seen.set(key,record);
    }
    groups.push(group);
  }
  if(!groups.length)throw new Error('El archivo no tiene hojas de grupo reconocibles (por ejemplo, 3ro A o 6to E).');
  return {app:'AulaGestión RD',kind:'attendance-import',version:1,schoolYear:'2026-2027',source,groups,issues,sourceMarks,duplicates};
}
function validateAttendanceImport(payload){
  if(payload?.app!=='AulaGestión RD'||payload.kind!=='attendance-import'||payload.schoolYear!=='2026-2027'||!Array.isArray(payload.groups)||!payload.groups.length)throw new Error('Selecciona el Excel de asistencia o un paquete válido de asistencia 2026-2027.');
  const groupKeys=new Set();
  for(const g of payload.groups){const key=`${g.grade}-${g.section}`;if(![3,4,5,6].includes(g.grade)||! /^[A-H]$/.test(g.section)||!Array.isArray(g.students)||groupKeys.has(key)||g.moduleCode!=={3:'MF_600_3',4:'',5:'MF_629_3',6:'MF_632_3'}[g.grade]||g.modalidad!==(g.grade===4?'Modalidad en Artes':'Técnico Profesional'))throw new Error('Hay un grupo o módulo no válido en el paquete.');groupKeys.add(key);for(const s of g.students){if(!s.name||!Array.isArray(s.records))throw new Error('Hay un estudiante no válido en el paquete.');for(const r of s.records)if(!['P','A','T','E','R'].includes(r.status)||!/^20\d\d-\d\d-\d\d$/.test(r.date)||r.date<'2026-08-01'||r.date>'2027-07-31'||Number.isNaN(Date.parse(r.date+'T00:00:00Z'))||new Date(r.date+'T00:00:00Z').toISOString().slice(0,10)!==r.date)throw new Error('Hay una marca o fecha no válida en el paquete.')}}
  return payload;
}
function attendanceImportCourse(g,list=cursos){return list.find(c=>String(c.grado).startsWith(String(g.grade))&&String(c.seccion).toUpperCase()===g.section&&c.modalidad===g.modalidad)}
function attendanceImportMateria(g,c,list=materias){return list.find(m=>String(m.cursoId)===String(c?.id)&&(g.moduleCode?m.codigo===g.moduleCode:normalizedName(m.nombre).includes('identidad')))}
function attendanceImportMatchesStudent(s,name){const key=attendanceImportName(name);return attendanceImportName(s.nombre)===key||(s.attendanceImportAliases||[]).some(a=>attendanceImportName(a)===key)}
function attendanceImportPlan(payload){
  const cs=cursos.map(c=>({...c})),ms=materias.map(m=>({...m})),ss=alumnos.map(s=>({...s})),writes={cursos:[],materias:[],alumnos:[],asistencias:[]},conflicts=[];
  let cid=Math.max(1004,...cs.map(c=>Number(c.id)||0)),mid=Math.max(2004,...ms.map(m=>Number(m.id)||0)),sid=Math.max(4000,...ss.map(s=>Number(s.id)||0)),existing=0,same=0,nonClass=0,imported=0;
  const byId=new Map(asistencias.map(a=>[String(a.id),a])),plannedKeys=new Map();
  for(const g of payload.groups){
    let c=attendanceImportCourse(g,cs);if(!c){c={id:++cid,grado:g.grade+(g.grade===3?'ro':'to')+' Secundaria',seccion:g.section,modalidad:g.modalidad,especialidad:g.grade===4?'Bachillerato en Artes · Cine y Fotografía':'Bachillerato Técnico en Multimedia y Gráfica'};cs.push(c);writes.cursos.push(c)}
    let m=attendanceImportMateria(g,c,ms);if(!m){m={id:++mid,cursoId:c.id,tipo:g.grade===4?'Asignatura':'Módulo Formativo',codigo:g.moduleCode,nombre:g.subjectName,horas:'',ponderacion:100};ms.push(m);writes.materias.push(m)}
    for(const original of g.students){
      const matches=ss.filter(s=>String(s.cursoId)===String(c.id)&&attendanceImportMatchesStudent(s,original.name));if(matches.length>1){conflicts.push({name:original.name,group:`${g.grade}.º ${g.section}`,message:'Más de un estudiante existente coincide con el nombre. No se importa esta fila.'});continue}
      let s=matches[0];if(!s){const used=new Set(ss.filter(s=>String(s.cursoId)===String(c.id)).map(s=>String(s.numero)));let numero=String(original.number||'');if(!numero||used.has(numero)){let n=1;while(used.has(String(n)))n++;numero=String(n)}s={id:++sid,cursoId:c.id,nombre:original.name,numero};ss.push(s);writes.alumnos.push(s)}
      for(const r of original.records){
        const id=`${r.date}-${c.id}-${m.id}-${s.id}`,prior=asistencias.filter(a=>String(a.studentId)===String(s.id)&&String(a.courseId)===String(c.id)&&a.date===r.date&&(String(a.materiaId??'')===String(m.id)||a.materiaId==null||a.materiaId==='')).sort((a,b)=>String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')))[0];
        const key=`${s.id}|${m.id}|${r.date}`;if(plannedKeys.has(key)){if(plannedKeys.get(key)!==r.status)throw new Error('El paquete tiene marcas distintas para un mismo estudiante y fecha.');same++;continue}plannedKeys.set(key,r.status);
        if(prior){existing++;if(prior.status!==r.status)conflicts.push({name:s.nombre,group:`${g.grade}.º ${g.section}`,date:r.date,existing:prior.status,incoming:r.status,message:'Se conserva el registro que ya está en la aplicación.'});else same++;continue}
        const noClass=isNoClassDate(r.date);if(noClass)nonClass++;
        const item={id,studentId:s.id,courseId:c.id,materiaId:m.id,date:r.date,status:r.status,note:[r.note,noClass?'Marca original en fecha no lectiva; revisar calendario.':''].filter(Boolean).join(' '),source:payload.source,sourceSheet:r.sourceSheet,sourceCell:r.sourceCell,sourceCells:r.sourceCells,originalStatus:r.raw,importedAt:nowIso(),updatedAt:nowIso()};
        if(byId.has(id))throw new Error('La clave de un registro coincide con otro dato existente. Revisa la asistencia antes de importar.');writes.asistencias.push(item);imported++;
      }
    }
  }
  return {writes,conflicts,existing,same,nonClass,imported};
}
async function prepareAttendanceImport(event){
  const file=event.target.files?.[0];if(!file)return;
  attendanceImportDraft=null;$('attImportButton').disabled=true;$('attImportSummary').textContent='Leyendo el archivo…';
  try{let payload;if(file.name.toLowerCase().endsWith('.json'))payload=JSON.parse(await file.text());else{if(typeof XLSX==='undefined')throw new Error('La lectura de Excel no está disponible sin conexión. Utiliza el paquete preparado de asistencia o conecta el navegador.');const wb=XLSX.read(await file.arrayBuffer(),{type:'array',cellDates:false,cellFormula:true});payload=parseAttendanceWorkbook(wb,file.name)}
    validateAttendanceImport(payload);if($('schoolYear').value!==payload.schoolYear)throw new Error('Selecciona el año escolar 2026-2027 antes de importar este archivo.');
    const plan=attendanceImportPlan(payload);attendanceImportDraft=payload;
    $('attImportSummary').innerHTML=`<p><strong>${plan.imported}</strong> registros nuevos · <strong>${plan.writes.alumnos.length}</strong> estudiantes nuevos · <strong>${payload.groups.length}</strong> grupos · <strong>${plan.existing}</strong> registros existentes conservados.</p><p class="mt-2">P = presente · A/F = ausencia · T = tardanza · E = excusa · R = retirado. Las celdas vacías siguen sin registrar.</p>${plan.nonClass?`<p class="mt-2">${plan.nonClass} marcas originales en fechas no lectivas se conservarán con una observación.</p>`:''}`;
    $('attImportGroups').innerHTML=payload.groups.map(g=>`<tr><td>${g.grade}.º ${esc(g.section)}</td><td>${g.students.length}</td><td>${g.students.reduce((n,s)=>n+s.records.length,0)}</td><td>${esc(g.moduleCode||g.subjectName)}</td></tr>`).join('');
    const issues=[...(payload.issues||[]),...plan.conflicts];$('attImportIssues').innerHTML=issues.slice(0,100).map(i=>`<li>${esc([i.sheet||i.group,i.cell,i.name,i.date,i.message,i.existing?'Actual: '+i.existing+'; archivo: '+i.incoming:''].filter(Boolean).join(' · '))}</li>`).join('')||'<li>No hay conflictos pendientes.</li>';
    $('attImportPreview').classList.remove('hidden');$('attImportButton').disabled=false;
  }catch(e){$('attImportSummary').textContent=e.message;$('attImportPreview').classList.add('hidden');toast(e.message,'error')}
  finally{event.target.value=''}
}
async function applyAttendanceImport(){
  if(!attendanceImportDraft)return;$('attImportButton').disabled=true;
  try{if($('schoolYear').value!==attendanceImportDraft.schoolYear)throw new Error('El año escolar debe ser 2026-2027.');const plan=attendanceImportPlan(attendanceImportDraft);
    await new Promise((resolve,reject)=>{const tx=db.transaction(Object.keys(plan.writes),'readwrite');for(const [store,items] of Object.entries(plan.writes))items.forEach(item=>tx.objectStore(store).put(item));tx.oncomplete=resolve;tx.onabort=()=>reject(tx.error||new Error('No se pudo completar la importación.'));tx.onerror=()=>reject(tx.error)});
    const state=await dbGetMeta('cloudState')||{};await dbSetMeta('cloudState',{...state,dirty:true,lastLocalChange:nowIso()});await loadState();renderAll();await markDirty();
    $('attImportSummary').textContent=`Importación terminada: ${plan.imported} registros de asistencia añadidos y ${plan.writes.alumnos.length} estudiantes matriculados. ${plan.existing} registros anteriores conservados. ${plan.conflicts.length} conflictos quedaron sin sustituir.`;
    const first=attendanceImportDraft.groups[0],c=attendanceImportCourse(first),m=attendanceImportMateria(first,c);if(c){$('attCourse').value=String(c.id);syncAttendanceMateria();if(m)$('attMateria').value=String(m.id);const dates=first.students.flatMap(s=>s.records.map(r=>r.date)).sort();if(dates.length){$('attDate').value=dates.at(-1);$('attHistoryMonth').value=dates.at(-1).slice(0,7)}renderAttendance();renderAttendanceHistory()}
    attendanceImportDraft=null;toast('Asistencia importada y guardada.','success');
  }catch(e){$('attImportSummary').textContent=e.message;$('attImportButton').disabled=false;toast(e.message,'error')}
}
