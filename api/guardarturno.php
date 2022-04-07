<?php 
header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
	header('content-type: application/json; charset=utf-8');

require_once('config/db.php');
date_default_timezone_set('America/Argentina/Mendoza');
$json = json_decode(file_get_contents("php://input"));
$diajs=$json->diaphp;
$fechaphp=getdate();
$dia=$fechaphp['weekday'];
$dia=strtolower($dia);
$horahoy=$fechaphp['hours'];

if ($dia==$diajs and $horahoy<$json->horaphp ) {
$diames=getdate();
$diames=$fechaphp['mday'];
    $año=date('Y');
    $mes=date('m');
    $fecha=$año."-".$mes."-".$diames." ".$json->horaphp.":00:00";
}
else{
    $fecha=date('Y-m-d', strtotime('next '.$diajs));
    
    $fecha=$fecha.""." ".$json->horaphp.":00:00";
}

	$db = Database::connect();
$sql="UPDATE turnos SET estado='Ocupado',fijo=".$json->fijo.",fecha='".$fecha."',nombre='".$json->nombre."',telefono='".$json->telefono."' WHERE id=".$json->turnob.";";	
$resultado=$db->query($sql);
		
	$json=$resultado;
echo json_encode($json);

