<?php
include_once('bd.php');

$nome = $_POST['nome_usu'];
$email = $_POST['email_usu'];
$senha = $_POST['senha_usu'];
$confi_senha = $_POST['conf_usu'];


$sql = "INSERT INTO `cadastro_usu`(`nome_usu`, `email_usu`, `senha_usu`, `confirma_usu`) 
VALUES ($nome,$email,$senha,$confi_senha)";


if(mysqli_query($conn, $sql)){

}else{
    echo "Error";
}

  
$conn->close();
?>