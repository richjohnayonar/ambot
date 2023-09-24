<?php
    $username = $_POST['username'];
    $email = $_POST['email'];


    $conn = new mysqli('localhost','root','mydb');
    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    }else {
        $stmt = $conn->prepare('insert into registration form(username, email) values(?, ?)');
        $stmt->bind_param('ss', $username, $email);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
?>