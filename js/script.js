$(document).ready(function(){
  $( "#btn-cron" ).click(function() {
    $( "#img-cron" ).slideToggle( "slow", function() {
    });
  });
  $( "#icon-what" ).click(function() {
    $( "#img-tel" ).slideToggle( "slow", function() {
    });
  });
  RPGJS.defines({
    canvas: "canvas_id"
}).ready(function() {

    RPGJS.Scene.map();

});
});
