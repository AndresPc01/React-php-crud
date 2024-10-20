<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

require("../config/Conexion.php");

$sql = $conexion-> prepare("SELECT `CodigoProducto` FROM `Productos` ORDER BY IdProducto DESC LIMIT 1;");
$sql -> execute();
$resultado = $sql->get_result();

$response = [];

if ($resultado->num_rows > 0) {
    $row = $resultado->fetch_assoc();
    $response['CodigoProducto'] = $row['CodigoProducto'];
} else {
    $response['error'] = "No se encontraron registros.";
}

$conexion->close();

echo json_encode($response);
 ?>