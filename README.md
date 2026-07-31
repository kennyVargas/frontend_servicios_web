# React + Vite

# Frontend Servicios Web

Este proyecto es un **frontend en React** que consume APIs para ofrecer servicios como:

- Generador de QR
- Generador de PDF
- Acortador de enlaces
## 🔧 Requisitos

- Node.js >= 14
- npm o yarn

---

## ⚡ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/frontend-servicios-web.git
cd frontend-servicios-web
```
2. Instalar las dependencias:
```bash
npm install
```

3. Levantar el proyecto
```bash
npm run dev
```

4. estrucuruta del proyecto
```bash
frontend/
├── public/               # Recursos estáticos (no incluidos en tu árbol, pero típicos en Vite)
├── src/
│   ├── assets/           # Imágenes y recursos estáticos (ej. react.svg)
│   ├── components/       # Componentes reutilizables
│   │   ├── captcha/      # Integración con reCAPTCHA
│   │   ├── form/         # Formulario base y botón toggle
│   │   ├── mensaje/      # Componente de notificaciones/mensajes
│   │   └── servicio/     # Tarjeta para mostrar los servicios
│   ├── const/            # Constantes globales (ej. URLs, claves)
│   ├── features/         # Lógica y vistas por funcionalidad
│   │   ├── qr-generator/         # Generador de códigos QR + Qrcanvas
│   │   ├── pdf-foleador/         # Generador de PDFs en blanco
│   │   └── url-shortener/        # Acortador de URLs (con formularios separados para crear/buscar)
│   ├── routes/           # Definición de rutas (React Router)
│   ├── services/         # Llamadas a APIs y lógica de negocio
│   ├── style/            # Estilos globales (estilos.css)
│   ├── App.jsx           # Componente raíz (layout, navegación)
│   └── main.jsx          # Punto de entrada de la aplicación
├── index.html            # Página principal (Vite)
├── vite.config.js        # Configuración de Vite
├── package.json          # Dependencias y scripts
└── ...
```


