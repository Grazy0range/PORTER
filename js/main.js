new WOW().init();

$(document).ready(function () {
  $(".burger__menu, .burger_link").click(function (event) {
    $(".burger__menu, nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
