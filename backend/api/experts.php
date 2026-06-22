<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$experts = [
    [
        "id" => 1,
        "name" => "Sarah Johnson",
        "expertise" => "Customer Success",
        "experience" => "12 Years"
    ],
    [
        "id" => 2,
        "name" => "David Miller",
        "expertise" => "Operations",
        "experience" => "8 Years"
    ],
    [
        "id" => 3,
        "name" => "John Smith",
        "expertise" => "Sales Strategy",
        "experience" => "10 Years"
    ]
];

echo json_encode($experts);