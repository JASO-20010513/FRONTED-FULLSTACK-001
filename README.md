# CRUD Frontend Application

## Descripción

Esta es la parte frontend de una aplicación CRUD (Create, Read, Update, Delete) desarrollada con React. La aplicación permite interactuar con un backend (desarrollado en Spring Boot) para gestionar un inventario de elementos (items).

## Autor

**Jorge Armando Solarte Ordóñez**

---

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16.x o superior)
- Un editor de texto como [Visual Studio Code](https://code.visualstudio.com/)

## Instalación

Sigue los siguientes pasos para ejecutar el frontend en tu máquina local:

1. **Clonar el repositorio**: Clona este repositorio en tu máquina local.

   ```bash
   git clone https://github.com/tu-usuario/crudfrontend.git
   
2. Instalar dependencias: Navega a la carpeta del proyecto e instala las dependencias necesarias ejecutando el siguiente comando en la terminal:

   ```bash
   npm install

3. Configurar la conexión al Backend:

   Asegúrate de que el backend de la aplicación esté ejecutándose localmente en http://localhost:8080. Si el backend utiliza otro puerto o está alojado en un servidor diferente, actualiza el archivo de configuración en src/services/api.js:

   ```bash
   const API_URL = 'http://localhost:8080'; // Cambia esta línea si es necesario

4. Ejecutar el proyecto: Inicia el servidor de desarrollo con el siguiente comando:

   ```bash
   npm start

Esto iniciará la aplicación en http://localhost:3000.

---

## Estructura de carpetas

La estructura de carpetas del proyecto sigue buenas prácticas para una aplicación React moderna:

crudfrontend/
│
├── public/           -> Archivos públicos como el index.html
├── src/
│   ├── components/   -> Componentes reutilizables de React
│   │   ├── ItemList/ -> Componente para listar items
│   ├── services/     -> Servicios que conectan con el backend
│   │   └── api.js    -> Archivo que define la URL base del backend
│   ├── App.js        -> Componente principal de la aplicación
│   ├── index.js      -> Punto de entrada principal de la aplicación
├── package.json      -> Archivo de configuración de dependencias
└── README.md         -> Este archivo

---

## Funcionalidades principales

- Ver items: Muestra una lista de items obtenidos del backend.
- item: Permite agregar un nuevo item a la lista.
- Editar item: Modifica un item existente.
- Eliminar item: Elimina un item de la lista.

---

## Pruebas de la API con Postman

1. Instalar Postman: Puedes descargar Postman desde su sitio oficial aquí.

2. Configurar las peticiones:

   Para probar las funcionalidades del frontend y el backend, puedes enviar las siguientes peticiones con Postman:

   - GET Todos los items:
     - URL: http://localhost:8080/items
     - Método: GET

   - POST Crear un nuevo item:
     - URL: http://localhost:8080/items
     - Método: POST
     - Body (JSON)
       ```json
       {
         "name": "Item actualizado",
         "description": "Nueva descripción del item"
       }

   - DELETE Eliminar un item:
     - URL: http://localhost:8080/items/{id}
     - Método: DELETE

---

## Despliegue en producción

Para construir el proyecto para producción, ejecuta el siguiente comando:

   npm run build

Esto generará una versión optimizada del proyecto en la carpeta build/, que estará lista para ser desplegada en un servidor web.

---

## Licencia
Este proyecto no tiene una licencia específica.
