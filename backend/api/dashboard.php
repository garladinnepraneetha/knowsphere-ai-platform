<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

echo json_encode([
    "experts" => 120,
    "articles" => 450,
    "communities" => 32,
    "learningPaths" => 18
]);