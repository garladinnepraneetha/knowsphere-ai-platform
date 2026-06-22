<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$articles = [
    [
        "id" => 1,
        "title" => "Customer Success Playbook",
        "category" => "Best Practice",
        "author" => "Sarah Johnson",
        "content" => "This guide explains customer retention, customer onboarding, engagement strategies, and customer success metrics."
    ],
    [
        "id" => 2,
        "title" => "Sales Excellence Guide",
        "category" => "Training",
        "author" => "John Smith",
        "content" => "Learn prospecting, objection handling, negotiation, pipeline management, and closing techniques."
    ],
    [
        "id" => 3,
        "title" => "Operations SOP",
        "category" => "Operations",
        "author" => "David Miller",
        "content" => "Standard operating procedures for operational excellence, efficiency improvement, and quality assurance."
    ]
];

echo json_encode($articles);