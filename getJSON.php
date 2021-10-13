<?php

header('Content-Type: application/json');

if (isset($_GET["state"])) {
	
	$url = "https://www.koronavirus.hr/json/?action=po_danima_zupanijama_zadnji";

} else if (isset($_GET["total"])) {

	$url = "https://www.koronavirus.hr/json/?action=podaci_zadnji";	

} else {
	die("wrong parameter");
}

$response = file_get_contents($url);
$response = json_decode($response);
// $response = file_get_contents("https://www.koronavirus.hr/json/?action=podaci_zadnji");
// $response = file_get_contents("podaci.json");

echo json_encode($response, JSON_PRETTY_PRINT);
// print_r($response);

?>