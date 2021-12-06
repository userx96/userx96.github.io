$(document).ready(() => {
    var alarm = document.getElementById("alarm");
    $("#first-background-container").delay(1500).fadeOut(1000); /* delay 1500*/
    $("#home-container").delay(2000).fadeIn(3500); /* delay 2000*/

   $("#start-btn").click(function(){
    $("#game-container").fadeIn(400).delay(3000);
    $("#game-text").text("Day 1");
    alarm.play()
    $("#day1-container").delay(3800).fadeIn(400)
   });
   $("#tutorial-btn").click(function(){
    $("#tutorial-container").fadeIn(400)
   });
   $("#tt-exit").click(function(){
    $("#tutorial-container").fadeOut(400)
   });
   $("#alarm-pause").click(function(){
    alarm.pause();
   });
});