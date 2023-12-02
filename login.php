<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    if ($username === "admin" && $password === "123") {
        echo "<p>Login bem-sucedido para o usuário: $username</p>";
    } else {
        echo "<p>Login falhou. Verifique suas credenciais.</p>";
    }
}
?>