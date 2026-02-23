<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
</head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">


<style>
    * {
        margin: 1px;
        padding: 1px;
    }
</style>

<body>
    <form id="employeeform">
        <!-- <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">ID</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" id="employeeid">
        </div> -->
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name</label>
            <input type="text" class="form-control" name="employeename" id="employeename">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Title(Designation)</label>
            <input type="text" class="form-control" id="title" name="title">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Salary</label>
            <input type="text" class="form-control" id="salary" name="salary">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Date Hired On: </label>
            <input type="text" class="form-control" id="datehire" name="hireddate">
        </div>
        <button type="submit" class="btn btn-primary" name="submit" id="btn">Submit</button>
    </form>
    <br><br>

    <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search">
            <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button> -->
        </form>
    </nav>

     <br><br>


    <table class="table">

        <thead>
            <tr>
                <th scope="col" class="id">Id</th>
                <th scope="col" class="employeeName">Employee Name</th>
                <th scope="col" class="title">Title</th>
                <th scope="col" class="salary">Salary</th>
                <th scope="col" class="hiredate">Hire Date</th>
            </tr>
        </thead>
        <tbody></tbody>
        <!-- <button class="btn btn-primary" type="submit">Edit</button> -->
    </table>
    <div class="modal" tabindex="-1" id="editModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" id="modalId" name="id">
                    <input type="text" id="modalName" name="employee_name">
                    <input type="text" id="modalTitle" name="title">
                    <input type="text" id="modalSalary" name="salary">
                    <input type="text" id="modalHiredate" name="hire_date">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="save">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/6.0.4/bootbox.min.js"></script>
<script src="script.js"></script>

</html>


<?php

?>