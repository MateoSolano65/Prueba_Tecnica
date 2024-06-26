# Prueba_Tecnica

## Parte I: Bases de datos.

Instrucciones para Comprobar la Creación y Configuración de las Tablas

### Comprobación en XAMPP (phpMyAdmin)

1. **Abrir phpMyAdmin**:

   - Accede a `http://localhost/phpmyadmin` desde tu navegador.

2. **Seleccionar la Base de Datos**:

   - En el panel izquierdo, crea y selecciona la base de datos `pruebaTec`.

3. **Verificar la Creación de Tablas**:

   - En la pestaña "Estructura", asegúrate de que las tablas `Usuarios`, `Pedidos`, `Productos` y `Pedidos_Productos` están listadas.

4. **Verificar las Claves y Relaciones**:

   - Para cada tabla, haz clic en "Estructura" y revisa que las claves primarias (PK), únicas (UK), y foráneas (FK) estén definidas correctamente.
   - Verifica las relaciones (foreign keys) en las pestañas "Relaciones" o "Vista de relación".

5. **Ejecutar Consultas de Prueba**:
   - Navega a la pestaña "SQL" y ejecuta las consultas proporcionadas para verificar los resultados esperados.

### Comprobación en MySQL Workbench

1. **Abrir MySQL Workbench**:

   - Inicia MySQL Workbench y conéctate a tu servidor de MySQL.

2. **Crear o Abrir la Conexión a la Base de Datos**:

   - Usa la conexión a la base de datos donde has ejecutado el script de creación.

3. **Verificar la Creación de Tablas**:

   - En la sección "Schemas" (Esquemas), expande la base de datos `pruebaTec` y verifica que las tablas `Usuarios`, `Pedidos`, `Productos` y `Pedidos_Productos` estén listadas.

4. **Verificar las Claves y Relaciones**:

   - Haz clic derecho en cada tabla y selecciona "Table Inspector".
   - Revisa las pestañas "Columns" para claves primarias y únicas, y "Foreign Keys" para claves foráneas.

5. **Ejecutar Consultas de Prueba**:
   - Abre una nueva pestaña de query y ejecuta las consultas proporcionadas para verificar los resultados esperados.
