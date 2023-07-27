
CREATE DATABASE FreshMarket;
USE FreshMarket;


CREATE TABLE genero (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre_genero VARCHAR(20)
);
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY,
    nombre_usuario VARCHAR(70),
    email VARCHAR(40),
    fk_id_genero INT,
    CONSTRAINT fk_gene_usuario FOREIGN KEY (fk_id_genero) REFERENCES genero(id_genero)
);

CREATE TABLE campesino(
    id_campesino INT PRIMARY KEY AUTO_INCREMENT,
    camp_nombre VARCHAR(60),
    camp_direccion VARCHAR(100),
    camp_telefono VARCHAR(13),
    fk_id_usuario INT,
    CONSTRAINT fk_usuario_camp FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE comprador(
    id_comprador INT PRIMARY KEY AUTO_INCREMENT,
    nombre_comprador VARCHAR(60),
    compra_direccion VARCHAR(100),
    compra_telefono VARCHAR(13),
    fk_id_usuario INT,
    CONSTRAINT fk_usuario_compra FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE tipo_producto(
    id_tipo_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_tipo_producto VARCHAR(50),
    descripcion_tipo_producto VARCHAR(200)
);

CREATE TABLE producto(
    id_producto INT PRIMARY KEY,
    nombre_producto VARCHAR(40),
    descripcion VARCHAR(200),
    fk_id_tipo INT,

    CONSTRAINT fk_producto_tipo FOREIGN KEY (fk_id_tipo) REFERENCES tipo_producto(id_tipo_producto)
);

CREATE TABLE campesino_producto(
    id_cam_pruducto INT PRIMARY KEY AUTO_INCREMENT,
    fk_id_campesino INT,
    fk_id_producto INT,
    precio_unitario FLOAT,
    CONSTRAINT fk_produc_produc FOREIGN KEY (fk_id_producto) REFERENCES producto(id_producto),
    CONSTRAINT fk_produc_campes FOREIGN KEY (fk_id_campesino) REFERENCES campesino(id_campesino)
);

CREATE TABLE pedidos(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    cantidad INT,
    fk_id_productos INT,
    fk_id_comprador INT,
    CONSTRAINT fk_pedidos_compra FOREIGN KEY (fk_id_comprador) REFERENCES comprador(id_comprador),
    CONSTRAINT fk_pedidos_produc FOREIGN KEY (fk_id_productos) REFERENCES campesino_producto(id_cam_pruducto)
);



INSERT INTO genero (id_genero, nombre_genero) VALUES (1, 'Masculino');
INSERT INTO genero (id_genero, nombre_genero) VALUES (2, 'Femenino');
INSERT INTO genero (id_genero, nombre_genero) VALUES (3, 'Otro');
INSERT INTO genero (id_genero, nombre_genero) VALUES (4, 'No especificado');
INSERT INTO genero (id_genero, nombre_genero) VALUES (5, 'Prefiero no decirlo');


INSERT INTO usuario (id_usuario, nombre_usuario, email, fk_id_genero) VALUES
(1, 'Usuario 1', 'usuario1@example.com', 1),
(2, 'Usuario 2', 'usuario2@example.com', 1),
(3, 'Usuario 3', 'usuario3@example.com', 2),
(4, 'Usuario 4', 'usuario4@example.com', 2),
(5, 'Usuario 5', 'usuario5@example.com', 1),
(6, 'Usuario 6', 'usuario6@example.com', 1),
(7, 'Usuario 7', 'usuario7@example.com', 2),
(8, 'Usuario 8', 'usuario8@example.com', 2),
(9, 'Usuario 9', 'usuario9@example.com', 1),
(10, 'Usuario 10', 'usuario10@example.com', 2);

INSERT INTO comprador (id_comprador, nombre_comprador, compra_direccion, compra_telefono, fk_id_usuario) VALUES
(1, 'Comprador 1', 'Dirección 6', '6789012345', 6),
(2, 'Comprador 2', 'Dirección 7', '7890123456', 7),
(3, 'Comprador 3', 'Dirección 8', '8901234567', 8),
(4, 'Comprador 4', 'Dirección 9', '9012345678', 9),
(5, 'Comprador 5', 'Dirección 10', '0123456789', 10);
INSERT INTO campesino (id_campesino, camp_nombre, camp_direccion, camp_telefono, fk_id_usuario) VALUES
(1, 'Campesino 1', 'Dirección 1', '1234567890', 1),
(2, 'Campesino 2', 'Dirección 2', '2345678901', 2),
(3, 'Campesino 3', 'Dirección 3', '3456789012', 3),
(4, 'Campesino 4', 'Dirección 4', '4567890123', 4),
(5, 'Campesino 5', 'Dirección 5', '5678901234', 5);


INSERT INTO campesino (id_campesino, camp_nombre, camp_direccion, camp_telefono, fk_id_usuario) VALUES
(11, 'Daniel', 'Floridablanca', '1234567890', 1);
