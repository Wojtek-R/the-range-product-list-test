<?php
	header('Access-Control-Allow-Origin: http://localhost:5173');
	header('Access-Control-Allow-Methods: GET');
	header('Content-Type: application/json');

	$json = file_get_contents(__DIR__ . '/../data/products.json');
	$products = json_decode($json, true);

	echo json_encode($products);
?>