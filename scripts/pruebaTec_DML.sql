USE pruebatec;

-- Insertar datos en Usuarios
INSERT INTO Usuarios (nombre, email) VALUES
('Juan Pérez', 'juan.perez@example.com'),
('Ana Gómez', 'ana.gomez@example.com'),
('Luis Martínez', 'luis.martinez@example.com'),
('María López', 'maria.lopez@example.com'),
('Carlos Sánchez', 'carlos.sanchez@example.com');

-- Insertar datos en Productos
INSERT INTO Productos (nombre, precio) VALUES
('Perro Caliente', 1000),
('Hamburguesa', 15000),
('Arepa', 2000),
('Pastas', 3000),
('Limonada', 5000);

-- Insertar datos en Pedidos
INSERT INTO Pedidos (id_usuario, total) VALUES
(1, 2500),
(2, 4500),
(3, 1000),
(4, 5000),
(5, 1500);

-- Insertar datos en Pedidos_Productos
INSERT INTO Pedidos_Productos (id_pedido, id_producto, cantidad) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 3),
(2, 5, 1),
(3, 4, 2),
(4, 1, 1),
(4, 4, 1),
(5, 2, 1),
(5, 3, 1);

-- ! Consultas
-- Inner Join: Listar pedidos con información de usuario y productos
SELECT 
    Usuarios.nombre AS Usuario, 
    Pedidos.id_pedido, 
    Productos.nombre AS Producto, 
    Pedidos_Productos.cantidad 
FROM 
    Pedidos
INNER JOIN Usuarios ON Pedidos.id_usuario = Usuarios.id_usuario
INNER JOIN Pedidos_Productos ON Pedidos.id_pedido = Pedidos_Productos.id_pedido
INNER JOIN Productos ON Pedidos_Productos.id_producto = Productos.id_producto;

-- Left Join: Listar todos los usuarios y sus pedidos, incluyendo aquellos sin pedidos
SELECT 
    Usuarios.nombre AS Usuario, 
    Pedidos.id_pedido, 
    Pedidos.total 
FROM 
    Usuarios
LEFT JOIN Pedidos ON Usuarios.id_usuario = Pedidos.id_usuario;

-- Union: Listar nombres de usuarios y productos en una sola columna
SELECT nombre AS Nombre FROM Usuarios
UNION
SELECT nombre AS Nombre FROM Productos;

-- Case: Listar productos y mostrar si son caros (>200) o baratos
SELECT 
    nombre, 
    precio,
    CASE 
        WHEN precio > 200 THEN 'Caro'
        ELSE 'Barato'
    END AS Categoria
FROM 
    Productos;
