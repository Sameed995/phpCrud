<?php 
    require 'database.php';

    $sql="SELECT * FROM employees ORDER BY ID ASC";

    $result=$conn->query($sql);

    $employees=[];

    if($result->num_rows > 0 ){
        while($row=$result->fetch_assoc()){
            $employees[]=$row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($employees);
?>