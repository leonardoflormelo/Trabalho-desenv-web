<?php
$preco = 100;
$desconto = 15;
$final = $preco - $desconto;

if ($final >= 80 && $final <= 100) {
    echo 'Preço dentro da faixa.';
}
echo 'Total: R$ ' . $final;
// + calcula; . junta textos.
