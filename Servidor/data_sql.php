<?php

header('Access-Control-Allow-Origin: *');

$servername = "servidor-mysql-1";
$username   = "root";
$password   = "secret";
$dbname     = "mydatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT nombre, apellido, dni, fecha, codigo, correo, telefonofijo, telefono, tarjeta, iban, contrasena
        FROM usuarios WHERE id = 0";

$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {

        $myObj = new stdClass;
        $myObj->nombre       = $row["nombre"];
        $myObj->apellido     = $row["apellido"];
        $myObj->dni          = $row["dni"];
        $myObj->fecha        = $row["fecha"];
        $myObj->codigo       = $row["codigo"];
        $myObj->correo       = $row["correo"];
        $myObj->telefonofijo = $row["telefonofijo"];
        $myObj->telefono     = $row["telefono"];
        $myObj->tarjeta      = $row["tarjeta"];
        $myObj->iban         = $row["iban"];
        $myObj->contrasena   = $row["contrasena"];

        echo json_encode($myObj);
    }
} else {
    echo "0 results";
}

$conn->close();
?>
