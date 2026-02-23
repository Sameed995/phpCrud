<?php 
    $servername="localhost";
    $username="sameed";
    $password="yourpassword";
    $dbname="crud";


    $conn=new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
        die("Connection Failed: ".$conn->connect_error);
    }
?>