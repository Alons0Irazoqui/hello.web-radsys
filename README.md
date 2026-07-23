# Brief de Proyecto — Ingeniería RADSYS

Este documento es el informe de negocio para la construcción del sitio web de **Ingeniería RADSYS**. Complementa (no reemplaza) el prompt inicial ya entregado para adaptar la plantilla base al negocio. Úsalo como fuente de verdad para el contenido, la marca y el estilo del proyecto.

**Tipo de proyecto:** Landing Page corporativa.
**Base de trabajo:** Plantilla HTML ya existente. La estructura de secciones de la página es la que define la plantilla — este brief no propone ni modifica esa estructura, solo aporta contenido, marca y requisitos de estilo/efectos.

---

## 1. Sobre el negocio

- **Nombre:** Ingeniería RADSYS
- **Rubro:** Sistemas de video vigilancia, radios de comunicación y seguridad electrónica.
- **Eslogan:** *"Te protegemos con Tecnología de Última Milla"*
- **Descripción:** Empresa con 30 años de experiencia, especializada en soluciones integrales de radiocomunicación, sistemas de video vigilancia (residencial, comercial e industrial) y seguridad electrónica, incluyendo redes y enlaces inalámbricos.
- **Posicionamiento:** Distribuidor y partner autorizado de marcas líderes del sector, con enfoque en calidad e innovación.

## 2. Información de contacto

**Teléfonos (Toluca):**
- 722 215 3822
- 722 213 2353
- 722 209 0270 (también disponible por WhatsApp)

**Teléfono (Morelos):**
- 777 561 2908

**Correo electrónico:**
- ventas@radsys.com.mx
- radsys_ventas@prodigy.net.mx

**Matriz — Toluca, Estado de México:**
Av. Solidaridad las Torres No. 114, Col. Del Parque, C.P. 50180

**Sucursal — Morelos:**
Calle Emiliano Zapata s/n, Col. Tezoyo Tres Marías, C.P. 62515, Municipio Huitzilac, Morelos

**Horarios de atención:**
- Lunes a viernes: 9:00 a.m. – 6:00 p.m.
- Sábado: 10:00 a.m. – 2:00 p.m.

**Redes sociales:**
- Facebook: [facebook.com/RadsysIndustria](https://facebook.com/RadsysIndustria)
- Instagram: [@radsys.mx](https://instagram.com/radsys.mx)
- WhatsApp: +52 722 209 0270

## 3. Servicios

- Integraciones profesionales de radiocomunicación
- Sistemas de video vigilancia residencial, comercial e industrial
- Cámaras WiFi para hogar inteligente
- Enlaces de radiocomunicación
- Control de acceso personal y vehicular
- Laboratorio certificado de reparación de radios
- Instalación de torres y repetidores de radiocomunicación
- Vigilancia con IA y geolocalización inteligente
- Sistemas de control de horarios
- Soluciones de comunicación para transporte público

## 4. Productos

- Cámaras de video vigilancia
- Radios de comunicación (múltiples marcas)
- Cercas electrificadas
- Accesorios para radios y baterías
- Equipos de cómputo y componentes
- Teléfonos satelitales

## 5. Marcas con las que trabaja

Hytera, Kenwood, Motorola, Icom, Maverick, PTTPRO, Hikvision, HikSemi y Talkpod.

---

## 6. Branding e identidad visual

La paleta y la identidad visual se definieron a partir del logo oficial (`imagenes/logo.pdf`), extrayendo los códigos HEX reales del archivo vectorial.

### Paleta de colores

| Color | HEX | Uso |
|---|---|---|
| Gris carbón (marca) | `#2E373A` | Tipografía principal, fondos oscuros, texto del logo |
| Rojo Radsys (marca) | `#CB2529` | Color distintivo de marca, acentos, CTAs, elementos destacados |
| Azul marino (marca) | `#333378` | Acento secundario (detalle del ícono del logo) |
| Blanco | `#FFFFFF` | Fondo principal, espacios en blanco |
| Gris claro (neutro sugerido) | `#F4F5F6` | Fondos de superficies/secciones alternas, para mantener el look minimalista |

### Tipografía sugerida

- **Encabezados/Títulos:** Montserrat (Bold / ExtraBold) — sans-serif geométrica y condensada, coherente con el trazo del wordmark "RADSYS".
- **Cuerpo de texto:** Inter o Montserrat (Regular) — alta legibilidad, look moderno tipo "big tech".

### Identidad visual

- El ícono de ondas concéntricas del logo (arcos rojos que emanan de un punto azul marino) es el elemento gráfico distintivo de la marca; puede reutilizarse como elemento decorativo, divisor o detalle iconográfico dentro del diseño.
- Priorizar fotografía real de la empresa (instalaciones, técnicos en campo, equipo de trabajo) por encima de imágenes de stock genéricas, para transmitir autoridad y experiencia real del negocio.

---

## 7. Estilo visual obligatorio

El proyecto debe manejar:
- Estilo **premium, enterprise y corporativo** de marca.
- Nivel **big tech**: elegante y a la vez minimalista.

## 8. Efectos y animaciones requeridos

- Efectos visuales y animaciones activadas por scroll.
- Pantalla de carga (**preloader**) con spinner + logo del negocio.
- Animación en el título del hero: efecto máquina de escribir, cambio de color en las letras u otro efecto tipográfico similar.

---

## 9. Instrucciones sobre assets (`imagenes/`)

- **Logo (`logo.pdf`):** viene con fondo. Debe removerse el fondo antes de usarlo, y exportarse en un formato con transparencia (PNG y/o SVG) para su uso en el sitio.
- **`hikvision-logo-png_seeklogo-223929.png` y `kenwood logo.png`:** son logos de marcas socias/distribuidas (no son el logo del negocio). Úsalos únicamente si la plantilla contempla una sección de marcas o partners; no deben confundirse con el logo de RADSYS.
- **Fotos "WhatsApp Image...":** incluyen fotografías reales de instalaciones y trabajos del equipo (cableado estructurado, cámaras instaladas, técnicos en sitio) y piezas publicitarias de producto (flyers con branding de terceros como Motorola/Hytera ya integrado). Las fotografías de trabajos reales son aptas para usarse como material fotográfico auténtico de la empresa; los flyers de producto son material de referencia para entender el catálogo, pero al ya incluir branding ajeno no deben insertarse tal cual en el sitio.

---

## 10. Nota para el desarrollador

Puedes iterar sobre el proyecto con Claude Code dándole instrucciones las veces que sea necesario hasta lograr el resultado deseado. No es necesario acertar todo a la primera: ajusta, corrige y refina con Claude en cada paso.

---

## Checklist

- [ ] Remover el fondo del logo (`imagenes/logo.pdf`) y exportarlo en PNG/SVG con transparencia.
- [ ] Aplicar la paleta de colores de marca (HEX) definida en este documento en toda la plantilla.
- [ ] Aplicar la tipografía sugerida (o una equivalente) para encabezados y cuerpo de texto.
- [ ] Implementar el preloader con spinner + logo del negocio.
- [ ] Implementar animaciones/efectos activados por scroll.
- [ ] Implementar la animación tipográfica en el título del hero (typewriter, cambio de color u otro efecto).
- [ ] Reemplazar todo el contenido de la plantilla con la información real del negocio (contacto, servicios, productos, marcas, horarios y ubicaciones).
- [ ] Verificar que el resultado final tenga un acabado premium, enterprise y big tech, elegante y minimalista.
- [ ] Iterar con Claude Code las veces que sea necesario hasta lograr el resultado esperado.
