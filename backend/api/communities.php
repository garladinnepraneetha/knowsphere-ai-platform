<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$communities = [
    [
        "id" => 1,
        "name" => "Customer Success Forum",
        "description" => "Discuss customer retention and engagement",
        "members" => 120
    ],
    [
        "id" => 2,
        "name" => "Sales Excellence Forum",
        "description" => "Sales strategies and best practices",
        "members" => 95
    ]
];

echo json_encode($communities);