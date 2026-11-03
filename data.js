/* ==========================================================================
HUB DE INNOVACIÓN · data.js
Fuente única de contenido. Los textos y cifras provienen del documento
"Hub de Innovación · Cierre de agenda 2026 & agenda 2027".
Para actualizar el sitio, edita únicamente este archivo.
========================================================================== */

window.HUB_DATA = {
/* ------------------------------------------------------------------------
Marca
logo: deja "" para mostrar el texto; o pon la imagen del logo como
data URI ("data:image/png;base64,...") o como ruta a un archivo del repo.
------------------------------------------------------------------------ */
brand: {
name: "Consubanco",
logo: "data:image/png;base64,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",
title: "Hub de Innovación",
subtitle: "Cierre 2026 y agenda 2027"
},

/* ------------------------------------------------------------------------
Paleta oficial (guía de color compartida)
------------------------------------------------------------------------ */
palette: {
azulProfundo: { name: "Azul Profundo", pantone: "Pantone 534 C", hex: "#1B355D" },
naranjaLegado: { name: "Naranja Legado", pantone: "Pantone 166 C", hex: "#E75301" },
rojoCercania: { name: "Rojo Cercanía", pantone: "Pantone 174 C", hex: "#983920" },
azulHorizonte: { name: "Azul Horizonte", pantone: "Pantone 2142 C", hex: "#7DACE3" },
negro: { name: "Negro", hex: "#000000" }
},

/* ------------------------------------------------------------------------
PÁGINA PRINCIPAL
------------------------------------------------------------------------ */
portfolio: {
pageTitle: "HUB DE INNOVACIÓN",
kicker: "Hub de Innovación · Cierre 2026 y agenda 2027",
objectiveLabel: "Objetivo",
objective: "Somos dueños de una capacidad institucional y de la metodología de innovación del Grupo. Identificamos oportunidades, incubamos, experimentamos, piloteamos y entregamos evidencia para las decisiones del negocio y de la Alta Dirección",
tableTitle: "Portafolio 2026 - 2027 · Estatus de cada iniciativa",
subtitle: "Dónde cierra cada iniciativa en 2026, a qué etapa llega en 2027 y en qué trimestre.",
statement: "El portafolio: defiende y rentabiliza la base de pensionados que ya tenemos, y construye la relación con el pensionado que viene.",
columns: {
initiative: "Iniciativa",
kpi: "Cifra clave",
stage: "Etapa 2026",
status: "Estatus 2026",
roadmap: "Roadmap 2027"
},
quarters: ["Q1", "Q2", "Q3", "Q4"],
notes: [
"* MVNO: cifra con estimaciones propias, pendiente de validación con Finanzas y Riesgos.",
"Alianza rentas vitalicias: IMSS, Informe al Ejecutivo Federal y al Congreso de la Unión 2024-2025, cap. IV (sumas aseguradas del Seguro de Invalidez y Vida transferidas a aseguradoras)."
],
/* Grupos en el orden en que se muestran.
tone: color del grupo (deep · orange · mid).
stageStyle: estilo de la etiqueta de etapa (soft · solid · pending).
roadmap.from/to: trimestres (1-4) que cubre la barra del roadmap 2027.
Los campos que no existan en el documento se dejan fuera y no se muestran. */
groups: [
{
name: "Intraemprendimiento",
tone: "deep",
initiatives: [
{
projectId: "alianza-rentas-vitalicias",
name: "Alianza rentas vitalicias",
kpiValue: "$14,262 MDP",
kpiLabel: "entregó el IMSS a aseguradoras en 2024 para rentas vitalicias",
stage: "Piloto no funcional",
stageStyle: "soft",
status: "En revisión de viabilidad regulatoria con Jurídico y, después, con Cumplimiento. Posible requerimiento de consultora experta.",
roadmap: { label: "con Afore y aseguradora", from: 2, to: 3, tone: "slate" }
},
{
projectId: "brigada-cx",
name: "Brigada CX",
kpiValue: "42 mil",
kpiLabel: "clientes activos al mes en la PUC",
stage: "Piloto funcional",
stageStyle: "soft",
status: "Desarrollo de playbooks y mapeo de requerimientos de las áreas operativas clave para validación.",
roadmap: { label: "validación con áreas operativas", from: 1, to: 1, tone: "orange" }
}
]
},
{
name: "Fábrica de ideas",
tone: "orange",
initiatives: [
{
projectId: "comunidad-lazos",
name: "Comunidad Lazos",
kpiValue: "27.8%",
kpiLabel: "TIR sin costo de fondeo · base",
stage: "Salida a mercado",
stageStyle: "solid",
status: "Modelo financiero y prototipo no funcional listos. Lista para piloto funcional.",
roadmap: { label: "A producción en enero", from: 1, to: 2, tone: "deep" }
},
{
projectId: "consumovil",
name: "MVNO · ConsuMóvil",
kpiValue: "$84 MDP",
kpiMark: "*",
kpiLabel: "ingreso neto acumulado a 2031",
stage: "Piloto no funcional",
stageStyle: "soft",
status: "Calibración de la oferta según las expectativas de los consumidores y de la banca minorista.",
roadmap: { label: "Lanzamiento del piloto funcional", from: 1, to: 2, tone: "orange" }
},
{
projectId: "oferta-banca-minorista",
name: "Oferta banca minorista",
kpiValue: "$2,010 MDP",
kpiLabel: "originación acumulada 2027–2031",
stage: "Piloto no funcional",
stageStyle: "soft",
status: "En validación con clientes con Bankaya y modelo financiero con Finanzas.",
roadmap: { label: "Lanzamiento del piloto funcional", from: 1, to: 3, tone: "mid" }
}
]
},
{
name: "Innovación abierta",
tone: "mid",
initiatives: [
{
projectId: "red-de-efectivo",
name: "Red de efectivo",
kpiValue: "10,738",
kpiLabel: "puntos de depósito y retiro",
stage: "Piloto no funcional",
stageStyle: "soft",
status: "Alianza lista para mapear las capacidades operativas y tecnológicas requeridas.",
roadmap: { label: "piloto de 90 días en una cadena · sujeto a aprobación", from: 1, to: 2, tone: "pending" }
},
{
projectId: null,
name: "IA agéntica",
stage: "Piloto funcional",
stageStyle: "soft"
}
]
}
]
},


/* ------------------------------------------------------------------------
PROYECTOS
------------------------------------------------------------------------ */
projects: [
/* ======================================================================
RED DE EFECTIVO
====================================================================== */
{
id: "red-de-efectivo",
name: "Red de efectivo",
icon: "pin",
header: {
title: "Red de efectivo · 10,738 puntos a $1.00 por operación",
subtitle: "Habilita para el cliente depósito y retiro de efectivo en tienda. Propuesta del proveedor Monato."
},
tabs: [
{
id: "resumen",
label: "Resumen Ejecutivo",
blocks: [
{
type: "kpis",
cols: 4,
items: [
{ icon: "pin", value: "10,738", label: "puntos de efectivo activos hoy", note: "14,490 al cierre del roadmap comprometido" },
{ icon: "cash", value: "$1.00", label: "costo por operación para el banco", note: "IVA incluido · misma tarifa en todas las cadenas", tone: "orange" },
{ icon: "clock", value: "3 seg", label: "latencia en el punto de venta", note: "todos los puntos leen QR y código de barras" },
{ icon: "wallet", value: "$5,000", label: "límite por operación", note: "$10,000 de límite acumulado diario" }
]
},
{
type: "stats",
cols: 1,
items: [
{ value: "−89%", tone: "orange", lead: "menos costo por operación para el banco.", text: "De $9.06 y $9.55 a $1.00 en depósito y retiro." }
]
},
{
type: "segments",
title: "Cadenas dentro de la red",
items: [
{ label: "activos", display: "10,738", value: 10738, tone: "orange" },
{ label: "integrando", display: "2,402", value: 2402, tone: "sky" },
{ label: "en Q4", display: "1,350", value: 1350, tone: "line" }
]
}
]
},
{
id: "red-de-cadenas",
label: "Red de Cadenas",
blocks: [
{
type: "grid",
cols: [3, 2],
blocks: [
{
type: "table",
title: "Cadenas dentro de la red",
columns: [
{ label: "Cadena" },
{ label: "Puntos", align: "right" },
{ label: "Estado" },
{ label: "Llega en" },
{ label: "Cobro al cliente", align: "right" }
],
rows: [
{ cells: [{ text: "SYStienda", dot: "orange", strong: true }, { text: "5,698", strong: true }, { text: "Operando", tone: "orange" }, "3 días", "$12.00"] },
{ cells: [{ text: "Tiendas 3B", dot: "orange", strong: true }, { text: "3,400", strong: true }, { text: "Operando", tone: "orange" }, "8 días", "$10.00"] },
{ cells: [{ text: "Tiendas Neto", dot: "sky", strong: true }, { text: "1,700", strong: true }, { text: "Integrando", tone: "muted" }, "—", "$12.00"] },
{ cells: [{ text: "Yza Farmacias", dot: "sky", strong: true }, { text: "1,350", strong: true }, { text: "Entra en Q4", tone: "muted" }, "—", "—"] },
{ cells: [{ text: "Soriana", dot: "orange", strong: true }, { text: "822", strong: true }, { text: "Operando", tone: "orange" }, "2 días", "$12.00"] },
{ cells: [{ text: "Chedraui", dot: "sky", strong: true }, { text: "702", strong: true }, { text: "Integrando", tone: "muted" }, "8 días", "$12.00"] },
{ cells: [{ text: "Asturiano", dot: "orange", strong: true }, { text: "524", strong: true }, { text: "Operando", tone: "orange" }, "3 días", "$15.00"] },
{ cells: [{ text: "GOmart", dot: "orange", strong: true }, { text: "294", strong: true }, { text: "Operando", tone: "orange" }, "8 días", "$13.00"] }
],
summary: "10,738 activos · 2,402 integrando · 1,350 en Q4",
footnote: "Llega en: días hábiles que tarda el dinero en abonarse al banco. Cobro al cliente: lo cobra la tienda en caja, aparte del $1.00 del banco. Tarifario del 30-ago-2026; su vigencia de 30 días ya venció."
},
{
type: "hbars",
title: "Puntos por cadena",
legend: [
{ label: "Operando", tone: "orange" },
{ label: "Integrando", tone: "sky" },
{ label: "Entra en Q4", tone: "line" }
],
items: [
{ label: "SYStienda", value: 5698, display: "5,698", tone: "orange" },
{ label: "Tiendas 3B", value: 3400, display: "3,400", tone: "orange" },
{ label: "Tiendas Neto", value: 1700, display: "1,700", tone: "sky" },
{ label: "Yza Farmacias", value: 1350, display: "1,350", tone: "line" },
{ label: "Soriana", value: 822, display: "822", tone: "orange" },
{ label: "Chedraui", value: 702, display: "702", tone: "sky" },
{ label: "Asturiano", value: 524, display: "524", tone: "orange" },
{ label: "GOmart", value: 294, display: "294", tone: "orange" }
]
}
]
}
]
},
{
id: "impacto-financiero",
label: "Impacto Financiero",
blocks: [
{
type: "compare",
title: "Cuánto nos cuesta cada operación",
max: 9.55,
groups: [
{
title: "Depósito de efectivo",
icon: "down",
rows: [
{ label: "Hoy · OXXO", value: 9.06, display: "$9.06", tone: "sky40" },
{ label: "Con Monato", value: 1.0, display: "$1.00", tone: "orange", strong: true }
]
},
{
title: "Disposición y retiro de efectivo",
icon: "up",
rows: [
{ label: "Hoy · OXXO", value: 9.55, display: "$9.55", tone: "sky40" },
{ label: "Con Monato", value: 1.0, display: "$1.00", tone: "orange", strong: true }
]
}
]
},
{
type: "stats",
cols: 1,
items: [
{ value: "−89%", tone: "orange", lead: "menos costo por operación para el banco.", text: "De $9.06 y $9.55 a $1.00 en depósito y retiro." }
]
},
{ type: "notes", items: ["Costo actual con OXXO, PROSA incluido: dato interno. Falta el volumen actual para traducirlo a pesos al año."] }
]
},
{
id: "recomendacion",
label: "Recomendación",
blocks: [
{
type: "callout",
tone: "orange",
icon: "check",
text: "Autorizar la negociación del contrato marco con Monato y un piloto de 90 días en una cadena, con tarifas reconfirmadas.",
sub: "El piloto mide el volumen real de depósitos y retiros por cadena para confirmar el ahorro antes de escalar."
}
]
}
]
},

/* ======================================================================
ALIANZA RENTAS VITALICIAS
====================================================================== */
{
id: "alianza-rentas-vitalicias",
name: "Alianza rentas vitalicias",
icon: "shield",
header: {
title: "Alianza para rentas vitalicias",
subtitle: "La iniciativa evolucionó de un producto propio a una alianza comercial con un grupo que ya tiene Afore y aseguradora de rentas vitalicias."
},
tabs: [
{
id: "oportunidad",
label: "Oportunidad",
blocks: [
{
type: "stats",
title: "Por qué ahora",
cols: 3,
items: [
{ value: "5.10 M", tone: "deep", lead: "pensionados Ley 73: la última ola.", text: "Crecieron 6.7% en 2025, pero el 71% ya tiene 65 años o más." },
{ value: "516 mil", tone: "orange", lead: "rentas vitalicias Ley 97 otorgadas, que paga una aseguradora.", text: "Suman 31 mil más cada año, y hoy no atendemos a ninguna." },
{ value: "$196 MDP", tone: "orange", lead: "al año de ingreso por intereses que hoy no podemos originar sobre esas rentas,", text: "a nuestra penetración actual. A 2040, el orden de magnitud acumulado es de $4,400 MDP." }
]
},
{
type: "callout",
tone: "sky",
icon: "trend",
lead: "Y el mercado de mañana ya despegó:",
text: "rentas vitalicias por retiro +65% en 2025 (de 74 a 122), con pensiones 2.2 veces la garantizada."
},
{
type: "heading",
kicker: "PPR · El costo de no hacer nada",
title: "Estamos viviendo la última ola de pensionados que hoy sabemos atender",
text: "Lo que hoy sostiene el negocio es una generación que se retira y no se renueva. Detrás viene la Ley 97, cuyas pensiones de por vida paga en su mayoría una aseguradora."
},
{
type: "grid",
cols: [1, 1],
blocks: [
{
type: "vbars",
title: "La ola que hoy atendemos · Pensionados Ley 73",
items: [
{ label: "2023", value: 4.54, display: "4.54 M", tone: "sky80" },
{ label: "2024", value: 4.78, display: "4.78 M", tone: "sky80" },
{ label: "2025", value: 5.10, display: "5.10 M", tone: "sky80" },
{ label: "2026*", value: 5.35, display: "5.35 M", tone: "sky40" }
],
side: [
{ value: "+6.7%", text: "creció en 2025: se pensionaron 464 mil" },
{ value: "71%", text: "ya tiene 65 años o más, y nadie nuevo puede entrar a Ley 73" }
]
},
{
type: "stacked",
title: "Lo que viene · Pensionados Ley 97",
legend: [
{ label: "con renta vitalicia · la paga una aseguradora", tone: "orange40" },
{ label: "otras Ley 97 (garantizadas, temporales)", tone: "line" }
],
items: [
{ label: "2023", total: { value: 560, display: "560 mil" }, part: { value: 457, display: "457 mil", tone: "orange40" } },
{ label: "2024", total: { value: 603, display: "603 mil" }, part: { value: 484, display: "484 mil", tone: "orange40" } },
{ label: "2025", total: { value: 652, display: "652 mil" }, part: { value: 516, display: "516 mil", tone: "orange" } }
],
side: [
{ value: "+31 mil", tone: "orange", text: "rentas vitalicias nuevas en 2025, 12% más que en 2024. Hoy no atendemos a ninguna." },
{ value: "+65%", tone: "orange", text: "rentas vitalicias por retiro en 2025, con pensiones 2.2 veces la garantizada: el mercado de mañana." }
]
}
]
},
{
type: "grid",
cols: [1, 1, 1],
title: "Lo que nos cuesta no estar ahí · Ingreso por intereses",
blocks: [
{ type: "stats", cols: 1, items: [{ value: "$196 MDP", tone: "orange", text: "al año que hoy no podemos originar sobre las 515,500 rentas vitalicias, a nuestra penetración actual de 4.0%." }] },
{ type: "stats", cols: 1, items: [{ value: "≈ $4,400 MDP", tone: "red", text: "acumulados de 2026 a 2040 si no hacemos nada. Es un orden de magnitud, no un pronóstico: el cálculo y sus supuestos están en la lámina de sustento." }] },
{ type: "statement", compact: true, text: "Hoy nos va bien, sin embargo el mercado esta madurando y tendrá un momento en el que se agote." }
]
},
{
type: "notes",
items: [
"Fuente: IMSS, Memoria Estadística 2023, 2024 y 2025, cap. X (cuadros X.19–X.22, X.23, X.26 y X.20). Ley 97 2023–2024: cuadro por régimen + rentas vitalicias del X.20. *2026: dato interno CSB. Cálculo en la lámina de sustento.",
"Fuentes: IMSS, Memoria Estadística 2023–2025, cap. X (cuadros X.20, X.22, X.23, X.26 y X.28); cartera CSB, corte ago-2026; dictamen interno de Jurídico. Ingreso por intereses, no margen; cálculo y supuestos en las láminas de sustento."
]
}
]
},
{
id: "journey-pensionado",
label: "Journey Pensionado",
blocks: [
{
type: "heading",
kicker: "PPR · Journey del pensionado",
title: "Hoy estamos parcialmente presentes para el pensionado Ley 97"
},
{
type: "journey",
phases: [
{ icon: "briefcase", label: "Vida laboral · acumulación", value: "~30 años" },
{ icon: "doc", label: "El retiro", value: "1 mes", accent: true },
{ icon: "sunset", label: "Desacumulación · pensión", value: "20 a 25 años" }
],
left: {
title: "El trabajador acumula",
text: "Cotiza al IMSS o al ISSSTE y su ahorro se acumula en la Afore. Su saldo crece durante toda la vida laboral, pero nunca sale de ahí.",
hereLabel: "Dónde estamos hoy",
hereTitle: "Nómina, crédito con descuento vía nómina y seguros.",
hereText: "Solo competimos en un mercado acotado. Próximamente: diversificación de productos."
},
middle: {
text: "Recibe el Documento de Oferta y elige cómo cobrar su pensión.",
absentLabel: "Aquí no estamos",
absentText: "Ocurre entre la Afore y las aseguradoras"
},
options: [
{
letter: "A",
title: "Renta vitalicia",
text: "Compra una renta y cobra un monto fijo mientras viva. Requiere que su saldo supere el costo de la pensión mínima (≈ $1.5 M en la Afore).",
payer: "La paga una aseguradora · de por vida",
amount: "$12,435",
amountNote: "al mes en promedio, 2025",
tone: "orange"
},
{
letter: "B",
title: "Pensión mínima garantizada",
text: "Si el saldo no alcanza, la Afore le paga con su saldo y, al agotarse, el Gobierno Federal continúa mientras viva.",
payer: "Afore y luego gobierno · de por vida",
amount: "$5,650",
amountNote: "al mes en promedio, 2025",
tone: "deep"
},
{
letter: "C",
title: "Retiro programado",
text: "Conserva la propiedad del saldo y la Afore le paga mensualidades hasta agotarlo.",
payer: "La paga la Afore · ingreso temporal",
tone: "muted"
}
],
presence: {
title: "Dónde estamos nosotros",
partial: "Parcialmente",
absent: "Ausentes",
absentLong: "Ausentes durante todo el tramo largo"
}
},
{
type: "stats",
cols: 1,
items: [
{ value: "516 mil", tone: "orange", lead: "rentas vitalicias Ley 97 ya otorgadas, por retiro, invalidez, vida y riesgos de trabajo, y suman 31 mil más cada año.", text: "Las paga una aseguradora: un ingreso mensual de por vida, depositable, descontable y bancarizable durante 20 a 25 años." }
]
},
{ type: "statement", tone: "orange", text: "El tramo largo y rentable es el de la derecha, y el acceso a ese tramo se juega en un solo mes: el mes en que el pensionado elige quién le pagará." },
{ type: "notes", items: ["Fuente: IMSS, Memoria Estadística 2025, cuadros X.20 (rentas vitalicias Ley 97 otorgadas, acumulado jul-1997 a dic-2025: 515,500) y X.28 (pensión mensual promedio de las otorgadas en 2025, ponderada por sexo). El umbral de $1.5 M es un supuesto propio, no una regla: depende de la PMG vigente, la edad de retiro y los beneficiarios; a validar con el asesor actuarial."] }
]
},
{
id: "propuesta",
label: "Propuesta",
blocks: [
{
type: "alliance",
title: "Qué proponemos",
headline: "Una sola alianza con un grupo que ya tiene Afore y aseguradora",
us: { name: "Consubanco", text: "Banco, fuerza comercial y cliente" },
partnerLabel: "Socio comercial",
partners: [
{ icon: "dollar", name: "Afore", text: "Acumula el ahorro" },
{ icon: "shield", name: "Aseguradora", text: "Paga la renta vitalicia" }
]
},
{
type: "text",
cols: 2,
items: [
{ lead: "Sin entidad nueva ni capital.", text: "El socio ya emite rentas vitalicias; el pensionado cobra su pensión en Consubanco y ahí le damos crédito, ahorro y seguros. Cada parte cobra con sus propias palancas, no por comisión de venta (Art. 102 LISF).", tone: "deep" },
{ lead: "Qué cambia frente a la filial de tres socios:", text: "más rápido y sin aportar capital; a cambio, no participamos del diferencial de tasa de la aseguradora.", tone: "orange" }
]
}
]
},
{
id: "criticidades",
label: "Criticidades",
blocks: [
{
type: "cards",
title: "Criticidades a cerrar este año",
cols: 3,
items: [
{ icon: "check", title: "Viabilidad regulatoria (validación interna y externa)", text: "De la alianza y del convenio para descontar crédito sobre una renta vitalicia que paga la aseguradora, no el IMSS." },
{ icon: "check", title: "Mapa competitivo y carta de intención", text: "Profuturo o SURA: los grupos con Afore y aseguradora de pensiones, sin banco propio en México." },
{ icon: "check", title: "Mapeo de riesgos", text: "Matriz de riesgos identificados y sus mitigantes para el modelo de negocio." }
],
footnote: "Pendiente de validación con Riesgos y Cumplimiento."
},
{
type: "callout",
tone: "deep",
icon: "flag",
text: "Validar la oportunidad en diez semanas, con una inversión inicial acotada.",
sub: "Entregables a diciembre: viabilidad regulatoria de la alianza y del convenio de descuento, y carta de intención con el socio. · Gate 2: 2027."
}
]
},
{
id: "plan-de-trabajo",
label: "Plan de Trabajo",
blocks: [
{
type: "heading",
kicker: "PPR · El plan a cierre de año",
title: "Catorce semanas: la viabilidad jurídica antes de la sesión, el caso de negocio y las alianzas en paralelo después"
},
{
type: "gantt",
months: [
{ label: "Octubre", span: 3, shade: true },
{ label: "Noviembre", span: 4 },
{ label: "Diciembre", span: 4, shade: true },
{ label: "Enero", span: 3 }
],
weeks: [
{ day: "15", month: "oct" }, { day: "22", month: "oct" }, { day: "29", month: "oct" },
{ day: "6", month: "nov" }, { day: "13", month: "nov" }, { day: "20", month: "nov" }, { day: "27", month: "nov" },
{ day: "3", month: "dic" }, { day: "10", month: "dic" }, { day: "17", month: "dic" }, { day: "23", month: "dic" },
{ day: "8", month: "ene" }, { day: "15", month: "ene" }, { day: "22", month: "ene" }
],
milestones: [
{ week: 5, label: "13 nov" },
{ week: 14, label: "22 ene" }
],
lanes: [
{
title: "Fase 0 · Viabilidad jurídica", owner: "Jurídico CSB + consulta externa", tone: "orange",
tasks: [
{ label: "Seis preguntas a Jurídico y consulta puntual a externo", from: 1, to: 3 },
{ label: "Dictamen interno de viabilidad", from: 3, to: 4 },
{ label: "Cotización de despacho legal (en caso de requerir) y actuario", from: 2, to: 4 }
]
},
{
title: "Preparación de la sesión", owner: "Estrategia + Finanzas + Riesgos", tone: "sky",
tasks: [
{ label: "Cartera de pensionados: monto, % del portafolio y duración", from: 1, to: 2 },
{ label: "Recálculo del modelo con el umbral de $1.5 M", from: 2, to: 3 },
{ label: "Armado del deck e integración del dictamen", from: 2, to: 4 },
{ label: "Ensayo con Dirección de Estrategia", from: 4, to: 4 },
{ label: "Sesión con CEO · decisión go / no-go", milestone: 5, milestoneLabel: "13 nov" }
]
},
{
title: "Track A · Modelo de negocio", owner: "Estrategia · Finanzas · actuario", tone: "deep",
tasks: [
{ label: "Contratación del asesor actuarial", from: 5, to: 6 },
{ label: "Definición de los cinco supuestos del modelo", from: 5, to: 7 },
{ label: "Corrida del modelo y sensibilidad en tres escenarios", from: 7, to: 10 },
{ label: "Reparto de valor entre socios y caso de negocio final", from: 10, to: 13 }
]
},
{
title: "Track B · Alianzas y regulación", owner: "Estrategia · Jurídico · despacho", tone: "sky",
tasks: [
{ label: "Contratación del despacho legal especializado", from: 5, to: 6 },
{ label: "Opinión formal: figura societaria y ruta ante los tres reguladores", from: 6, to: 11 },
{ label: "Term sheet indicativo y one-pager por contraparte", from: 5, to: 7 },
{ label: "Sondeo con Principal y con las aseguradoras candidatas", from: 7, to: 12 },
{ label: "Negociación de la carta de intención", from: 11, to: 13 }
]
},
{
title: "Cierre", owner: "Todo el equipo", tone: "orange",
tasks: [
{ label: "Integración del paquete final", from: 13, to: 13 },
{ label: "Comité · recomendación go / no-go", milestone: 14, milestoneLabel: "22 ene" }
]
}
]
}
]
}
]
},

/* ======================================================================
COMUNIDAD LAZOS
====================================================================== */
{
id: "comunidad-lazos",
name: "Comunidad Lazos",
icon: "users",
header: {
title: "Comunidad Lazos",
subtitle: "Espacio digital propio para los clientes del Programa Lazos, desarrollado con Soy Más bajo marca Consubanco. Soy Más aporta el 50% de la inversión; doce semanas a producción, sin tocar el core bancario."
},
tabs: [
{
id: "caso-de-negocio",
label: "Caso de Negocio",
blocks: [
{
type: "kpis",
cols: 4,
items: [
{ value: "27.8%", label: "TIR sin costo de fondeo", note: "escenario base" },
{ value: "18.3%", label: "TIR con costo de fondeo", note: "escenario base · 15.3% conservador, 30.6% optimista", tone: "orange" },
{ value: "$642 MDP", label: "venta incremental 2026–2029", note: "13,113 créditos × ticket de $48,929" },
{ value: "Oct 2029", label: "neteo mensual positivo", note: "y se mantiene a partir de ahí" }
]
},
{
type: "table",
title: "La originación · Venta incremental contra costo de originación · MDP",
columns: [
{ label: "" },
{ label: "2026", align: "right" },
{ label: "2027", align: "right" },
{ label: "2028", align: "right" },
{ label: "2029", align: "right" },
{ label: "Total 2026–2029", align: "right" }
],
rows: [
{ cells: [{ text: "Venta incremental", sub: "créditos colocados en la comunidad", strong: true }, { text: "2.0", strong: true }, { text: "84.0", strong: true }, { text: "279.3", strong: true }, { text: "276.4", strong: true }, { text: "641.6", strong: true }] },
{ cells: [{ text: "Costo de plataforma", sub: "lo que pagamos por la plataforma · $17.46", strong: true }, "1.41", "10.37", "10.37", "10.37", { text: "32.53", strong: true }] },
{ cells: [{ text: "CAC Soy Más", sub: "costo de originación por cliente · 0.12% de la venta", strong: true }, "<0.01", "0.10", "0.34", "0.33", { text: "0.77", strong: true }] },
{ cells: [{ text: "Costo de originación", sub: "plataforma + CAC", strong: true }, { text: "1.42", strong: true }, { text: "10.47", strong: true }, { text: "10.71", strong: true }, { text: "10.70", strong: true }, { text: "33.30", strong: true }] },
{ highlight: "orange", cells: [{ text: "CO sobre la venta", strong: true }, { text: "72.4%", tone: "orange", strong: true }, { text: "12.5%", tone: "orange", strong: true }, { text: "3.8%", tone: "orange", strong: true }, { text: "3.9%", tone: "orange", strong: true }, { text: "5.2%", tone: "orange", strong: true }] }
],
footnoteLead: "La plataforma es un costo fijo y el CAC es variable:",
footnote: "con volumen, el CO pasa de 72% en el arranque a menos de 4% desde 2028. El servicing ($82 por crédito) no está incluido; no mueve el CO de forma relevante."
},
{
type: "grid",
cols: [3, 2],
title: "El ingreso · Dos motores",
blocks: [
{
type: "engine",
title: "Motor A · Crédito y captación",
share: "98.7% del ingreso",
tone: "orange",
stats: [
{ value: "$575.7 MDP", text: "ingreso por intereses 2026–2034", tone: "orange" },
{ value: "$41.4 MDP", text: "captación incremental a sep-2029", tone: "deep" }
],
chart: {
title: "Ingreso por intereses por año · se sigue cobrando hasta 2034",
items: [
{ label: "2026", value: 0.1, display: "0.1", tone: "orange40" },
{ label: "2027", value: 10.4, display: "10.4", tone: "orange40" },
{ label: "2028", value: 64.0, display: "64.0", tone: "orange40" },
{ label: "2029", value: 151.2, display: "151.2", tone: "orange" }
]
}
},
{
type: "engine",
title: "Motor B · Red de aliados",
share: "1.3% del ingreso",
tone: "sky",
body: "$7.8 MDP de comisión 2026–2034, con compra promedio de $304 al mes por cliente."
}
]
},
{ type: "callout", tone: "deep", icon: "flag", text: "Go de construcción y resolución del gobierno de datos con Seguridad de la Información y Jurídico." },
{ type: "notes", items: ["Pendiente crítico: tratamiento y gobierno de los datos de clientes, la única dependencia real. · Pago contra hitos, 50/50 de la inversión. · Escenario base a 36 meses: ticket $48,929, plazo 56 meses, tasa 2.57% mensual. Fuente: modelo financiero del caso."] }
]
},
{
id: "la-comunidad",
label: "La Comunidad",
blocks: [
{
type: "heading",
title: "El Programa Lazos ya vincula productos. Comunidad Lazos vincula personas.",
lead: "Un sitio web para el cliente 50+.",
text: "Hoy solo lo tocamos al prestarle y al cobrarle; aquí entra por gusto, nos dice quién es y ve nuestros productos."
},
{
type: "grid",
cols: [1, 1],
blocks: [
{
type: "list",
title: "Lo que haremos · El sitio",
items: [
{ icon: "quote", title: "Testimonios", text: "Clientes 50+ cuentan lo que viven; el banco modera." },
{ icon: "gift", title: "Beneficios y descuentos", text: "La red de aliados del Programa Lazos, redimible ahí." },
{ icon: "book", title: "Artículos de interés", text: "Salud, familia, trámites y calidad de vida." },
{ icon: "card", title: "Productos Consubanco", text: "Venta cruzada: crédito, renovación y lo que siga." },
{ icon: "userPlus", title: "Referidos", text: "Trae a quien se parece a él y, al hacerlo, pertenece." },
{ icon: "star", title: "NPS y calificaciones", text: "Encuesta, estrellas y contacto directo todo el año." }
]
},
{
type: "hub",
title: "Lo que conocemos de él",
center: "Cliente Lazos 50+",
nodes: [
{ icon: "pin", title: "¿Dónde vive?", text: "Estado, municipio, ciudad" },
{ icon: "users", title: "¿Con quién vive?", text: "Con familia o solo" },
{ icon: "heart", title: "¿Qué le gusta?", text: "Intereses personales y familiares" },
{ icon: "target", title: "¿Qué necesita?", text: "Lo que le hace falta hoy" },
{ icon: "hand", title: "¿Cómo lo ayudamos?", text: "A mejorar su calidad de vida" }
],
caption: "Lo que ningún producto financiero nos dice de este cliente."
}
]
},
{ type: "statement", tone: "orange", text: "Que el cliente entre por el beneficio, se quede por la pertenencia, y en el camino nos diga quién es." },
{ type: "notes", items: ["Salida a producción y lanzamiento en enero de 2027 · El conocimiento del cliente no se compra hecho y no se replica con tasa."] }
]
},
{
id: "beneficios-banco",
label: "Beneficios para el Banco",
blocks: [
{
type: "grid",
cols: [3, 2],
blocks: [
{
type: "heading",
kicker: "Modelo de negocio · Escenario base · 36 meses de proyección",
title: "Dos motores de ingreso incremental para el banco",
text: "Proyección a 36 meses, de 2026 a 2029."
},
{
type: "kpis",
cols: 2,
items: [
{ value: "27.8%", label: "TIR sin costo de fondeo", tone: "orange" },
{ value: "18.3%", label: "TIR con costo de fondeo", tone: "orange" }
]
}
]
},
{
type: "chips",
items: ["Ticket promedio $48,929", "plazo 56 meses", "tasa 2.57% mensual", "servicing $82 por crédito"]
},
{
type: "premises",
title: "Premisas del modelo · Las palancas que mueven los motores",
items: [
{ value: "5% → 30%", text: "Crecimiento de usuarios activos en 24 meses", tone: "deep" },
{ value: "+20% anual", text: "Uplift de renovación sobre activos", tone: "deep" },
{ value: "2% · 35%", text: "Referidos sobre clientes activos y su conversión", tone: "deep" },
{ value: "1% → 15%", text: "Transaccionalidad con aliados embebidos 24 meses", tone: "orange" },
{ value: "+$1,500", text: "Saldo promedio en cuenta CSB (clients activos)", tone: "orange" }
]
},
{
type: "banner",
value: "Octubre 2029",
text: "El negocio se paga solo: desde ese mes el neteo de ingresos menos costos es positivo (+$16.7 MDP en el mes) y se mantiene así a partir de ahí."
},
{
type: "grid",
cols: [3, 2],
blocks: [
{
type: "engine",
title: "Motor A · Crédito y captación",
share: "98.7% del ingreso",
tone: "deep",
desc: "El cliente activo en la plataforma renueva su crédito antes y refiere a quien califica. Cada crédito se coloca al ticket promedio y paga intereses durante 56 meses; además, ese cliente deja más saldo en su cuenta.",
stats: [
{ value: "$642 MDP", text: "venta originada", note: "= 13,113 × $48,929", tone: "deep" },
{ value: "$575.7 MDP", text: "ingreso por intereses", note: "Cobrando 2026 - 2034", tone: "deep" },
{ value: "$41.4 MDP", text: "Captación incremental por clientes activos a sep 2029", tone: "deep" },
{ value: "$2.9 MDP", text: "Eficiencia en costo de fondeo, ya dentro de la TIR", tone: "deep" }
],
charts: [
{
title: "Ingreso por intereses por año · MDP",
items: [
{ label: "2026", value: 0.1, display: "0.1", tone: "sky" },
{ label: "2027", value: 10.4, display: "10.4", tone: "sky" },
{ label: "2028", value: 64.0, display: "64.0", tone: "sky" },
{ label: "2029", value: 151.2, display: "151.2", tone: "sky" }
]
},
{
title: "Saldo de captación por año · MDP",
items: [
{ label: "2026", value: 1.3, display: "1.3", tone: "deep" },
{ label: "2027", value: 17.2, display: "17.2", tone: "deep" },
{ label: "2028", value: 37.8, display: "37.8", tone: "deep" },
{ label: "2029", value: 41.4, display: "41.4", tone: "deep" }
]
}
]
},
{
type: "engine",
title: "Motor B · Red de aliados",
share: "1.3% del ingreso",
tone: "orange",
desc: "El cliente de la comunidad compra en los comercios aliados de Soy Más. Cada compra deja una comisión bruta de 5% y Consubanco recibe la mitad, sin costo adicional para el cliente.",
stats: [
{ value: "$7.8 MDP", text: "ingreso por comisión", note: "2026 - 2034", tone: "deep" },
{ value: "$304", text: "compra promedio", note: "al mes por cliente", tone: "deep" }
],
charts: [
{
title: "Ingreso por comisión por año · Miles de pesos",
titleTone: "orange",
items: [
{ label: "2026", value: 3, display: "3", tone: "orange" },
{ label: "2027", value: 244, display: "244", tone: "orange" },
{ label: "2028", value: 904, display: "904", tone: "orange" },
{ label: "2029", value: 1220, display: "1,220", tone: "orange" }
]
}
],
foot: "La transaccionalidad se estabiliza en 15% y el ingreso se vuelve recurrente."
}
]
}
]
},
{
id: "aliado-estrategico",
label: "Aliado Estratégico",
blocks: [
{
type: "heading",
kicker: "La alianza",
title: "Soy Más construye el sitio. Nosotros definimos qué se desarrolla.",
text: "No es una plataforma de catálogo: es un ecosistema ya probado en el segmento, que desarrolla sobre los requerimientos que nosotros marcamos."
},
{
type: "kpis",
cols: 5,
tone: "orange",
items: [
{ value: "51,536", label: "Usuarios registrados en su Website", tone: "orange" },
{ value: "12,967", label: "Usuarios activos últimos 6 meses", tone: "orange" },
{ value: "USD 3M", label: "ronda semilla · enero 2026", tone: "orange" },
{ value: "+60", label: "marcas aliadas operando", tone: "orange" },
{ value: "5", label: "instituciones financieras aliadas", tone: "orange" }
]
},
{
type: "grid",
cols: [1, 1],
blocks: [
{
type: "chips",
title: "Ya opera con instituciones financieras",
variant: "solid",
items: ["Profuturo", "INVEX Banco", "Actinver", "myRetirement", "Yotepresto"],
text: "Grupo Profuturo —más de 8 millones de clientes— invirtió en Soy Más a través de su brazo de capital emprendedor. El socio ya sabe operar con la exigencia de una institución financiera regulada.",
after: {
title: "Y con más de 60 marcas comerciales",
items: ["cinépolis", "gandhi", "KidZania", "vips", "La Europea", "City Express", "Chedraui", "DEVLYN", "dentalia", "KALONI", "USANA", "tripbeat"]
}
},
{
type: "list",
title: "Qué aporta al proyecto",
variant: "table",
items: [
{ icon: "dollar", title: "50% de la inversión", text: "Soy Más aporta la mitad del costo de crear la plataforma.", highlight: true },
{ icon: "compass", title: "Know-how del segmento 50+", text: "Años entendiendo cómo navega y qué le interesa a este cliente." },
{ icon: "gift", title: "Alianzas ya establecidas", text: "Red comercial negociada y operando, sin convenios uno por uno." },
{ icon: "layers", title: "Capacidad de desarrollo", text: "Equipo y tecnología para construir a nuestra medida." },
{ icon: "pen", title: "Contenido especializado", text: "Producción y curaduría continua para nuestro público objetivo." },
{ icon: "chip", title: "Herramientas propias", text: "Asistente con IA, comparador de medicamentos, juegos y trivias." }
]
}
]
},
{ type: "statement", text: "Nosotros marcamos qué se construye y en qué orden; ellos aportan la mitad de la inversión y la capacidad de hacerlo rápido y bien." }
]
}
]
},

/* ======================================================================
CONSUMÓVIL
====================================================================== */
{
id: "consumovil",
name: "MVNO · ConsuMóvil",
icon: "phone",
header: {
title: "ConsuMóvil",
subtitle: "Escenario conservador de 63 meses, de octubre 2026 a diciembre 2031. Revenue share de Consubanco: 50% sobre la ganancia. Cifras en millones de pesos."
},
tabs: [
{
id: "caso-de-negocio",
label: "Caso de Negocio",
blocks: [
{
type: "kpis",
cols: 4,
items: [
{ value: "$83.9 MDP", label: "utilidad Consubanco 2027–2031", note: "escenario con promoción" },
{ value: "$180.2 MDP", label: "utilidad Consubanco 2027–2031", note: "escenario sin promoción", tone: "orange" },
{ value: "146,492", label: "líneas activas", note: "al cierre de diciembre de 2031" },
{ value: "$21", label: "utilidad Consubanco al mes", note: "por línea activa · escenario con promoción" }
]
},
{
type: "grid",
cols: [3, 2],
blocks: [
{
type: "table",
title: "Estado de resultados proyectado",
dense: true,
columns: [
{ label: "" },
{ label: "2027", align: "right" },
{ label: "2028", align: "right" },
{ label: "2029", align: "right" },
{ label: "2030", align: "right" },
{ label: "2031", align: "right" },
{ label: "Total", align: "right" }
],
rows: [
{ section: "Operación · miles de líneas" },
{ cells: ["Líneas nuevas", "12.7", "46.0", "54.7", "64.4", "75.8", { text: "253.6", strong: true }] },
{ cells: ["Bajas por churn", "0.9", "9.5", "21.3", "32.3", "43.1", { text: "107.1", strong: true }] },
{ strong: true, cells: ["Líneas activas al cierre", "11.8", "48.3", "81.7", "113.8", "146.5", "146.5"] },
{ cells: ["Ingreso neto mensual por línea · $", "178", "171", "174", "180", "186", { text: "180", strong: true }] },
{ section: "Ingreso" },
{ cells: ["Ingreso bruto (con IVA)", "9.5", "79.0", "168.4", "259.1", "356.1", { text: "872.1", strong: true }] },
{ strong: true, cells: ["Ingreso neto", "7.8", "65.2", "138.9", "213.6", "293.6", "719.1"] },
{ section: "Escenario con promoción", tone: "deep" },
{ cells: ["Ganancia total", "1.8", "15.2", "32.4", "49.9", "68.5", { text: "167.9", strong: true }] },
{ muted: true, cells: ["Margen sobre ingreso neto", "23.3%", "23.4%", "23.4%", "23.4%", "23.3%", "23.3%"] },
{ strong: true, highlight: "sky", cells: ["Utilidad Consubanco · 50%", "0.9", "7.6", "16.2", "24.9", "34.3", "83.9"] },
{ section: "Escenario sin promoción", tone: "orange" },
{ cells: ["Ganancia total", "3.9", "32.7", "69.6", "107.1", "147.2", { text: "360.4", strong: true }] },
{ muted: true, cells: ["Margen sobre ingreso neto", "50.1%", "50.1%", "50.1%", "50.1%", "50.1%", "50.1%"] },
{ strong: true, highlight: "orange", cells: [{ text: "Utilidad Consubanco · 50%", tone: "red" }, { text: "2.0", tone: "red" }, { text: "16.3", tone: "red" }, { text: "34.8", tone: "red" }, { text: "53.5", tone: "red" }, { text: "73.6", tone: "red" }, { text: "180.2", tone: "red" }] }
]
},
{
type: "grouped",
title: "Utilidad Consubanco por año · MDP",
legend: [
{ label: "Con promoción", tone: "deep" },
{ label: "Sin promoción", tone: "orange" }
],
items: [
{ label: "2027", values: [{ value: 0.9, display: "0.9" }, { value: 2.0, display: "2.0" }] },
{ label: "2028", values: [{ value: 7.6, display: "7.6" }, { value: 16.3, display: "16.3" }] },
{ label: "2029", values: [{ value: 16.2, display: "16.2" }, { value: 34.8, display: "34.8" }] },
{ label: "2030", values: [{ value: 24.9, display: "24.9" }, { value: 53.5, display: "53.5" }] },
{ label: "2031", values: [{ value: 34.3, display: "34.3" }, { value: 73.6, display: "73.6" }] }
],
footLead: "Lo que falta:",
foot: "el modelo proyecta ingreso y utilidad, no inversión. Sin el costo de habilitación no hay TIR ni payback, y sin eso la iniciativa no puede medirse contra el umbral de adyacentes."
}
]
},
{ type: "statement", text: "El 90% de la utilidad para Consubanco llega de 2029 en adelante" },
{
type: "notes",
items: [
"MDP = millones de pesos. 2026 es habilitación sin ventas: piloto abril 2027, lanzamiento julio 2027, masificación octubre 2027. Ingreso neto = precio menos comisión de canal 3%, IVA 16% e IEPS de telecomunicaciones 1.5%. Inflación 4% anual en precios y costos.",
"Supuestos sin validar de los que depende la cifra: conversión 14.22% (participación de mercado actual de las MVNO) y churn 3% mensual, equivalente a 30.6% anual. Mercado alcanzable 2.45 millones: 44% de 5.35 millones de pensionados usa smartphone (INEGI, ENDUTIH 2025)."
]
}
]
},
{
id: "investigacion-clientes",
label: "Investigación Clientes",
blocks: [
{
type: "heading",
title: "Calibración de oferta de valor",
text: "El caso de negocio original se diseñó para un usuario nativo digital que contrata solo en la app. Nuestra base son pensionados."
},
{
type: "cards",
title: "Lo que de verdad valora · Investigación cualitativa con clientes",
cols: 3,
iconTone: "orange",
items: [
{ icon: "heart", title: "Inclusión familiar", text: "El teléfono es su único cordón con hijos y nietos: llamadas y WhatsApp. Si abaratamos esa comunicación por usar su tarjeta o su pensión, el valor es inmediato." },
{ icon: "hand", title: "Pragmatismo financiero", text: "«Que se descuente solo» o «que me abonen saldo por usar mi tarjeta». No quiere filas ni trámites." },
{ icon: "gift", title: "La conectividad como regalo", text: "Es abnegado: prefiere regalarle los gigas al hijo o nieto que le ayuda antes que usarlos él." }
]
},
{
type: "list",
title: "Por qué vender líneas al mercado abierto es un riesgo",
titleTone: "orange",
cols: 3,
items: [
{ icon: "alert", title: "Fricción en la base", text: "Un journey 100% digital y autónomo genera alta deserción en clientes de la tercera edad." },
{ icon: "store", title: "Mercado saturado", text: "Competir contra Bait (Walmart) u OUI (Elektra) implica alto costo de adquisición y guerra de precios." },
{ icon: "headset", title: "Desgaste del canal", text: "Vender un servicio ajeno a las finanzas en la app sube la carga de soporte y QA." }
]
},
{ type: "text", cols: 1, items: [{ lead: "Referente:", text: "Mercado Libre no vende telefonía abierta. Desde junio de 2026 la ofrece con WIM, sobre la red de AT&T, solo como beneficio de su suscripción Meli+.", tone: "red" }] },
{ type: "statement", text: "La pregunta deja de ser cuántas líneas vendemos y pasa a ser cuánto retiene la conectividad a nuestro cliente." },
{ type: "notes", items: ["Fuentes: investigación cualitativa y arquetipos de Gerencia de Producto, Hub de Innovación, oct-2026; TeleSemana, 5-jun-2026 (Mercado Libre y WIM)."] }
]
},
{
id: "perfiles",
label: "Perfiles",
blocks: [
{
type: "personas",
title: "Los dos perfiles que adoptarían el servicio",
items: [
{
initials: "AM",
tone: "deep",
name: "El solucionador conectado",
meta: "Alejandro, 66 años · nivel D+",
text: "Usa WhatsApp a diario, pero teme moverle a la app y bloquear su cuenta. Le atrae que el banco premie su fidelidad con saldo.",
friction: "No completará solo la portabilidad ni la activación.",
solution: "El asesor como puente: inicia en la app y se cierra asistido."
},
{
initials: "ME",
tone: "orange",
name: "La heredera resiliente",
meta: "María Elena, 63 años · nivel D",
text: "Su hijo le revisa la app cuando tiene dudas. Su meta es ahorrar frente a lo que hoy gasta en recargas en tienda.",
friction: "Un proceso 100% digital le genera desconfianza.",
solution: "Hijo o nieto delegado: un tercero hace el proceso por ella."
}
],
labels: { friction: "Fricción:", solution: "Solución:" }
}
]
},
{
id: "consumovil-beneficio",
label: "ConsuMóvil como Beneficio",
blocks: [
{
type: "heading",
title: "ConsuMóvil como beneficio de Lazos",
text: "En lugar de una telefonía prepago abierta a la venta, el aliado MVNO se integra a las recompensas del Programa Lazos como «Tiempo Aire ConsuMóvil»."
},
{
type: "flow",
title: "Cómo funciona para el cliente",
items: [
{ icon: "bank", title: "Es cliente Lazos", text: "pensión o nómina y cuenta de depósito activas en Consubanco", tone: "deep" },
{ icon: "refresh", title: "Mantiene su relación", text: "recibe su pensión y paga su crédito domiciliado", tone: "soft" },
{ icon: "gift", title: "Gana tiempo aire", text: "llamadas, WhatsApp y megas como recompensa", tone: "orange" },
{ icon: "phone", title: "Canjea en un clic", text: "en el portal Lazos o en Beneficios de la app, sin trámites", tone: "soft" },
{ icon: "chat", title: "Habla con su familia", text: "o le regala el saldo al hijo o nieto que le ayuda", tone: "deep" }
]
},
{
type: "grid",
cols: [1, 1, 1],
blocks: [
{
type: "list",
title: "Para Consubanco",
titleTone: "orange",
plain: true,
items: [
{ title: "Retención", text: "Amarra la conectividad familiar del cliente a mantener su pensión y su crédito en el banco." },
{ title: "Sin soporte de telefonía", text: "El banco premia con tiempo aire; la complejidad técnica la lleva el aliado." },
{ title: "Diferenciación", text: "Premia la estabilidad financiera del pensionado, no solo su consumo." }
]
},
{
type: "list",
title: "Para el cliente · Reglas del journey",
titleTone: "orange",
plain: true,
items: [
{ title: "Lenguaje natural", text: "«Cambia tu línea sin perder tu número», no «portabilidad» ni «SIM»." },
{ title: "Botón de auxilio", text: "WhatsApp o llamada en cada pantalla: «un asesor lo hace por ti»." },
{ title: "Cero pagos manuales", text: "Cargo automático el día que llega su pensión." }
]
},
{
type: "list",
title: "Con quién competimos ahora",
titleTone: "orange",
intro: "Ya no contra Bait u Oxxo Cel, sino contra los programas de lealtad del segmento D y D+:",
variant: "dots",
items: [
{ title: "Spin Premia", text: "beneficios en Oxxo Cel" },
{ title: "Soriana Móvil", text: "canje de puntos por tiempo aire" },
{ title: "OUI · Banco Azteca", text: "telefonía ligada al historial de pago" },
{ title: "Chedraui Móvil", text: "hoy aliado de Lazos: convivir, no canibalizar", highlight: true }
]
}
]
}
]
},
{
id: "temas-por-resolver",
label: "Temas por Resolver",
blocks: [
{
type: "cards",
title: "Lo que hay que resolver antes del piloto",
cols: 3,
numbered: true,
items: [
{ num: "1", title: "¿En qué línea se abona?", text: "Si el tiempo aire va al operador que el cliente ya tiene, es un beneficio de recargas, no un MVNO." },
{ num: "2", title: "Calibrar el caso de negocio", text: "El modelo actual asume venta de líneas; como beneficio, el tiempo aire es costo de lealtad y el retorno es retención." },
{ num: "3", title: "Encaje con Chedraui", text: "Definir el beneficio para que no compita con Chedraui Móvil dentro de Lazos." }
]
},
{ type: "callout", tone: "deep", icon: "flag", text: "Calibrar ConsuMóvil como beneficio de Lazos y ajustar el caso de negocio antes del kick off del piloto no funcional." }
]
}
]
},
/* ======================================================================
OFERTA BANCA MINORISTA
====================================================================== */
{
id: "oferta-banca-minorista",
name: "Oferta banca minorista",
icon: "card",
header: {
title: "Oferta para Banca Minorista",
subtitle: "2.75 millones de pensionados IMSS con Pensión Mínima Garantizada — el 51.3% de 5.4 millones — no tienen excedente descontable."
},
tabs: [
{
id: "caso-de-negocio",
label: "Caso de Negocio",
blocks: [
{
type: "kpis",
cols: 3,
items: [
{ value: "$2,010 MDP", label: "originación acumulada 2027 – 2031", tone: "orange" },
{ value: "300,874", label: "créditos otorgados en el horizonte" },
{ value: "$3,190", label: "capacidad mensual del pensionado" }
]
},
{
type: "grid",
cols: [1, 1],
blocks: [
{
type: "vbars",
title: "Originación anual proyectada · MDP",
items: [
{ label: "2027", value: 10, display: "$10", tone: "orange" },
{ label: "2028", value: 150, display: "$150", tone: "orange" },
{ label: "2029", value: 413, display: "$413", tone: "orange" },
{ label: "2030", value: 610, display: "$610", tone: "orange" },
{ label: "2031", value: 827, display: "$827", tone: "orange" }
]
},
{
type: "share",
title: "Tres productos, tres momentos de necesidad",
labels: { credits: "de los créditos", origination: "de la originación" },
items: [
{ name: "Cashloan Exprés", terms: "$500 – $6,000 · 1 a 3 meses · 55%", text: "Puerta de entrada, sin tocar su pensión", credits: 58, origination: 32 },
{ name: "Anticipo de Pensión", terms: "$500 – $6,000 · 1 a 2 meses · 5% + IVA", text: "Capta la portabilidad de la pensión", credits: 27, origination: 10 },
{ name: "Cashloan", terms: "$5,000 – $40,000 · 6 a 18 meses · 38%", text: "Concentra el valor del portafolio", credits: 15, origination: 58 }
],
foot: "TIR mínima aceptada 15.39% · IMORA de referencia 11.3% · 28 ciclos de contratación modelados por cliente. La rentabilidad por producto se cierra con las corridas del modelo."
}
]
},
{
type: "text",
cols: 2,
items: [
{ lead: "La capacidad de pago del pensionado es fija", text: "gana quien la rota, no quien la compromete por años.", tone: "deep" },
{ lead: "Los tres productos se encuentran en fase de comprobación", text: "recomendaciones de ajustes por parte de la consultora Akya.", tone: "deep" }
]
},
{ type: "callout", tone: "deep", icon: "flag", text: "Cerrar los business cases, la rentabilidad por producto y los unit economics, y definir la ruta de desarrollo con consultora o Bankaya.", sub: "El Hub acompaña la iniciativa donde agrega valor; la ejecución corresponde a las áreas y socios asignados. · 2027: salida a prueba con clientes." },
{ type: "notes", items: ["PMG 2026: $10,636.54 mensuales · Art. 190 de la Ley del Seguro Social. Proyección de originación 2027 – 2031, borrador para presupuesto 2027, sujeta al cierre de los business cases."] }
]
},
{
id: "productos-frente-al-mercado",
label: "Productos frente al Mercado",
blocks: [
{
type: "heading",
title: "Nuestros productos frente al mercado",
text: "Condiciones iguales o mejores que las de sus competidores más cercanos"
},
{
type: "products",
competitorsTitle: "Competidores más cercanos",
items: [
{
tag: "Puerta de entrada",
name: "Cash Loan Exprés",
tagline: "Crédito chico desde el celular, sin portar la pensión.",
specs: [
{ label: "Monto", value: "$500 – $6,000" },
{ label: "Plazo", value: "1 a 3 meses" },
{ label: "Tasa anual", value: "127% · sin comisión", accent: true },
{ label: "Cobro", value: "Pago voluntario" }
],
columns: ["Institución", "Monto", "Plazo", "Tasa anual"],
competitors: [
["Bankaya", "$500 – $7,500", "2 a 8 semanas", "255%"],
["Stori", "$500 – $23,000", "2 a 12 meses", "153%"],
["DiDi Finanzas", "$500 – $46,800", "1 a 3 meses", "300%"]
],
takeawayLead: "127% anual:",
takeaway: "la mitad que Bankaya y debajo de Stori y DiDi."
},
{
tag: "Portabilidad",
name: "Anticipo de Pensión",
tagline: "Adelanto de la pensión que se descuenta solo.",
specs: [
{ label: "Monto", value: "$500 – $6,000" },
{ label: "Plazo", value: "1 a 2 meses" },
{ label: "Costo", value: "0% tasa · 6% + IVA", accent: true },
{ label: "Cobro", value: "Cargo a cuenta CSB" }
],
columns: ["Institución", "Monto", "Plazo", "Comisión"],
competitors: [
["BBVA", "$100 – $6,200", "1 a 2 meses", "7% + IVA"],
["Banorte", "Hasta $10,000", "Hasta 2 meses", "7% + IVA"],
["Inbursa", "$500 – $15,000", "Hasta 2 meses", "6% + IVA"]
],
takeawayLead: "6% + IVA:",
takeaway: "iguala al más barato y queda debajo del promedio (6.7%)."
},
{
tag: "Rentabilidad",
name: "Cashloan",
tagline: "Monto mayor con pagos fijos que termina en meses.",
specs: [
{ label: "Monto", value: "$5,000 – $40,000" },
{ label: "Plazo", value: "6 a 18 meses" },
{ label: "Tasa anual", value: "69% · sin comisión", accent: true },
{ label: "Cobro", value: "Cargo a cuenta CSB" }
],
columns: ["Institución", "Monto", "Plazo", "Tasa anual"],
competitors: [
["Dimex", "$2,000 – $200,000", "6 a 48 meses", "83.8%"],
["BanCoppel", "$6,700 – $53,900", "12 a 24 meses", "76.0%"],
["Banco Azteca", "$2,000 – $200,000", "1 a 38 meses", "49.6%"]
],
takeawayLead: "69% anual:",
takeaway: "el promedio de los tres, con plazos más cortos."
}
]
},
{ type: "notes", items: ["Fuente: benchmark competitivo interno. Tasas anuales; en el anticipo, comisión por disposición.", "Borrador para presupuesto 2027 · Confidencial"] }
]
},
{
id: "consolidado",
label: "Consolidado",
blocks: [
{
type: "heading",
title: "Consolidado · Tres productos 2027–2031",
text: "Los créditos y la originación se suman entre productos; los clientes no, porque una persona puede tener más de un producto"
},
{
type: "kpis",
cols: 4,
items: [
{ value: "$2,010 M", label: "originación acumulada 2027–2031" },
{ value: "300,874", label: "créditos otorgados en el horizonte" },
{ value: "$827 M", label: "originación en 2031", tone: "orange" },
{ value: "112,104", label: "créditos otorgados en 2031", tone: "orange" }
]
},
{
type: "grid",
cols: [3, 2],
blocks: [
{
type: "multistack",
title: "Originación anual por producto ($ millones)",
series: [
{ label: "Cash Loan Exprés", tone: "deep" },
{ label: "Anticipo de Pensión", tone: "orange" },
{ label: "Cashloan", tone: "sky" }
],
/* value: dato de la tabla · display: etiqueta tal como aparece en la gráfica (vacía si no tiene) */
items: [
{ label: "2027", values: [{ value: 8.0, display: "" }, { value: 1.9, display: "" }, { value: 0, display: "" }] },
{ label: "2028", values: [{ value: 76.7, display: "77" }, { value: 18.6, display: "" }, { value: 54.5, display: "55" }] },
{ label: "2029", values: [{ value: 143.8, display: "144" }, { value: 43.9, display: "44" }, { value: 225.7, display: "226" }] },
{ label: "2030", values: [{ value: 183.6, display: "184" }, { value: 61.9, display: "62" }, { value: 364.3, display: "364" }] },
{ label: "2031", values: [{ value: 223.1, display: "223" }, { value: 79.8, display: "80" }, { value: 523.8, display: "524" }] }
]
},
{
type: "contribution",
title: "Qué aporta cada producto",
sub: "Participación 2027–2031",
items: [
{ name: "Cash Loan Exprés", tone: "deep", stats: [{ value: "32%", label: "de la originación" }, { value: "58%", label: "de los créditos" }], text: "Puerta de entrada: trae clientes y volumen de créditos." },
{ name: "Anticipo de Pensión", tone: "orange", stats: [{ value: "10%", label: "de la originación" }, { value: "27%", label: "de los créditos" }], text: "Uso recurrente de ticket chico; atrae portabilidad." },
{ name: "Cashloan", tone: "sky", stats: [{ value: "58%", label: "de la originación" }, { value: "15%", label: "de los créditos" }], text: "Ticket alto: concentra los pesos del portafolio." }
]
}
]
},
{
type: "table",
columns: [
{ label: "Originación ($ millones)" },
{ label: "2027", align: "right" },
{ label: "2028", align: "right" },
{ label: "2029", align: "right" },
{ label: "2030", align: "right" },
{ label: "2031", align: "right" },
{ label: "Total", align: "right" }
],
rows: [
{ cells: [{ text: "Cash Loan Exprés", dot: "deep" }, "$8.0", "$76.7", "$143.8", "$183.6", "$223.1", { text: "$635.4", strong: true }] },
{ cells: [{ text: "Anticipo de Pensión", dot: "orange" }, "$1.9", "$18.6", "$43.9", "$61.9", "$79.8", { text: "$206.1", strong: true }] },
{ cells: [{ text: "Cashloan", dot: "sky" }, "—", "$54.5", "$225.7", "$364.3", "$523.8", { text: "$1,168.3", strong: true }] },
{ strong: true, highlight: "sky", cells: ["Total originación", "$10.0", "$149.8", "$413.4", "$609.9", "$826.8", "$2,009.8"] },
{ strong: true, highlight: "sky", cells: ["Total créditos", "3,112", "31,470", "65,712", "88,477", "112,104", "300,874"] }
]
},
{ type: "notes", items: ["Borrador para presupuesto 2027 · Confidencial"] }
]
},
{
id: "cronograma",
label: "Cronograma",
blocks: [
{
type: "heading",
title: "Cronograma de etapas por producto",
text: "T0 noviembre 2026 · cada producto arranca su prueba cuando el anterior entra a lanzamiento gradual"
},
{
type: "phases",
/* Escala en meses desde oct-2026 (0). Las columnas son trimestres; la última agrupa 2030–31.
from/to se leyeron de las barras del cronograma. */
years: [
{ label: "2026", span: 1 },
{ label: "2027", span: 4 },
{ label: "2028", span: 4 },
{ label: "2029", span: 4 },
{ label: "2030–31", span: 1 }
],
quarters: ["Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", ""],
t0: { at: 1, label: "T0 · nov 2026" },
legend: [
{ key: "hab", label: "Habilitación", tone: "slate" },
{ key: "prueba", label: "Prueba controlada", tone: "sky" },
{ key: "lanz", label: "Lanzamiento gradual", tone: "mid" },
{ key: "masif", label: "Masificación", tone: "deep" }
],
rows: [
{ name: "Habilitación común", sub: "Plataforma, app y modelo de riesgo", bars: [{ phase: "hab", from: 1, to: 6, label: "5 meses" }] },
{ name: "Cash Loan Exprés", sub: "Plazo 1 a 3 meses", bars: [{ phase: "prueba", from: 6, to: 12, label: "6 meses" }, { phase: "lanz", from: 12, to: 18, label: "6 meses" }, { phase: "masif", from: 18, to: 42, label: "Masificación" }], milestone: { at: 33, label: "Madurez · jul 2029" } },
{ name: "Anticipo de Pensión", sub: "Plazo 1 a 2 meses", bars: [{ phase: "hab", from: 8, to: 12, label: "4 meses" }, { phase: "prueba", from: 12, to: 16, label: "4 meses" }, { phase: "lanz", from: 16, to: 22, label: "6 meses" }, { phase: "masif", from: 22, to: 42, label: "Masificación" }], milestone: { at: 39.5, label: "Madurez · abr 2030" } },
{ name: "Cashloan", sub: "Plazo 6 a 18 meses", bars: [{ phase: "hab", from: 12, to: 16, label: "4 meses" }, { phase: "prueba", from: 16, to: 22, label: "6 meses" }, { phase: "lanz", from: 22, to: 28, label: "6 meses" }, { phase: "masif", from: 28, to: 42, label: "Masificación" }] }
]
},
{
type: "phasecards",
items: [
{ tone: "slate", title: "Habilitación", duration: "4 a 5 meses", text: "App, modelo de riesgo, contratos, cobro y fondeo listos para el primer crédito.", gateLabel: "Avanza con:", gate: "Backlog completo y modelo de riesgo v0 aprobado." },
{ tone: "sky", title: "Prueba controlada", duration: "4 a 6 meses", text: "1,000 clientes con volumen y pérdida topados, para aprender.", gateLabel: "Avanza con:", gate: "Dos ciclos con mora, conversión y recompra en rango." },
{ tone: "mid", title: "Lanzamiento gradual", duration: "6 meses", text: "Volumen creciente; se ajustan precio, política y canal.", gateLabel: "Avanza con:", gate: "Unit economics y operación estables." },
{ tone: "deep", title: "Masificación", duration: "Hasta dic 2031", text: "Más canales y renovación 100% digital.", gateLabel: "Se sostiene con:", gate: "Rentabilidad anual arriba de 15.92%." }
]
},
{ type: "notes", items: ["Borrador para presupuesto 2027 · Confidencial"] }
]
}
]
},

/* ======================================================================
BRIGADA CX
====================================================================== */
{
id: "brigada-cx",
name: "Brigada CX",
icon: "headset",
header: {
title: "Brigada CX",
subtitle: "Primer caso de uso conceptualizado: la respuesta ante una falla que impide a los clientes operar en la plataforma."
},
tabs: [
{
id: "resumen",
label: "Resumen",
blocks: [
{
type: "kpis",
cols: 3,
items: [
{ icon: "users", value: "42 mil", label: "clientes activos al mes en la PUC expuestos a una contingencia" },
{ icon: "layers", value: "4 niveles", label: "de criticidad, con responsables y ruta de escalamiento" },
{ icon: "dollar", value: "$0", label: "de inversión adicional: se construye sobre Google Workspace", tone: "orange" }
]
},
{ type: "callout", tone: "deep", icon: "flag", text: "Compromiso de participación de las áreas del war room. No requiere inversión tecnológica ni presupuesto adicional para su fase 2026." },
{ type: "notes", items: ["MVP construido sobre Google Workspace: catálogo de incidentes, matriz de criticidad, playbooks y tablero de seguimiento."] }
]
},
{
id: "protocolo",
label: "Protocolo",
blocks: [
{
type: "steps",
title: "El protocolo · Del incidente al restablecimiento",
accentIndex: 2,
items: [
{ num: "01", title: "Detección", text: "Señal de falla desde canales, monitoreo o cliente" },
{ num: "02", title: "Clasificación", text: "Tipo de origen y nivel de criticidad" },
{ num: "03", title: "Activación", text: "Se convoca el war room con responsables nombrados" },
{ num: "04", title: "Comunicación", text: "Mensajes diferenciados por impacto y audiencia" },
{ num: "05", title: "Restablecimiento", text: "Seguimiento hasta recuperar la operación" },
{ num: "06", title: "Cierre", text: "Bitácora del incidente y aprendizajes" }
]
}
]
},
{
id: "war-room",
label: "War Room",
blocks: [
{
type: "warroom",
title: "El war room",
areas: ["Soluciones de Negocio", "Operaciones", "Atención a Clientes", "Comercial"],
text: "Con activación condicionada de PLD y Riesgo Empleado según el tipo de incidente. Una sola fuente de información y un coordinador único por contingencia."
}
]
},
{
id: "roadmap",
label: "Roadmap",
blocks: [
{
type: "stages",
title: "Las dos etapas",
items: [
{ label: "2026", title: "2026 · Diseño del protocolo", text: "Completar el protocolo del primer caso de uso y dejarlo listo para piloto.", tone: "deep" },
{ label: "2027", title: "2027 · Piloto controlado", text: "Sesiones de war room que afinan el protocolo, validan la coordinación y prueban la operación real.", tone: "orange" }
]
},
{ type: "statement", compact: true, text: "La segunda etapa escala el mecanismo a casos de uso adicionales, una vez probado el primero en el piloto de 2027." }
]
}
]
}
]
};
