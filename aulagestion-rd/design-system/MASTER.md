# AulaGestión RD · Design System V10

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
