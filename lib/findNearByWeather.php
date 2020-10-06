<?php

$url = "http://api.geonames.org/findNearByWeatherJSON?formatted=true&lat=".$_REQUEST['lat']."&lng=".$_REQUEST['lng']."&username=".$_REQUEST['username']."&style=full";

$my_cURL = curl_init();
curl_setopt($my_cURL, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($my_cURL, CURLOPT_RETURNTRANSFER, true);
curl_setopt($my_cURL, CURLOPT_URL,$url);



	$result=curl_exec($my_cURL);

	curl_close($my_cURL);

	$decode = json_decode($result,true);	

	$output['data'] = $decode['weatherObservation'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 




?>