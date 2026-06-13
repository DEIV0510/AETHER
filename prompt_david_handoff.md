# Prompt de inicio para David — Aether Solutions

Pega esto como primer mensaje en Claude Code al abrir el proyecto:

---

Hola Claude. Voy a trabajar en el sitio web de **Aether Solutions**, una tienda de péptidos en Colombia. El sitio ya está construido y en producción. Necesito que me ayudes a hacer cambios y mejoras.

## Contexto del proyecto

- **Sitio en vivo:** https://aethersls.com
- **Repositorio:** https://github.com/DEIV0510/AETHER
- **Deploy:** Vercel (cuenta: jaimelasso222-3427s-projects)
- **Dominio:** aethersls.com (DNS en Hostinger)

## Estructura de archivos

```
AETHER/
├── index.html          ← HTML principal (35KB, estructura y preloader)
├── style.css           ← Todo el CSS (95KB, no tocar sin cuidado)
├── app.js              ← Toda la lógica JS: productos, carrito, WhatsApp
├── vercel.json         ← Configuración de cache de Vercel
├── fonts/              ← Fuentes Cinzel + Manrope (self-hosted, 6 archivos woff2)
└── img/                ← Imágenes en formato WebP optimizadas
```

## Cómo funciona el sitio

### Productos (`app.js`)
- Todos los productos están en el array `PRODUCTS` al inicio de `app.js`
- Cada producto tiene: `id`, `cat` (categoría), `tag`, `nombre`, `presentacion`, `precio`, `img`, `desc`, `destacado`
- Las imágenes están en `img/` como archivos `.webp`
- El número de WhatsApp está en `WHATSAPP_NUMBER = '573142617708'`

### Categorías disponibles
- `metabolico` — péptidos metabólicos/GLP
- `recuperacion` — recuperación y reparación
- `antienvejecimiento` — anti-aging
- `bienestar` — bienestar general

### Carrito y pedidos
- El carrito funciona con `localStorage`
- Al hacer pedido, genera un mensaje de WhatsApp con los productos seleccionados
- No hay pasarela de pago — todo se cierra por WhatsApp

## Cómo agregar un producto nuevo

En `app.js`, dentro del array `PRODUCTS`, agrega un objeto así:

```js
{
  id: 'nombre_unico_sin_espacios',
  cat: 'metabolico',          // categoría
  tag: 'GLP',                 // etiqueta que aparece en la tarjeta
  nombre: 'Nombre del Producto',
  presentacion: '10 mg / vial',
  precio: 500000,             // en pesos colombianos, sin puntos
  img: 'img/nombre.webp',     // imagen en formato WebP en la carpeta img/
  desc: 'Descripción corta del producto para el panel de detalle.',
  destacado: true             // opcional: aparece en la sección "Destacados"
},
```

**Para agregar la imagen:** la imagen debe estar en formato WebP en la carpeta `img/`. Si tienes un PNG o JPG, pídele a Claude que lo convierta.

## Cómo cambiar un precio

Busca el producto en `app.js` por su `id` o `nombre` y cambia el valor de `precio`.

## Cómo hacer deploy (publicar cambios)

```bash
vercel --prod --yes
```

O si conectas GitHub a Vercel (recomendado), cada `git push` hace deploy automáticamente.

## Reglas importantes

1. **Imágenes siempre en WebP** — el sitio está optimizado para WebP. Si agregas imágenes en PNG/JPG el sitio se vuelve lento.
2. **No tocar style.css sin cuidado** — es el CSS de toda la página. Un error ahí rompe todo el diseño.
3. **Precios sin puntos ni comas** — se usan como números enteros: `650000` no `650.000`.
4. **El CSS carga de forma no-bloqueante** — no cambiar la línea `<link id="main-css" ... media="print">` en index.html, es intencional para que cargue rápido en móviles.

## Tareas comunes que puedes pedirle a Claude

- "Agrega este producto nuevo: [datos]"
- "Cambia el precio de [producto] a [precio]"
- "Agrega una nueva imagen a la carpeta img/"
- "Cambia la descripción de [producto]"
- "Mueve [producto] a la categoría [categoría]"
- "Marca [producto] como destacado"
- "Haz deploy del sitio"
- "Convierte esta imagen a WebP y agrégala"

---

Tengo el repositorio clonado en mi computador. ¿Por dónde quieres que empecemos?
