<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$filename = "dataphp.json";
$method = $_SERVER["REQUEST_METHOD"];

if ($method === "POST") {

    if (!isset($_POST["data"])) {
        echo json_encode(["error" => "No POST data received"]);
        exit;
    }

    $data = $_POST["data"];

    // guardar en archivo
    if (!file_exists($filename)) {
        file_put_contents($filename, "");
        chmod($filename, 0666);
    }
    file_put_contents($filename, $data);

file_put_contents($filename, $data);


    echo json_encode(["status" => "OK", "msg" => "Data saved"]);
    exit;
}

if ($method === "GET") {

    if (file_exists($filename)) {
        echo file_get_contents($filename);
        exit;
    }

    // alternativs
    $myObj = new stdClass;
    $myObj->nombre = "Datosphp";
    $myObj->apellido = "Lopez Perez";
    $myObj->dni = "12345678X";
    $myObj->fecha = "22/09/2000";
    $myObj->codigo = 35500;
    $myObj->correo = "pepe@gmail.com";
    $myObj->telefonofijo = "928666666";
    $myObj->telefono = "666999666";
    $myObj->tarjeta = "4539955085883327";
    $myObj->iban = "ES7921000813610123456789";
    $myObj->contrasena = "Pepe123456789*";

    echo json_encode($myObj);
    exit;
}
?>
