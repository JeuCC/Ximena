$(document).ready(function () {
  $(".flame, .flame2, .flame3").on("click", function () {
    $(".flame, .flame2, .flame3").fadeOut("fast");
    $(".text").animate({ top: "-250px", opacity: 1 }, "fast");



  });
});
