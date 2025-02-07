$(document).ready(function() {
    $("#usersGrid").css("opacity", "0");

    setTimeout(() => {
        $("#spinLoader").fadeOut(100);

        $.getJSON("https://gorest.co.in/public/v2/users", function(data) {
            let usersGrid = $("#usersGrid");
            data.forEach(user => {
                let userCard = $("<div>").addClass("user-card " + user.status).text(user.name);
                usersGrid.append(userCard);
            });
            usersGrid.fadeTo(500, 1);
        });
    }, 1000);
});
