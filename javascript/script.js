
// tooltip code
// $(document).ready(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

// carousel div button code for play and pause
// $(document).ready(function () {
//   $("#mycarousel").carousel({ interval: 500 });
//   $("#btn-pause").click(function () {
//     $("#mycarousel").carousel('pause');
//   });
//   $("#btn-play").click(function () {
//     $("#mycarousel").carousel('cycle');
//   })
// });

//carousel play and pause advance code

$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 1000 });

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });

});



$('#loginModel').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});


$('#login').click(function () {
    $('#loginModal').modal();
});
$('.dismissLogin').click(function () {
    $('#loginModal').modal('hide');
});
$('.dismissReserve').click(function () {
    $('#reserve').modal('hide');
});
$('#reservation').click(function () {
    $('#reserve').modal('show');
});
