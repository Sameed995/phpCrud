<?php
require 'database.php';

if(!isset($_POST['employee_name'], $_POST['title'], $_POST['salary'], $_POST['datehire'])){
    die("All fields are required");
}

// $id = $_POST['
$employeename = $_POST['employee_name'];
$title = $_POST['title'];
$salary = $_POST['salary'];
$datehire = $_POST['datehire'];


$sql = "INSERT INTO employees(employee_name,title,salary,hire_date)VALUES (?,?,?,?)";

if ($stmt = $conn->prepare($sql)) {
    $stmt->bind_param("ssis", $employeename, $title, $salary, $datehire);
    if ($stmt->execute()) {
        $id=$stmt->insert_id ?? $conn->insert_id;
        echo json_encode([
            'id'=>$id,
            'employee_name'=>$employeename,
            'title'=>$title,
            'salary'=>$salary,
            'hire_date'=>$datehire

        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error"=> $stmt->error]);

    }
}else{
    http_response_code(500);
    echo json_encode(["error"=>$conn->error]);
}

$stmt->close();
$conn->close();

?>