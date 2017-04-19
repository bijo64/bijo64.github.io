<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Сообщение от пользователя: $name";

$result = mail('2085@inbox.ru', 'Тема письма', $message);


echo json_decode(array(
	'status' => $result
	));