$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#clickhere").click(function(){
    $("#walrus2").fadeToggle("slow");
    $(this).val($(this).val() == "Click Here!" ? "Click Here Again!": "Click Here!");
  })

  $()
});