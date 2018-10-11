$().ready(() => {

    $.getJSON("http://localhost:8080/Users/Get?id=1")
        .then(function(users) {
            console.log(users);
            render(users);
        });   
});

function render(users) {
    $("#pid").val(users.id);
    $("#pname").val(users.firstName + " " + users.lastName);
    $("#pusername").val(users.userName);
    $("#pphone").val(users.phoneNumber);
    $("#pemail").val(users.email);
    $("#previewer").prop("checked", users.reviewer);
    $("#padmin").prop("checked", users.admin);
}