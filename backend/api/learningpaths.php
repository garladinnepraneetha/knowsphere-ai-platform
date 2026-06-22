<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$paths = [
    [
        "id" => 1,
        "title" => "Customer Excellence Path",
        "progress" => 75
    ],
    [
        "id" => 2,
        "title" => "Sales Leadership Path",
        "progress" => 50
    ],
    [
        "id" => 3,
        "title" => "Operations Excellence Path",
        "progress" => 90
    ]
];

echo json_encode($paths);