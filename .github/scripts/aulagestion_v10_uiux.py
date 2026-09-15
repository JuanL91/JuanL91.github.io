from pathlib import Path
import re

INDEX = Path('aulagestion-rd/index.html')
MANIFEST = Path('aulagestion-rd/manifest.webmanifest')
SW = Path('aulagestion-rd/sw.js')
DESIGN_DIR = Path('aulagestion-rd/design-system')

text = INDEX.read_text(encoding='utf-8')

required = [
    'const APP_VERSION = 9;',
    "const CLOUD_FILE = 'AulaGestionRD.backup.json';",
    'https://www.googleapis.com/auth/drive.appdata',
    'appDataFolder',
    'googleFindBackup',
    'googleFetch',
    'syncPreferredCloud',
    'restorePreferredCloud',
    'id="section-reportes"',
    'id="attendanceHistoryPanel"',
    'id="instrumentEvaluatorPanel"',
]
for token in required:
    assert token in text, f'Protección V10: falta {token}'

text = text.replace(
    '<title>AulaGestión RD V9 | Gestión Docente Integral</title>',
    '<title>AulaGestión RD V10 | Gestión Docente Integral</title>',
    1,
)
text = text.replace(
    'V9 · interfaz unificada + accesos rápidos',
    'V10 · UI/UX Pro Max · accesible y responsive',
    1,
)
text = text.replace('const APP_VERSION = 9;', 'const APP_VERSION = 10;', 1)

# Icon-only buttons already have useful title attributes. Mirror them into aria-label.
def add_aria(match):
    tag = match.group(0)
    if 'aria-label=' in tag:
        return tag
    title = re.search(r'title="([^"]+)"', tag)
    if not title:
        return tag
    return tag[:-1] + f' aria-label="{title.group(1)}">'

text = re.sub(r'<button\b[^>]*title="[^"]+"[^>]*>', add_aria, text)

CSS = r'''

    /* =========================================================
       V10 · UI/UX Pro Max Design System
       Educational App + Productivity Tool + Administrative UI
       Accessible & Ethical + Swiss Minimal + Flat/Microinteractions
       ========================================================= */
    :root{
      --ag-primary:#4f46e5;
      --ag-primary-strong:#3730a3;
      --ag-primary-soft:#eef2ff;
      --ag-accent:#0284c7;
      --ag-accent-soft:#e0f2fe;
      --ag-success:#059669;
      --ag-success-soft:#ecfdf5;
      --ag-warning:#d97706;
      --ag-warning-soft:#fffbeb;
      --ag-danger:#e11d48;
      --ag-danger-soft:#fff1f2;
      --ag-bg:#f6f8fc;
      --ag-surface:#ffffff;
      --ag-surface-2:#f8fafc;
      --ag-text:#172033;
      --ag-muted:#64748b;
      --ag-border:#dfe6f0;
      --ag-ring:rgba(79,70,229,.28);
      --ag-shadow-sm:0 1px 2px rgba(15,23,42,.04),0 1px 3px rgba(15,23,42,.04);
      --ag-shadow-md:0 10px 28px rgba(30,41,59,.08),0 2px 7px rgba(30,41,59,.05);
      --ag-shadow-lg:0 24px 64px rgba(30,41,59,.14);
      --ag-radius-sm:.75rem;
      --ag-radius-md:1rem;
      --ag-radius-lg:1.25rem;
      --ag-speed-fast:140ms;
      --ag-speed:220ms;
    }
    html[data-app-theme="dark"]{
      --ag-primary:#818cf8;
      --ag-primary-strong:#a5b4fc;
      --ag-primary-soft:#202447;
      --ag-accent:#38bdf8;
      --ag-accent-soft:#0c3144;
      --ag-success:#34d399;
      --ag-success-soft:#12372d;
      --ag-warning:#fbbf24;
      --ag-warning-soft:#3a2d11;
      --ag-danger:#fb7185;
      --ag-danger-soft:#431923;
      --ag-bg:#0b1220;
      --ag-surface:#111a2b;
      --ag-surface-2:#162136;
      --ag-text:#f1f5f9;
      --ag-muted:#b6c2d2;
      --ag-border:#2b3950;
      --ag-ring:rgba(129,140,248,.38);
      --ag-shadow-sm:0 1px 2px rgba(0,0,0,.25);
      --ag-shadow-md:0 16px 34px rgba(0,0,0,.28);
      --ag-shadow-lg:0 30px 70px rgba(0,0,0,.4);
    }

    @media screen{
      html{scroll-behavior:smooth;background:var(--ag-bg)}
      body{
        min-height:100dvh!important;
        background:
          radial-gradient(circle at 88% 2%,rgba(79,70,229,.07),transparent 28rem),
          radial-gradient(circle at 10% 96%,rgba(2,132,199,.045),transparent 24rem),
          var(--ag-bg)!important;
        color:var(--ag-text)!important;
        font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif!important;
        line-height:1.5;
        overflow-wrap:anywhere;
      }
      button,input,select,textarea{font:inherit}
      button:not(:disabled),[role="button"]{cursor:pointer;touch-action:manipulation}
      button:disabled{cursor:not-allowed;opacity:.48}
      :focus-visible{
        outline:3px solid var(--ag-ring)!important;
        outline-offset:2px!important;
        box-shadow:0 0 0 2px var(--ag-surface),0 0 0 5px var(--ag-ring)!important;
      }

      aside{
        background:color-mix(in srgb,var(--ag-surface) 94%,transparent)!important;
        border-color:var(--ag-border)!important;
        box-shadow:4px 0 24px rgba(15,23,42,.035)!important;
        backdrop-filter:saturate(140%) blur(12px);
      }
      aside nav{width:100%}
      .nav-btn{
        min-width:44px;min-height:44px;
        display:flex!important;align-items:center;justify-content:center;
        border-radius:12px!important;
        transition:background var(--ag-speed-fast) ease,color var(--ag-speed-fast) ease,box-shadow var(--ag-speed-fast) ease!important;
        position:relative;
      }
      .nav-btn:hover{background:var(--ag-primary-soft)!important;color:var(--ag-primary)!important}
      .nav-btn.bg-indigo-50{background:var(--ag-primary-soft)!important;color:var(--ag-primary)!important;box-shadow:inset 3px 0 0 var(--ag-primary)}
      @media (min-width:1100px){
        aside{width:17.5rem!important;align-items:stretch!important;padding:1rem .75rem!important;gap:1rem!important}
        aside>div:first-child{width:100%!important;height:52px!important;justify-content:flex-start!important;padding:0 .75rem!important;gap:.7rem!important;background:linear-gradient(135deg,var(--ag-primary),var(--ag-accent))!important;border-radius:16px!important}
        aside>div:first-child::after{content:"AulaGestión RD";font-size:.92rem;font-weight:800;letter-spacing:-.01em;white-space:nowrap}
        aside>hr{width:100%!important;border-color:var(--ag-border)!important}
        .nav-btn{width:100%!important;justify-content:flex-start!important;gap:.8rem!important;padding:.72rem .9rem!important;color:var(--ag-muted)}
        .nav-btn::after{content:attr(title);font-size:.82rem;font-weight:650;text-align:left;white-space:normal;line-height:1.2}
        .nav-btn i{width:1.3rem;text-align:center;font-size:1rem!important}
      }

      header{
        background:color-mix(in srgb,var(--ag-surface) 92%,transparent)!important;
        border-color:var(--ag-border)!important;
        backdrop-filter:saturate(140%) blur(14px);
        box-shadow:0 1px 0 rgba(15,23,42,.03)!important;
      }
      header button,header input{min-height:40px}
      #cloudStatusButton{border-radius:999px!important;font-weight:750!important;border:1px solid var(--ag-border)!important;background:var(--ag-surface)!important;box-shadow:var(--ag-shadow-sm)}
      #cloudStatusButton:hover{border-color:color-mix(in srgb,var(--ag-primary) 35%,var(--ag-border))!important}

      .section{scroll-padding-top:5rem}
      .section>div:first-child h1{letter-spacing:-.025em;color:var(--ag-text)!important;text-wrap:balance}
      .section>div:first-child p{color:var(--ag-muted)!important}

      .panel,.metric-card,.auth-card{
        background:var(--ag-surface)!important;
        border:1px solid var(--ag-border)!important;
        box-shadow:var(--ag-shadow-sm)!important;
      }
      .panel{border-radius:var(--ag-radius-lg)!important;padding:1.35rem!important}
      .metric-card{border-radius:var(--ag-radius-md)!important;transition:transform var(--ag-speed) ease,box-shadow var(--ag-speed) ease,border-color var(--ag-speed) ease!important;overflow:hidden;position:relative}
      .metric-card::after{content:"";position:absolute;inset:auto 0 0 0;height:2px;background:linear-gradient(90deg,var(--ag-primary),var(--ag-accent));opacity:.65}
      .metric-card:hover{transform:translateY(-2px);box-shadow:var(--ag-shadow-md)!important;border-color:color-mix(in srgb,var(--ag-primary) 24%,var(--ag-border))!important}
      .metric-number{font-variant-numeric:tabular-nums;letter-spacing:-.035em;color:var(--ag-text)!important}
      .metric-label{color:var(--ag-muted)!important}
      .metric-icon{border-radius:14px!important}
      .panel-title{gap:.8rem!important}
      .panel-title h3{letter-spacing:-.012em;color:var(--ag-text)!important}
      .panel-title p{color:var(--ag-muted)!important;line-height:1.45}

      #dashboardQuickActions>button{
        min-height:92px;
        border-color:var(--ag-border)!important;
        border-radius:var(--ag-radius-lg)!important;
        background:linear-gradient(145deg,var(--ag-surface),color-mix(in srgb,var(--ag-primary-soft) 18%,var(--ag-surface)))!important;
        box-shadow:var(--ag-shadow-sm)!important;
        transition:transform var(--ag-speed) ease,box-shadow var(--ag-speed) ease,border-color var(--ag-speed) ease!important;
      }
      #dashboardQuickActions>button:hover{transform:translateY(-2px);box-shadow:var(--ag-shadow-md)!important;border-color:color-mix(in srgb,var(--ag-primary) 30%,var(--ag-border))!important}
      #dashboardQuickActions>button:active{transform:translateY(0)}

      .primary-btn,.secondary-btn{
        min-height:44px!important;
        border-radius:12px!important;
        font-weight:750!important;
        transition:filter var(--ag-speed-fast) ease,box-shadow var(--ag-speed-fast) ease,transform var(--ag-speed-fast) ease!important;
      }
      .primary-btn{background:linear-gradient(135deg,var(--ag-primary),var(--ag-primary-strong))!important;box-shadow:0 6px 16px rgba(79,70,229,.16)!important}
      .primary-btn:hover{filter:brightness(1.04);box-shadow:0 10px 24px rgba(79,70,229,.22)!important}
      .primary-btn:active,.secondary-btn:active{transform:translateY(1px)}
      .secondary-btn{background:var(--ag-surface)!important;color:var(--ag-text)!important;border-color:var(--ag-border)!important}
      .secondary-btn:hover{background:var(--ag-surface-2)!important;border-color:color-mix(in srgb,var(--ag-primary) 28%,var(--ag-border))!important}

      input,select,textarea{
        min-height:44px;
        border-color:var(--ag-border)!important;
        background:var(--ag-surface)!important;
        color:var(--ag-text)!important;
        border-radius:11px!important;
        transition:border-color var(--ag-speed-fast) ease,box-shadow var(--ag-speed-fast) ease,background var(--ag-speed-fast) ease;
      }
      textarea{min-height:90px}
      input:hover,select:hover,textarea:hover{border-color:color-mix(in srgb,var(--ag-primary) 28%,var(--ag-border))!important}
      input:focus,select:focus,textarea:focus{border-color:var(--ag-primary)!important;box-shadow:0 0 0 4px var(--ag-ring)!important;outline:none!important}
      label{color:var(--ag-text)}

      .badge,.status-pill{border-radius:999px!important;font-weight:700!important;letter-spacing:.01em}
      .toast{border-radius:14px!important;box-shadow:var(--ag-shadow-lg)!important}

      .overflow-x-auto{border-radius:14px;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--ag-primary) 34%,transparent) transparent}
      table{font-variant-numeric:tabular-nums}
      table th{background:var(--ag-surface-2)!important;color:var(--ag-text)!important;font-size:.72rem!important;letter-spacing:.045em;text-transform:uppercase;white-space:nowrap}
      table td,table th{border-color:var(--ag-border)!important}
      table tbody tr{transition:background var(--ag-speed-fast) ease}
      table tbody tr:hover{background:color-mix(in srgb,var(--ag-primary-soft) 34%,transparent)!important}

      .bg-slate-50{background:var(--ag-surface-2)!important}
      .border-slate-200,.border-slate-100{border-color:var(--ag-border)!important}
      .text-slate-800,.text-slate-700,.text-slate-600{color:var(--ag-text)!important}
      .text-slate-500,.text-slate-400{color:var(--ag-muted)!important}

      .auth-gate{background:linear-gradient(145deg,rgba(15,23,42,.78),rgba(30,41,59,.7))!important;backdrop-filter:blur(8px)}
      .auth-card{border-radius:24px!important;box-shadow:var(--ag-shadow-lg)!important}
      .auth-logo{background:linear-gradient(135deg,var(--ag-primary),var(--ag-accent))!important;box-shadow:0 14px 30px rgba(79,70,229,.22)!important}
      .auth-google-btn{min-height:48px!important;border-radius:13px!important}

      @media (max-width:767px){
        .section{padding:1rem!important}
        .panel{padding:1rem!important;border-radius:16px!important}
        #dashboardQuickActions{gap:.75rem!important}
        #dashboardQuickActions>button{min-height:78px;padding:1rem!important}
        .metric-card{padding:1rem!important}
        header{padding:.65rem .9rem!important}
        header .text-sm.font-extrabold{font-size:.9rem!important}
        table{font-size:.79rem}
      }
    }

    @media (prefers-reduced-motion:reduce){
      html{scroll-behavior:auto!important}
      *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
    }
'''

assert '</style>' in text
text = text.replace('</style>', CSS + '\n  </style>', 1)

JS = r'''

    // V10 · mejoras semánticas y de interacción UI/UX Pro Max.
    function applyV10Accessibility(){
      document.querySelectorAll('button[title]:not([aria-label])').forEach(el=>el.setAttribute('aria-label',el.getAttribute('title')));
      document.querySelectorAll('button i, a i').forEach(icon=>{
        const parent=icon.parentElement;
        if(parent && (parent.textContent||'').trim()) icon.setAttribute('aria-hidden','true');
      });
      document.querySelectorAll('input,select,textarea').forEach(el=>{
        if(!el.id || el.getAttribute('aria-label')) return;
        const safeId=(window.CSS&&CSS.escape)?CSS.escape(el.id):el.id.replace(/[^a-zA-Z0-9_-]/g,'');
        const label=document.querySelector(`label[for="${safeId}"]`);
        if(label) return;
        const ph=el.getAttribute('placeholder');
        if(ph) el.setAttribute('aria-label',ph);
      });
    }
    window.addEventListener('DOMContentLoaded',applyV10Accessibility,{once:true});
'''

pos = text.rfind('</script>')
assert pos != -1
text = text[:pos] + JS + text[pos:]

after = [
    'const APP_VERSION = 10;',
    "const CLOUD_FILE = 'AulaGestionRD.backup.json';",
    'https://www.googleapis.com/auth/drive.appdata',
    'appDataFolder',
    'googleFindBackup',
    'syncPreferredCloud',
    'restorePreferredCloud',
    'V10 · UI/UX Pro Max',
    'applyV10Accessibility',
    '--ag-primary:#4f46e5',
]
for token in after:
    assert token in text, f'Validación V10 falló: {token}'

INDEX.write_text(text, encoding='utf-8')

m = MANIFEST.read_text(encoding='utf-8')
assert 'AulaGestión RD V9' in m
MANIFEST.write_text(m.replace('AulaGestión RD V9', 'AulaGestión RD V10', 1), encoding='utf-8')

s = SW.read_text(encoding='utf-8')
s, n = re.subn(r"const CACHE='aulagestion-rd-v9-[^']+';", "const CACHE='aulagestion-rd-v10-20260915';", s, count=1)
assert n == 1
SW.write_text(s, encoding='utf-8')

DESIGN_DIR.mkdir(parents=True, exist_ok=True)
(DESIGN_DIR / 'MASTER.md').write_text('''# AulaGestión RD · Design System V10

Fuente metodológica: UI/UX Pro Max. Producto híbrido: Educational App + Productivity Tool + interfaz administrativa.

## Dirección
- Estilo principal: Accessible & Ethical + Minimalism / Swiss Style.
- Complemento: Flat Design + microinteracciones discretas.
- Objetivo: profesional, institucional, claro, rápido y amigable; evitar estética infantil o decorativa excesiva.
- Densidad: media-alta para dashboard docente, preservando espacio táctil.

## Tokens
- Primary: `#4F46E5`.
- Primary strong: `#3730A3`.
- Accent: `#0284C7`.
- Success: `#059669`. Warning: `#D97706`. Danger: `#E11D48`.
- Background: `#F6F8FC`. Surface: `#FFFFFF`. Text: `#172033`. Muted: `#64748B`.
- Dark mode usa variantes tonales, no inversión mecánica.

## Tipografía
- Sistema sans nativo para rendimiento y legibilidad.
- Jerarquía mediante peso, tamaño, espaciado y contraste; no solo color.
- Cifras de tablas y métricas con figuras tabulares.

## Espaciado y forma
- Ritmo 4/8 px.
- Radios: 12 / 16 / 20 px según jerarquía.
- Sombras: escala corta y consistente; elevación solo cuando comunica jerarquía.

## Accesibilidad
- Contraste mínimo 4.5:1 para texto normal.
- Foco visible 3 px.
- Objetivos interactivos mínimos de 44 px.
- No depender solo del color para comunicar estado.
- Botones iconográficos con nombre accesible.
- Respetar `prefers-reduced-motion`.

## Navegación
- Escritorio >=1100 px: sidebar expandida con icono + etiqueta.
- Pantallas menores: navegación compacta con tooltip/title y aria-label.
- Acciones frecuentes visibles en dashboard.

## Componentes
- Panels: superficies limpias con borde tenue.
- Metric cards: elevación discreta al hover, sin desplazar layout.
- Inputs: 44 px mínimo, foco reforzado, labels visibles cuando existan.
- Tablas: encabezado contrastado, cifras tabulares, hover sutil y scroll horizontal contenido en móvil.
- Estados de nube: píldora visible en encabezado; lógica de Drive permanece independiente del sistema visual.

## Preservación funcional
V10 no modifica `CLOUD_FILE`, OAuth scopes, `appDataFolder`, IndexedDB, estructuras de RA/RPG, asistencia ni reportes oficiales.
''', encoding='utf-8')

print(f'V10 UI/UX aplicada: {len(text.encode("utf-8"))} bytes')
