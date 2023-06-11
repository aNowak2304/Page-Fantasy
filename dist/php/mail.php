<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie Page-Fantasy";
$to = "a.nowak2304@gmail.com";
$message = $_POST["msg"];

$txt = "Imię" . $name . "\r\n" . "Email: " . $from . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .="Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status){
    header("Location: /index.html?mail_status=sent");
}else{
    header("Location: /index.html?mail_status=error");
}
