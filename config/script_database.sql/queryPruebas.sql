
SELECT * FROM genero;
SELECT * FROM usuario;
SELECT * FROM campesino;
SHOW COLUMNS FROM producto;
SELECT * FROM campesino_producto;
SELECT * FROM comprador;
SELECT * FROM tipo_producto;
show COLUMNS from tipo_producto;
SHOW TABLES;
DELETE FROM usuario WHERE id_usuario = 312;

SELECT * 
FROM usuario u INNER JOIN comprador c
ON u.id_usuario = c.fk_id_usuario
WHERE id_usuario = 6;

SELECT c.camp_nombre Nombre_Campesino, c.camp_direccion Direccion,
    c.camp_telefono Telefono,p.precio_unitario Precio_unidad,
    u.nombre_usuario Nombre_como_usuario, u.email email
FROM campesino c INNER JOIN campesino_producto p
ON c.id_campesino = p.id_cam_pruducto
INNER JOIN usuario u ON u.id_usuario = c.id_campesino
WHERE fk_id_producto = 2;

SELECT * FROM producto;