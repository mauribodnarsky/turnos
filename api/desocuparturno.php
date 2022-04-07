<?php 
header("Access-Control-Allow-Origin: http://localhost:4200");
  header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
	header('content-type: application/json; charset=utf-8');
require_once('config/db.php');


	$db = Database::connect();
$json = json_decode(file_get_contents("php://input"));
$sql="UPDATE turnos SET estado='Disponible',fijo=false,fecha=null,nombre=null,telefono=null WHERE id=".$json->turno.";";	
$resultado=$db->query($sql);
		
	$json=$resultado;

	ECHO json_encode($json);
	
