<?php

    require'database.php';

    if(!isset($_POST['id'])){
        http_response_code(400);
        echo json_encode(["error"=>"ID Is required"]);
        exit;
    }

    $id=$_POST['id'];

    $sql="DELETE FROM employees WHERE id=?";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode([
            'success'=>true,
            'id'=>$id,
        ]);
        }   
        else {
            http_response_code(500);
            echo json_encode(["error"=> $stmt->error]);
            
            }
            $stmt->close();
    }
    else{
        http_response_code(500);
        echo json_encode(["error"=>$conn->error]);
    }

    $conn->close();
?>

