
CREATE DATABASE FreshMarket;
USE FreshMarket;


CREATE TABLE genero (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre_genero VARCHAR(20)
);
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY ,
    nombre_usuario VARCHAR(70),
    email VARCHAR(40),
    fk_id_genero INT,
    CONSTRAINT fk_gene_usuario FOREIGN KEY (fk_id_genero) REFERENCES genero(id_genero)
);

CREATE TABLE campesino(
    id_campesino INT PRIMARY KEY,
    camp_nombre VARCHAR(60),
    camp_direccion VARCHAR(100),
    camp_telefono VARCHAR(13),
    fk_id_usuario INT,
    CONSTRAINT fk_usuario_camp FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE comprador(
    id_comprador INT PRIMARY KEY,
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

DROP TABLE campesino_producto;
CREATE TABLE pedidos(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    cantidad INT,
    fk_id_productos INT,
    fk_id_comprador INT,
    CONSTRAINT fk_pedidos_compra FOREIGN KEY (fk_id_comprador) REFERENCES comprador(id_comprador),
    CONSTRAINT fk_pedidos_produc FOREIGN KEY (fk_id_productos) REFERENCES campesino_producto(id_cam_pruducto)
);