$(document).ready(function () {

  $(".buy-game__item").click(function () {
      $(this)
          .addClass("active")
          .removeClass("disable");
      $(this)
          .siblings()
          .removeClass("active")
          .addClass("disable");
      $(".buy-game__tab")
          .css("display", "none")
          .eq($(this).index())
          .css("display", "block");
  });
});

