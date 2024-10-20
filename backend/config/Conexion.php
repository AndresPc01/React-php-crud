<?php 
$server = "localhost";
$user = "root";
$pass = "";
$db = "Tienda";

$conexion = mysqli_connect($server,$user,$pass,$db);
if (!$conexion) {
    die("no se pudo conectar a la base de datos");
}

?>