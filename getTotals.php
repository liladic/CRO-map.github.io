<?php
$response = file_get_contents("https://www.koronavirus.hr/json/?action=podaci_zadnji");
print_r($response);
?>