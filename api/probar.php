<?php 
header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

require_once('config/db.php');
date_default_timezone_set('America/Argentina/Mendoza');

$db = Database::connect();

$fechaactual=$db->query("SELECT NOW() as 'fecha'");
$fechaactual=$fechaactual->fetch_assoc();
$fechaactual=$fechaactual['fecha'];

if('2021-09-02 17:10:24'<'2021-09-09 14:00:00'){
    echo "v";
}else{
    echo "f";
}