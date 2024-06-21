# Proyecto de Prueba Técnica (API) ejercicio II

Este proyecto es una API simple construida con Node.js y MySQL para gestionar usuarios. A continuación se detallan los pasos para clonar el repositorio, configurarlo, y probar los endpoints de la API.

## Requisitos

- Node.js
- MySQL

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd Prueba_Tecnica\api-project
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Crear el Archivo `.env`

Crea un archivo `.env` en la raíz del proyecto (`Prueba_Tecnica/api-project`). Utiliza el archivo de plantilla `.env.template` para conocer las variables que necesitas configurar. El archivo `.env` debe contener lo siguiente:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=pruebatec
```

**Nota:** Configura las variables de entorno sin espacios ni comillas.

### 4. Ejecutar la Aplicación

Inicia el servidor con el siguiente comando:

```bash
node src/app.js
```

Por defecto, la aplicación está configurada para ejecutarse en el puerto `3000`. Si ya tienes otro servicio en ejecución en ese puerto, cambia el puerto en el archivo `src/app.js` y vuelve a ejecutar la aplicación.

## Pruebas de la API

### Endpoints Disponibles

- **Insert or Create**: Crear un nuevo registro

  - **POST** `/api/usuarios`
  - Cuerpo de la solicitud:
    ```json
    {
      "nombre": "Juan Perez",
      "email": "juan.perez@example.com"
    }
    ```

- **Get All**: Leer todos los registros de la tabla

  - **GET** `/api/usuarios`

- **Get By Id**: Leer un registro específico de la tabla por Id

  - **GET** `/api/usuarios/:id`
  - Ejemplo: `GET http://localhost:3000/api/usuarios/1`

- **Update**: Actualizar un registro específico de la tabla

  - **PUT** `/api/usuarios/:id`
  - Cuerpo de la solicitud:
    ```json
    {
      "nombre": "Juan Carlos Perez",
      "email": "juan.carlos.perez@example.com"
    }
    ```

- **Delete**: Eliminar un registro específico de la tabla
  - **DELETE** `/api/usuarios/:id`
  - Ejemplo: `DELETE http://localhost:3000/api/usuarios/1`

### Notas Adicionales

Es recomendable que tengas la base de datos creada solo con los registros de usuario para que cuando se haga la petición `DELETE` no genere problemas con las relaciones.

## Base de Datos

Asegúrate de haber creado la base de datos y las tablas necesarias según los scripts proporcionados en el proyecto:

- `pruebaTec_DDL.sql`: Contiene las sentencias para crear la base de datos y las tablas.
- `pruebaTec_DML.sql`: Contiene las sentencias para insertar datos de ejemplo en las tablas.

## Contacto

Si tienes alguna pregunta o problema, no dudes en abrir un issue en el repositorio o contactarme.

---

¡Gracias por la oportunidad ! 🚀

```

```
