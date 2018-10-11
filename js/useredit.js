var url = "http://localhost:8080/Users/";

$().ready(() => {

    $.getJSON("http://localhost:8080/Users/Get?id=2")
        .then(function (users) {
            console.log(users);
            render(users);
        });
});

$("#getuser").click(() => {
    getUserByPrimaryKey($("#userid").val())
});
$("#save").click(() => {
    updateUser();
});

function updateUser() {
    var id = $("#pid").val();
    var username = $("#pfname").val();
    var password = $("#plname").val();
    var firstname = $("#pusername").val();
    var lastname = $("#ppassword").val();
    var phone = $("#pphone").val();
    var email = $("#pemail").val();
    var reviewer = $("#previewer").val();
    var admin = $("#padmin").val();
    
    var user = {
        id: id,
        userName: username,
        password: password,
        firstName: firstname,
        lastName: lastname,
        phoneNumber: phone,
        email: email,
        reviewer: reviewer,
        admin: admin
    }

    $.post(url + "Change", user)
        .then((resp) => {
            console.log(resp);
        });
}

function getUserByPrimaryKey(id) {
    console.log("getUserByPrimaryKey()");
    $.getJSON(url + "Get/" + id)
        .then((resp) => {
            render(resp.data);
        });
}

function render(users) {
    $("#pid").val(users.id);
    $("#pfname").val(users.firstName);
    $("#plname").val(users.lastName);
    $("#pusername").val(users.userName);
    $("#ppassword").val(users.password);
    $("#pphone").val(users.phoneNumber);
    $("#pemail").val(users.email);
    $("#previewer").prop("checked", users.reviewer);
    $("#padmin").prop("checked", users.admin);
}