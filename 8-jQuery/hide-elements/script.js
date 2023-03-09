$(document).ready(function () {
    $('#btn1').click(function () {
        $("section p:nth-child(2)").hide();
    });

    $('#btn2').click(function () {
        $("span.my-span").hide();
    });

    $('#btn3').click(function () {
        $("input[type='email']").hide();
    });

    $('#btn4').click(function () {
        $("[checked]").hide();
    });

    $('#btn5').click(function () {
        $("#my-div > div > span").hide();
    });
});
