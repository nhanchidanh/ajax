<?php
//Tinh toan
$num_order = $_POST['num_order'];
$price = $_POST['price'];
$total = $price * $num_order;
$result = array(
    'price' => $price,
    'num_order' => $num_order,
    'total' => $total
);
// Xuat thi echo 
echo json_encode($result);