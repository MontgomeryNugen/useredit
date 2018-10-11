$().ready(() => {

    $.getJSON("http://localhost:8080/Users/Get?id=2")
        .then(function(users) {
            console.log(users);
            render(users);
        });   
});

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