# Prompt de continuación — Aether Solutions Landing

Copia este prompt completo en Cursor, Claude Code, Codex, o cualquier IDE con IA para continuar el trabajo.

---

## CONTEXTO DEL PROYECTO

Soy dueño de **Aether Solutions**, una distribuidora premium de péptidos de investigación en Colombia (Pitalito, Huila). Tengo una landing page de una sola página (`index.html`) ya bastante avanzada, autocontenida (todas las imágenes embebidas como WebP base64), con:

- Hero 3D con 3 viales flotantes animados
- Sección de "Productos Destacados" en carrusel deslizable
- Catálogo discovery-based con 5 categorías (cada una con su propio acento de color)
- Sección de beneficios con layout 3+2 en móvil
- Sección "Compra fácil y segura" (vertical)
- CTA final WhatsApp
- Carrito funcional que envía pedido por WhatsApp
- Preloader Realmheart-inspired con anillos rotando + logo

**Identidad visual:** morado profundo (#070310), violetas (#A855F7, #8B5CF6), dorado (#F4C95D), tipografías Cinzel (títulos) + Manrope (body), estética biotech/luxury.

**Marca:** Aether Solutions, WhatsApp +57 314 261 7708, Instagram @aethersolutions.col.

---

## ARQUITECTURA TÉCNICA

- **Un solo archivo `index.html`** (~786 KB) con CSS + JS inline + 28 imágenes embebidas como `data:image/webp;base64,...` en un objeto JS llamado `IMG_DATA`.
- **30 productos** en un array `PRODUCTS` que renderizan dinámicamente. Cada producto: `{id, cat, tag, nombre, presentacion, precio, img:IMG_DATA[...], desc, destacado:?}`.
- **5 categorías**: `metabolico`, `muscular`, `regen`, `otros`, `agua`.
- **Theming por categoría** vía CSS custom properties `--cat-accent` y `--cat-accent-2` que cambian con `data-cat` attribute en `#catalogo`.
- **Sin frameworks** — JS vanilla, CSS puro.
- **No usa localStorage** (sandbox restriction).

---

## ARCHIVOS RELEVANTES

```
C:\Users\jaimalz\Documents\Claude\Projects\aether\
├── index.html                    ← archivo principal autocontenido
├── productos_png\               ← PNGs limpios de productos
│   ├── 5amino1mq_50mg.png
│   ├── aod9604_5mg.png
│   ├── bacwater_3ml.png ... bacwater_5ml.png
│   ├── bpc157_5mg.png, bpc_tb_combo_10mg.png
│   ├── ghkcu_50mg.png, glow_70mg.png
│   ├── (viales FastMuscle, ~23 archivos)
│   └── retatrutide_box.png, ghkcu_box.png, nad_box.png, tesamorelin_box.png, bpc_tb_box.png  ← cajas PrimeHack
├── assets\
│   └── logo-circle.png          ← logo de la marca
└── prompt_catalogo_mayorista.md  ← prompt para generar PDF mayorista
```

---

## ESTADO ACTUAL — qué está hecho

- [x] Estructura general HTML + CSS + JS
- [x] 28 productos con precios oficiales al público (post-corrección)
- [x] Descripciones técnicas para los 26 productos vigentes
- [x] Preloader Realmheart con anillos animados
- [x] Hero 3D con 3 viales (Retatrutide GLP-3, Glow, BPC+TB) con parallax mouse
- [x] Destacados en carrusel deslizable con auto-advance, flechas funcionales (event delegation), peek intro
- [x] Catálogo discovery-based (vacío al inicio, se llena al elegir categoría)
- [x] 5 categorías con theming distinto (rosa, azul, verde, dorado, blanco-frío sobre base morada)
- [x] Animaciones cinemáticas: stagger entry, hover 3D parallax, breath continuo en frascos
- [x] Beneficios 3+2 grid en móvil
- [x] Compra fácil y segura: vertical stack
- [x] CTA final: reposicionado, sin líneas atravesando título
- [x] Disclaimer médico legal en footer
- [x] Botón "Catálogo" en navbar al lado del carrito
- [x] Atmósferas cinemáticas por sección (gradientes únicos, ambient dust particles)
- [x] Section dividers con diamante pulsante
- [x] Glow morado/dorado detrás de cada producto (no encima)
- [x] Padding uniforme en cards, object-fit:contain

---

## PROBLEMA PENDIENTE (lo que falta resolver)

**Las cajas PrimeHack tienen fondo blanco residual visible.** Aunque mejoré la transparencia de 98% opaco → 70% opaco con GrabCut + seeds explícitas, todavía no quedan perfectas.

Las 5 cajas son: `retatrutide_box`, `tesamorelin_box`, `ghkcu_box`, `nad_box`, `bpc_tb_box` (el BPC+TB sí salió limpio). Las otras 4 tienen halo blanco residual alrededor de la silueta.

**Las imágenes fuente** son renderings 3D de cajas blancas farmacéuticas marca "PrimeHack Research", con:
- Fondo blanco/light gray
- Caja blanca con header azul oscuro arriba
- Etiquetas coloridas (verde, naranja, rojo, azul, púrpura según producto)
- Sombra/spotlight oscuro en la parte inferior

**Soluciones recomendadas para esto:**

1. **remove.bg** (https://www.remove.bg/) — 30 segundos por imagen, gratis, resultado perfecto. Las 5 imágenes fuente están en `productos_png\` con los nombres listados arriba (o en su versión original ChatGPT-renderizada si tu carpeta tiene esos archivos).

2. **rembg (Python lib)** — requiere internet para descargar modelo U2Net. Comando:
   ```bash
   pip install rembg
   rembg p input.png output.png
   ```

3. **Photoshop/Canva manual** — selección rápida + refinar bordes.

Una vez tengas los PNGs transparentes limpios, hay que **re-embebar en IMG_DATA del index.html** como WebP base64.

---

## CÓMO RE-EMBEBAR UNA IMAGEN ACTUALIZADA

Si reemplazas alguna imagen, usa este snippet Python:

```python
from PIL import Image
import base64, io, re

HTML = 'index.html'
PNG = 'productos_png/retatrutide_box.png'  # cambia por la imagen actualizada
PID = 'retatrutide_box'                     # key en IMG_DATA

img = Image.open(PNG).convert('RGBA')
if max(img.size) > 400:
    r = 400 / max(img.size)
    img = img.resize((int(img.width*r), int(img.height*r)), Image.LANCZOS)

buf = io.BytesIO()
img.save(buf, 'WEBP', quality=86, method=6)
url = 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

html = open(HTML, 'r', encoding='utf-8').read()
pat = re.compile(r'  "' + re.escape(PID) + r'": "data:image/webp;base64,[^"]+",')
html = pat.sub(f'  "{PID}": "{url}",', html)
open(HTML, 'w', encoding='utf-8').write(html)
print(f'Updated {PID}')
```

---

## PRECIOS PÚBLICO (referencia, ya están en el HTML)

GLP / FAT LOSS / METABOLIC:
- Retatrutide 10mg — $550.000
- Retatrutide 10mg PrimeHack — $600.000
- Tirzepatide 10mg — $500.000
- 5-Amino-1MQ 50mg — $320.000
- AOD9604 5mg — $230.000
- HGH Fragment 176-191 5mg — $230.000
- MOTS-C 10mg — $320.000
- Tesamorelin 10mg — $320.000
- Tesamorelin PrimeHack 10mg — $380.000

CRECIMIENTO / MASA MUSCULAR:
- IGF-1 LR3 1mg — $320.000
- Ipamorelin 10mg — $250.000
- CJC-1295 Without DAC 5mg — $250.000
- GHRP-6 5mg — $100.000
- GHRP-2 5mg — $100.000

CURATIVOS / RECUPERACIÓN:
- GHK-CU 50mg — $350.000
- GHK-CU 50mg PrimeHack — $350.000
- Glow Stack 70mg — $600.000
- BPC-157 + TB-500 20mg — $400.000
- Regen PrimeHack (BPC+TB-500) — $400.000
- TB-500 5mg — $250.000
- BPC-157 5mg — $250.000

OTROS PÉPTIDOS:
- Melanotan II 10mg — $150.000
- PT-141 10mg — $250.000
- NAD+ 500mg — $320.000
- NAD+ 500mg PrimeHack — $320.000
- Kisspeptin-10 10mg — $250.000

AGUA BACTERIOSTÁTICA:
- BAC Water 3ml — $20.000
- BAC Water 5ml — $25.000
- BAC Water 10ml — $35.000
- BAC Water 20ml — $50.000

(Precios mayoristas distintos están en `prompt_catalogo_mayorista.md`)

---

## DESCRIPCIONES OFICIALES DE PRODUCTOS

- **Retatrutide**: Triple agonista GLP-1/GIP/Glucagón. Reduce el apetito, mejora la sensibilidad a la insulina y aumenta el gasto energético.
- **Tirzepatide**: Agonista dual GLP-1/GIP enfocado en control del apetito, regulación de glucosa y pérdida de grasa corporal.
- **5-Amino-1MQ**: Modulador metabólico investigado por favorecer la oxidación de grasa y mejorar la composición corporal.
- **AOD-9604**: Fragmento derivado de HGH orientado a estimular la lipólisis y apoyar procesos de pérdida de grasa.
- **HGH Fragment 176-191**: Fragmento específico de HGH enfocado en movilización y utilización de grasa corporal.
- **MOTS-C**: Péptido mitocondrial relacionado con energía celular, sensibilidad a la insulina y rendimiento metabólico.
- **Tesamorelin**: Análogo de GHRH que estimula la liberación natural de hormona de crecimiento y favorece la reducción de grasa visceral.
- **IGF-1 LR3**: Factor de crecimiento de acción prolongada asociado con ganancia muscular, recuperación y síntesis proteica.
- **Ipamorelin**: Secretagogo selectivo de GH enfocado en recuperación, descanso y soporte de composición corporal.
- **CJC-1295 sin DAC**: Análogo de GHRH de acción corta que potencia los pulsos naturales de hormona de crecimiento.
- **GHRP-6**: Secretagogo de GH conocido por estimular apetito, recuperación y soporte anabólico.
- **GHRP-2**: Péptido estimulador de GH enfocado en recuperación, rendimiento y mejora de composición corporal. Versión más leve que GHRP-6.
- **GHK-CU**: Péptido regenerativo con cobre asociado a producción de colágeno, reparación tisular y salud de piel y cabello.
- **Glow Stack**: Combinación enfocada en regeneración estética, calidad de piel, hidratación y recuperación celular.
- **BPC-157 + TB-500**: Stack regenerativo orientado a recuperación muscular, tendinosa y reparación de tejidos.
- **Melanotan II**: Análogo melanocortínico que favorece el bronceado y puede influir sobre apetito y libido.
- **PT-141**: Péptido enfocado en deseo y función sexual mediante activación de receptores melanocortínicos.
- **NAD+**: Coenzima esencial para producción de energía celular, función mitocondrial y soporte antiedad.
- **Kisspeptin-10**: Péptido relacionado con regulación hormonal y estimulación del eje reproductivo.

---

## SI VAS A CAMBIAR CSS

Las **CSS variables principales** están en `:root`:

```css
:root{
  --bg-deep:#070310;
  --bg-1:#0c0717;
  --bg-2:#150a26;
  --purple-1:#A855F7;
  --purple-2:#8B5CF6;
  --purple-3:#6B2D8E;
  --gold-1:#F4C95D;
  --gold-2:#E0A93B;
  --white:#ffffff;
  --soft:#E8E4F0;
  --muted:#9388B0;
  --line:rgba(168,85,247,.18);
  --card:rgba(22,12,40,.65);
  --shadow-purple:0 20px 60px -20px rgba(139,92,246,.55), 0 0 0 1px rgba(168,85,247,.12) inset;
  --shadow-gold:0 16px 40px -12px rgba(244,201,93,.5);
  --radius:18px;
  --radius-sm:12px;
  --ease:cubic-bezier(.2,.8,.2,1);
}
```

El **theming por categoría** se controla con:
```css
#catalogo[data-cat="metabolico"]{ --cat-accent: 236, 72, 153; --cat-accent-2: 168, 85, 247; }
#catalogo[data-cat="muscular"]  { --cat-accent: 59, 130, 246; --cat-accent-2: 168, 85, 247; }
#catalogo[data-cat="regen"]     { --cat-accent: 16, 185, 129; --cat-accent-2: 168, 85, 247; }
#catalogo[data-cat="otros"]     { --cat-accent: 244, 201, 93; --cat-accent-2: 168, 85, 247; }
#catalogo[data-cat="agua"]      { --cat-accent: 186, 230, 253; --cat-accent-2: 168, 85, 247; }
```

---

## TAREAS PENDIENTES — sugerencias de lo que continuar

1. **🔴 Prioridad: limpiar las 4 cajas PrimeHack restantes** con remove.bg o rembg, re-embebar.
2. ⚠️ Verificar responsive en iPhone real (algunos hover effects no aplican en touch — considerar reemplazar por tap-state).
3. ✨ Considerar agregar lazy-loading de imágenes del catálogo (actualmente todas se cargan al inicio en el JS bundle).
4. 🎯 Optimizar el peso del HTML (786 KB) — si bajaras la quality del WebP de 86 a 78, ahorrarías ~150 KB.
5. 🌐 Sumar `<meta>` tags para SEO + Open Graph (compartir en WhatsApp/Instagram).
6. 📱 Probar el preloader en conexiones lentas — agregar timeout fallback (ya lo tiene 4.5s).
7. 🛒 Considerar guardar carrito en `sessionStorage` o `cookies` (ya que `localStorage` no funciona en algunos sandboxes).

---

## FIN DEL PROMPT

Pega esto en tu IDE/herramienta de IA, abre `index.html` y dile: "**Continúa desde acá según el estado descrito.**"
