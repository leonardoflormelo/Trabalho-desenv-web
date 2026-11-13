<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Use o formulário.');
}

$nome = trim($_POST['nome'] ?? '');
if ($nome === '') {
    exit('O nome é obrigatório.');
}

$seguro = htmlspecialchars($nome, ENT_QUOTES, 'UTF-8');
echo '<h1>Olá, ' . $seguro . '!</h1>';
