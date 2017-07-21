$(function() {

    function updateScore() {
        $("#pont span").html($(".megvan").length + " / " + $("#postas span").length);
    }

    $("#vege").on("click", function(event) {
        event.preventDefault();

        $("#postas").addClass("vege");
        updateScore();
        $("#pont").show();

        $("#postas span").on("click", function(event) {
            if ($(event.target).is(".megvan")) {
                $(event.target).removeClass("megvan");
            } else {
                $(event.target).addClass("megvan");
            }
            updateScore();
        });

        $("#vege").hide();
    });

    $("#postman-text").on("change", function() {
        if ($("#postman-text").val()) {
            $.get("data/" + $("#postman-text").val() + ".html?v" + (new Date()).getTime(), function(data) {
                $("#postas").removeClass("vege").html(data);
                $("#pont").hide();
                $("#vege").show();
            });
        } else {
            $("#postas").html("");
            $("#pont").hide();
            $("#vege").hide();
        }
    });
});
