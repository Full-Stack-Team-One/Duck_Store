# 🦆 DuckStore

Página web para el lanzamiento de productos de **DuckStore**, una tienda de patitos de goma de colección. Proyecto desarrollado como parte del curso: diseño de wireframes y maquetas en **Figma / Stitch**, y desarrollo del sitio con **HTML5, CSS3 y JavaScript Vanilla**.

🔗 **Sitio en producción:** _[https://full-stack-team-one.github.io/Duck_Store/]_
🎨 **Diseño (Stitch):** _[https://stitch.withgoogle.com/projects/5457648020341073952]_

---

## Tabla de contenidos

- [Objetivo del proyecto](#objetivo-del-proyecto)
- [Equipo](#equipo)
- [Páginas del sitio](#páginas-del-sitio)
- [Tecnologías](#tecnologías)
- [Funcionalidades principales](#funcionalidades-principales)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo correr el proyecto en local](#cómo-correr-el-proyecto-en-local)
- [Metodología de trabajo](#metodología-de-trabajo)
- [Aprendizajes y retos](#aprendizajes-y-retos)

---

## Objetivo del proyecto

DuckStore va a lanzar sus productos y nos pidió realizar su página web. El trabajo consistió en hacer los wireframes de baja fidelidad y las maquetas con Figma y Stitch, para posteriormente desarrollar la web utilizando HTML5, CSS3 y JavaScript Vanilla.

## Equipo

**Full-Stack-Team-One**

| Integrante | Rol |
|---|---|
| Raul Gonzalez Guijarro | Product Owner |
| Brelin Andres Ludeña Salinas | Scrum Master |
| Ruben Gato Leon | Developer |
| Abdelhay Errofasi | Developer |
| Ainara Garcia Garcia | Developer |
| Abel Marrero Camero | Developer |

## Páginas del sitio

| Página | Archivo | Descripción |
|---|---|---|
| Inicio | `index.html` | Landing page con el objetivo del comercio y productos destacados |
| Catálogo | `pages/catalogo.html` | Listado de todos los productos (nombre, imagen y precio) |
| Detalle de producto | `pages/detalle.html` | Información completa de un producto (nombre, imagen, descripción, precio, stock) |
| Contacto | `pages/contacto.html` | Localización y formulario de contacto |
| Carrito | `pages/carrito.html` | Bolsa de compras con cantidad, resumen y total |


## Tecnologías

- **HTML5** semántico
- **CSS3** (responsive, animaciones y transiciones)
- **JavaScript (ES6+)** Vanilla
- **Figma** / **Stitch** — diseño de wireframes y maquetas
- **Git** y **GitHub** (control de versiones y GitHub Projects)
- **GitHub Pages** — despliegue

## Funcionalidades principales

- ✅ Menú de navegación móvil desplegable (hamburguesa) en las 5 páginas.
- ✅ Formulario de contacto con validación en tiempo real (nombre, correo, mensaje).
- ✅ Diseño responsive para móvil, tablet y escritorio.
- ✅ Header y footer como componentes reutilizables, compartidos entre todas las páginas.

## Estructura del proyecto

```
Duck_Store/
├── index.html            # Página de inicio
├── components/           # Header y footer reutilizables (se inyectan por JS)
│   ├── header.html
│   └── footer.html
├── css/                  # Una hoja de estilos por página + estilos base
│   ├── style.css
│   ├── header.css
│   ├── footer.css
│   ├── catalogo.css
│   ├── contacto.css
│   ├── detalle.css
│   └── carrito.css
├── pages/
│   ├── catalogo.html
│   ├── contacto.html
│   ├── detalle.html
│   └── carrito.html
├── scripts/
│   ├── main.js            # Carga de header/footer + menú hamburguesa
│   └── contact.js         # Validación del formulario de contacto
├── assets/                # Imágenes propias del proyecto
└── README.md
```

## Cómo correr el proyecto en local

El header y el footer se cargan dinámicamente con JavaScript (`fetch`), por lo que **el sitio no funciona abriendo `index.html` con doble clic** (los navegadores bloquean `fetch` sobre `file://`). Hay que levantar un servidor local:

```bash
# Con Python
python -m http.server 8000

# o con Node
npx serve
```

Luego abre `http://localhost:8000` en el navegador.

## Metodología de trabajo

Trabajamos con **Scrum/Kanban** apoyándonos en las herramientas de GitHub:

- **Tablero Kanban** (GitHub Projects) con columnas *To do / In progress / Done*, una tarjeta por tarea o página.
- **Sprints cortos** con objetivos semanales, revisados en equipo.
- Cada integrante trabaja en su propia **rama** y abre un **Pull Request** hacia la rama principal antes de integrar cambios, para que el equipo revise el código.

## Aprendizajes y retos

- La importancia de manejar bien las **rutas relativas** al compartir componentes (header/footer) entre páginas ubicadas en distintos niveles de carpetas.
- Trabajar con **ramas propias y Pull Requests** evita pisarse el trabajo entre compañeros.
- Revisar el **diseño contra el código en cada página** (no solo una vez) ayuda a mantener la fidelidad visual en todo el sitio.

---

Proyecto realizado con fines educativos.
