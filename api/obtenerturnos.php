<?php 
header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
	header('content-type: application/json; charset=utf-8');

require_once('config/db.php');
date_default_timezone_set('America/Argentina/Mendoza');

	$db = Database::connect();

$fechaactual=$db->query("SELECT NOW() as 'fecha'");
$fechaactual=$fechaactual->fetch_assoc();
$fechaactual=$fechaactual['fecha'];
$actualizar="UPDATE turnos SET estado='Disponible',fijo=0,fecha=null,nombre=null,telefono=null WHERE fecha<'".$fechaactual."' and fijo=0;";
$db->query($actualizar);


	$resultado=$db->query("SELECT * FROM turnos");
	while($filas=$resultado->fetch_object()){
				            $turnos[]=$filas;
				        }
			if (empty($resultado)) {
				$turnos=false;
			}
		
	$json=$turnos;
	echo json_encode($json);
	
