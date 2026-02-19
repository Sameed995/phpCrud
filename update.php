<?php 
    require 'database.php';

   if(!isset($_POST['id'],$_POST['employee_name'], $_POST['title'], $_POST['salary'], $_POST['datehire'])){
        die("All fields are required"); 
    }
    $id=$_POST['id'];
    $employeename = $_POST['employee_name'];
    $title = $_POST['title'];
    $salary = $_POST['salary'];
    $datehire = $_POST['datehire'];

    $sql="UPDATE employees SET employee_name=?,title=?,salary=?,hire_date=? WHERE id=?";


    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssisi", $employeename, $title, $salary, $datehire, $id);

    if ($stmt->execute()) {
        echo json_encode([
            'id'=>$id,
            'employee_name'=>$employeename,
            'title'=>$title,
            'salary'=>$salary,
            'hire_date'=>$datehire

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