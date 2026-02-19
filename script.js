$(document).ready(function () {
    console.log(" page is loaded");

    function loadEmployees() {
        $.ajax({
            url: "get.php",
            method: "GET",
            dataType: "json",
            success: function (data) {
                let tbody = $("table tbody");
                tbody.empty();
                data.forEach(function (emp) {
                    let row = `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.employee_name}</td>
                        <td>${emp.title}</td>
                        <td>${emp.salary}</td>
                        <td>${emp.hire_date}</td>
                        <td>
                        <button class="btn btn-primary edit-btn" type="button" data-id="${emp.id}">Edit</button>
                        </td>
                        <td>
                        <button class="btn btn-danger del-btn" type="button" data-id="${emp.id}" >Delete</button>
                        </td>
                    </tr>
                    `;
                    tbody.append(row);
                });
            }
        });
    };
    $("table tbody").on("click", ".edit-btn", function () {
        // let id = $(this).data("id");
        // console.log("Edit button clicked for ID:", id);
        let row = $(this).closest("tr");
        let id = $(this).data("id");
        let name = row.find("td:eq(1)").text();
        let title = row.find("td:eq(2)").text();
        let salary = row.find("td:eq(3)").text();
        let hireDate = row.find("td:eq(4)").text();

        $("#modalId").val(id);
        $("#modalName").val(name);
        $("#modalTitle").val(title);
        $("#modalSalary").val(salary);
        $("#modalHiredate").val(hireDate);

        var myModal = new bootstrap.Modal(document.getElementById('editModal'));
        myModal.show();
    });
    $("table tbody").on("click", ".del-btn", function () {

    let id = $(this).data("id");

    bootbox.confirm("Are you sure you want to delete this employee?", function(result) {

        if (result) {

            $.ajax({
                url: "delete.php",
                method: "POST",
                dataType: "json",
                data: { id: id },
                success: function (response) {
                    loadEmployees();

                    bootbox.alert("Employee deleted successfully!");

                },
                error: function (xhr) {
                    console.log(xhr.responseText);
                    bootbox.alert("Delete failed.");
                }
            });

        }

    });

});



    loadEmployees();

    $("#employeeform").submit(function (e) {
        e.preventDefault();
        // let id=$("#employeeid").val();
        let employeename = $("#employeename").val();
        let title = $("#title").val();
        let salary = $("#salary").val();
        let datehire = $("#datehire").val();
        // console.log(id,employeename,title,salary,datehire);
        console.log("form submitted");
        $.ajax({
            url: "insert.php",
            method: "POST",
            data: {
                // id:id,
                employee_name: employeename,
                title: title,
                salary: salary,
                datehire: datehire
            },
            dataType: "json",
            success: function (newEmployee) {
                let row = `
                <tr>
                    <td>${newEmployee.id}</td>
                    <td>${newEmployee.employee_name}</td>
                    <td>${newEmployee.title}</td>
                    <td>${newEmployee.salary}</td>
                    <td>${newEmployee.hire_date}</td>
                    <td>
                    <button class="btn btn-primary edit-btn" type="button"  data-id="${newEmployee.id}">Edit</button>
                    </td>
                    <td>
                    <button class="btn btn-danger del-btn" type="button" data-id="${newEmployee.id}">Delete</button>
                    </td>
                </tr>
                `;
                $("table tbody").append(row);
                $("#employeeform")[0].reset();
            },
            error: function (xhr, status, error) {
                console.error("Error inserting employees:", error);
            }
        });
    });

    $('#save').on('click', function (e) {

        e.preventDefault();

        let id = $('#modalId').val();
        let employee_name = $('#modalName').val();
        let title = $('#modalTitle').val();
        let salary = $('#modalSalary').val();
        let datehire = $('#modalHiredate').val();

        $.ajax({
            url: 'update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                id: id,
                employee_name: employee_name,
                title: title,
                salary: salary,
                datehire: datehire
            },
            success: function (response) {

                let row = $('#row-' + response.id);
                row.find('#employee_name').text(response.employee_name);
                row.find('#title').text(response.title);
                row.find('#salary').text(response.salary);
                row.find('#hire_date').text(response.hire_date);

                bootbox.alert("Updated successfully!");

                loadEmployees();
                $('#editModal').modal('hide');
            },
            error: function (xhr) {
                console.log(xhr.responseText);
                bootbox.alert("Update failed.");
            }
        });

    });


});

