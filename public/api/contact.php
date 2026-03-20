<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$name = htmlspecialchars($input['name'] ?? '');
$email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$company = htmlspecialchars($input['company'] ?? '');
$subject = htmlspecialchars($input['subject'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Vul alle verplichte velden in.']);
    exit;
}

$to = 'vincent@vibo-it.be';
$mail_subject = "VIBO Contact: $subject - $name";
$body = "Nieuw contactbericht via vibo-it.be\n\n";
$body .= "Naam: $name\n";
$body .= "E-mail: $email\n";
$body .= "Bedrijf: $company\n";
$body .= "Onderwerp: $subject\n\n";
$body .= "Bericht:\n$message\n";

$headers = "From: noreply@aidev.be\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: VIBO-Contact-Form\r\n";

$sent = mail($to, $mail_subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Bericht verzonden']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Kon e-mail niet verzenden']);
}
