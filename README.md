# Portafolio de Innovación

Sitio estático (HTML + CSS + JavaScript, sin dependencias ni build) para presentar el portafolio del Hub de Innovación a Dirección General. Listo para GitHub Pages.

https://avaguilar-do.github.io/Hub-de-innovacion/#/proyecto/red-de-efectivo/resumen 

```
/
├── index.html → estructura (shell): barra lateral, breadcrumbs, buscador
├── styles.css → diseño, paleta oficial y responsive
├── app.js → router por hash, navegación, tabs, buscador y componentes
├── data.js → TODO el contenido (textos y cifras del PDF)
├── README.md
└── .nojekyll → evita que GitHub Pages procese el sitio con Jekyll
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portafolio-innovacion`). Puede ser público, o privado si tu plan lo permite para Pages.
2. Sube los seis archivos **a la raíz** del repositorio (incluido `.nojekyll`, que es un archivo vacío):
- Desde la web: **Add file → Upload files**, arrastra los archivos y haz **Commit changes**.
Si tu sistema oculta `.nojekyll`, créalo desde GitHub con **Add file → Create new file**, nombre `.nojekyll`, sin contenido.
- Desde terminal:
```bash
git init
git add .
git commit -m "Portafolio de Innovación"
git branch -M main
git remote add origin https://github.com/<usuario>/portafolio-innovacion.git
git push -u origin main
```
3. En el repositorio ve a **Settings → Pages**.
4. En **Build and deployment → Source** elige **Deploy from a branch**; rama `main`, carpeta `/ (root)`; **Save**.
5. Espera uno o dos minutos. La URL aparece en esa misma pantalla: `https://<usuario>.github.io/portafolio-innovacion/`.

Prueba local: abre `index.html` directamente en el navegador; no requiere servidor.

## Navegación

- `#/` → Portafolio (Slide 4), vista de tarjetas o tabla, filtros por Etapa 2026.
- `#/proyecto/<id>/<pestaña>` → detalle de cada iniciativa con pestañas. Las URLs se pueden compartir y el botón Atrás del navegador funciona.
- Buscador en la barra superior (atajo `/`): busca en iniciativas y en el contenido de cada pestaña; flechas ↑ ↓ y Enter para navegar.
- Cada pestaña muestra la etiqueta de la lámina de origen (por ejemplo, `Slide 14`).

## Actualizar contenido

Edita solo `data.js`:

- `portfolio.initiatives` → tarjetas de la página principal. `roadmap.from` / `roadmap.to` son los trimestres (1–4) de la barra.
- `projects[].tabs[].blocks` → contenido de cada pestaña. Cada bloque tiene un `type` (`kpis`, `table`, `cards`, `gantt`, `journey`, etc.) que `app.js` sabe dibujar.
- Para agregar un proyecto: añade un objeto en `projects` y enlázalo poniendo su `id` en `projectId` de la iniciativa correspondiente; la navegación lateral, el buscador y las rutas se generan solos.

## Paleta

| Color | Pantone | HEX | Uso |
|---|---|---|---|
| Azul Profundo | 534 C | `#1B355D` | Texto, títulos, cifras |
| Azul Horizonte | 2142 C | `#7DACE3` | Acentos y fondos (tintes 80 / 40 / 10 %) — tono dominante |
| Naranja Legado | 166 C | `#E75301` | Cifras clave, alertas, llamados a la acción |
| Rojo Cercanía | 174 C | `#983920` | Énfasis secundario |
| Negro | — | `#000000` | Tintes 40 / 15 % |

---

## Matriz de validación por lámina

| Página / pestaña | Lámina | Contenido verificado |
|---|---|---|
| Portafolio (inicio) | 4 | Título, subtítulo, 6 iniciativas (tipo, cifra clave, etapa, estatus, roadmap 2027 y trimestres), frase de cierre y 2 notas |
| Red de efectivo · Resumen Ejecutivo | 5 | 4 KPIs (10,738 · $1.00 · 3 seg · $5,000) con sus notas; −89%; totales de red |
| Red de efectivo · Red de Cadenas | 5 | 8 cadenas (puntos, estado, llega en, cobro); total 10,738 / 2,402 / 1,350; nota del tarifario |
| Red de efectivo · Impacto Financiero | 5 | $9.06 y $9.55 vs $1.00; −89%; nota de costo OXXO/PROSA |
| Red de efectivo · Recomendación | 5 | Recomendación y nota del piloto |
| Rentas vitalicias · Oportunidad | 6, 13 | "Por qué ahora" (5.10 M, 516 mil, $196 MDP, +65%); series Ley 73 y Ley 97; +6.7%, 71%, +31 mil; $196 MDP y ≈ $4,400 MDP; fuentes |
| Rentas vitalicias · Journey Pensionado | 14 | Tres tramos, opciones A/B/C con montos, presencia, 516 mil, frase y fuente |
| Rentas vitalicias · Propuesta | 6 | Diagrama Consubanco + socio (Afore, Aseguradora) y dos párrafos |
| Rentas vitalicias · Criticidades | 6 | Tres criticidades, nota de validación, mensaje de diez semanas y entregables |
| Rentas vitalicias · Plan de Trabajo | 20 | 14 semanas (15 oct – 22 ene), 5 frentes, 19 tareas, hitos 13 nov y 22 ene |
| Comunidad Lazos · Caso de Negocio | 7 | 4 KPIs; tabla de originación 2026–2029; motores A y B; serie de intereses; ask y nota |
| Comunidad Lazos · La Comunidad | 22 | "Lo que haremos" (6), "Lo que conocemos de él" (5), frase y cierre |
| Comunidad Lazos · Beneficios para el Banco | 22, 7 | "Lo que genera para el banco" (5) y métricas de escalamiento (lámina 7) |
| Comunidad Lazos · Aliado Estratégico | 26 | 5 KPIs de Soy Más, 5 instituciones, marcas, "Qué aporta" (6), frase |
| ConsuMóvil · Caso de Negocio | 8 | 4 KPIs, estado de resultados 2027–2031, gráfica con/sin promoción, "Lo que falta", notas |
| ConsuMóvil · Investigación Clientes | 30 | 3 valores, 3 riesgos, referente, frase y fuentes |
| ConsuMóvil · Perfiles | 30 | Dos arquetipos con fricción y solución |
| ConsuMóvil · ConsuMóvil como Beneficio | 31 | Flujo de 5 pasos, Para Consubanco, Reglas del journey, competencia |
| ConsuMóvil · Temas por Resolver | 31 | 3 temas y mensaje de cierre |
| Brigada CX (5 pestañas) | 10 | 3 KPIs, protocolo de 6 pasos, war room, 2 etapas, 6 métricas, compromiso y nota del MVP |

Verificaciones aritméticas realizadas: suma de puntos por cadena (10,738 / 2,402 / 1,350 = 14,490), −89% (1 − 1/9.06), crecimiento Ley 73 (+6.7%), +65% (74 → 122), $196 MDP (515,500 × 4.04% × $9,409), 13,113 × $48,929 = $641.6 M, totales del estado de resultados de ConsuMóvil, 90% de la utilidad desde 2029 (89.9%), churn 3% mensual ≈ 30.6% anual.

### Inconsistencias encontradas en el PDF (se muestran tal cual, sin corregir)

1. **ConsuMóvil, láminas 4 vs 8.** La lámina 4 dice "$84 MDP · ingreso neto acumulado a 2031". En la lámina 8, $83.9 MDP es la *utilidad Consubanco* (escenario con promoción); el ingreso neto acumulado es $719.1 MDP.
2. **Comunidad Lazos, lámina 7.** "TIR con costo de fondeo … 30.6% optimista". La lámina 25 (escenarios) da 20.6% con costo de fondeo en el optimista (30.2% sin costo).
3. **ConsuMóvil, lámina 8.** "Mercado alcanzable 2.45 millones: 44% de 5.35 millones": 44% × 5.35 M = 2.35 M.
4. **Rentas vitalicias, láminas 6 vs 20.** La lámina 6 propone "validar la oportunidad en diez semanas"; la lámina 20 plantea "catorce semanas".
5. **Rentas vitalicias, láminas 6 vs 20.** La lámina 6 identifica como contraparte a Profuturo o SURA (grupos con Afore y aseguradora); la lámina 20 programa "Sondeo con Principal y con las aseguradoras candidatas", que corresponde al esquema de filial de las láminas 18–19.
6. **Brigada CX, láminas 4 vs 10.** Etapa 2026 "Piloto funcional", pero la lámina 10 ubica 2026 en "Diseño del protocolo" y el piloto controlado en 2027.
7. **Comunidad Lazos, lámina 4.** Etapa "Salida a mercado" con estatus "prototipo no funcional listos. Lista para piloto funcional."
8. **Redondeos.** Lámina 7: venta incremental suma 641.7 (se reporta 641.6) y costo de plataforma 32.52 (32.53). Lámina 8: ganancia con promoción suma 167.8 (167.9) y sin promoción 360.5 (360.4).
9. **Lámina 5.** El propio tarifario indica que su vigencia de 30 días ya venció.
10. **Lámina 7.** "$17.46" en Costo de plataforma no indica a qué corresponde (unidad o tipo de cambio).
11. **Lámina 13.** "el mercado esta madurando" sin acento; se respeta el texto original.

### Decisiones de interpretación

- La iniciativa **Oferta banca minorista** aparece en la lámina 4, por lo que se muestra en el portafolio; no tiene página de detalle porque no forma parte del alcance solicitado.
- Los **trimestres del roadmap 2027** (lámina 4) y la **duración de cada tarea del plan** (lámina 20) no existen en el texto del PDF: se leyeron de las barras dibujadas en esas láminas.
- Las **marcas comerciales** de la lámina 26 se transcribieron de sus logotipos.
- Textos de interfaz que no provienen del PDF: "Iniciativas", "Todas", "Tarjetas", "Tabla", "Ver detalle", "Anterior", "Siguiente", "Buscar proyectos…", "Puntos por cadena" (título de la gráfica de barras construida con la tabla de la lámina 5) y las etiquetas `Slide N`.

