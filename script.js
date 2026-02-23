$(document).ready(function () {
    console.log(" page is loaded");
    let employeeData = [];

    function renderEmployees(data) {
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

    function loadEmployees() {
        $.ajax({
            url: "get.php",
            method: "GET",
            dataType: "json",
            success: function (data) {
                employeeData = data;
                renderEmployees(employeeData);

            }
        });
    };
    $("table tbody").on("click", ".edit-btn", function () {
        let id = $(this).data("id");

        let employee = employeeData.find(emp => emp.id == Number(id));
        if (!employee) return;

        Object.keys(employee).forEach(function (key) {
            $('#editModal').find('[name="' + key + '"]').val(employee[key]);
        });


        var myModal = new bootstrap.Modal(document.getElementById('editModal'));
        myModal.show();
    });

    loadEmployees();

    $("table tbody").on("click", ".del-btn", function () {

        let id = $(this).data("id");

        bootbox.confirm("Are you sure you want to delete this employee?", function (result) {

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
        let employeename = $("#employeename").val();
        let title = $("#title").val();
        let salary = $("#salary").val();
        let datehire = $("#datehire").val();
        console.log("form submitted");
        $.ajax({
            url: "insert.php",
            method: "POST",
            data: {
                employee_name: employeename,
                title: title,
                salary: salary,
                datehire: datehire
            },
            dataType: "json",
            success: function () {
                $("#employeeform")[0].reset();
                loadEmployees();
            },
            error: function (error) {
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
            success: function () {

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

   $("#search").keyup(function(){
        let val=$("#search").val();
        let tolowVal=val.toLowerCase();
        
        if(tolowVal === ""){
            console.log("the data is empty");
            renderEmployees(employeeData);
            return;
        }
        let filteredArray=employeeData.filter(emp => emp.employee_name.toLowerCase().includes(tolowVal));
           
        renderEmployees(filteredArray);
   });

});

