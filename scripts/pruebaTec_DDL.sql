CREATE DATABASE pruebaTec;

USE pruebatec;

-- * Vamos a usar las siguientes relaciones:
-- ! Una relación uno a muchos entre Usuarios y Pedidos.
-- ! Una relación muchos a muchos entre Pedidos y Productos mediante
--   una tabla intermedia Pedidos_Productos.

CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT,
    nombre VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE Pedidos (
    id_pedido INT AUTO_INCREMENT,
    id_usuario INT,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2),
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Productos (
    id_producto INT AUTO_INCREMENT,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2),
    PRIMARY KEY (id_producto)
);

CREATE TABLE Pedidos_Productos (
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    -- se coloca Primary Key compuesta para evitar duplicados
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

