<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

require("../config/Conexion.php");

if ((isset($_POST['Codigo']) && (!empty($_POST['Codigo'])) && 
isset($_POST['Nombre']) && (!empty($_POST['Nombre'])) && 
isset($_POST['Valor']) && (!empty($_POST['Valor'])) && 
isset($_POST['Stock']) && (!empty($_POST['Stock'])) && 
isset($_POST['Descripcion']) && (!empty($_POST['Descripcion'])))) {

    $codigo = $_POST['Codigo'];
    $nombre = $_POST['Nombre'];
    $valor = $_POST['Valor'];
    $stock = $_POST['Stock'];
    $descripcion = $_POST['Descripcion'];

    $sql = $conexion -> prepare("SELECT `CodigoProducto`,`NombreProducto` FROM `Productos` WHERE `NombreProducto` = ? OR `CodigoProducto` = ? ");
    $sql -> bind_param("ss",$nombre , $codigo);
    $sql -> execute();
    $sql->store_result();
    
    if ($sql->num_rows > 0) {
        echo json_encode(['error' => 'Producto o Codigo existente' , 'existente' => 'true']);
     }else{

         $stmt = $conexion -> prepare("INSERT INTO `Productos`(`CodigoProducto`, `NombreProducto`, `PrecioProducto`, `Stock`) VALUES (?,?,?,?)");
         $stmt-> bind_param("ssii",$codigo,$nombre,$valor,$stock);
         if ($stmt -> execute()) {
 
            $datos =[
                'success' =>'Producto Registrado',
                'Codigo' => $codigo
            ];
            echo json_encode($datos);
         }else{ 
            echo json_encode(['error' => 'Error al registrar producto']);
         }
         $stmt ->close();
     }
     $sql -> close();
}else{
    echo json_encode(['error' => 'Campos vacios']);
}

#isset() asegura que la variable está definida y existe.
#!empty() se asegura de que la variable no esté vacía.
?>