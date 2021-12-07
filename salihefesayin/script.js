$(document).ready(() => {
    var alarm = document.getElementById("alarm");
    $("#first-background-container").delay(1500).fadeOut(1000); /* delay 1500*/
    $("#home-container").delay(2000).fadeIn(3500); /* delay 2000*/

   $("#start-btn").click(function(){
    $("#game-container").fadeIn(400).delay(3000); /*delay 3000*/
    $("#game-text").text("Day 1");
    alarm.play()
    $("#day1-container").delay(3800).fadeIn(400) /*delay 3800*/
   });
   $("#tutorial-btn").click(function(){
    $("#tutorial-container").fadeIn(400)
   });
   $("#tt-exit").click(function(){
    $("#tutorial-container").fadeOut(400)
   });
   $("#alarm-pause").click(function(){
    alarm.pause();
    $(this).hide();
    $("#day1-main").show();
   });
   $("#chief").click(function(){
    alert("MERHABA BEN VOLKAN KONAK")
   });

   $("#answer").click(function(){
    $("#question").text("You got out of bed and you're putting on your clothes.")
    $(this).text("Leave the house and go to the garage.")
    $("#clock").text("07:05");

    $("#answer").click(function(){
        $("#question").text("You came to the garage.")
        $(this).text("Get in your car and drive to the department.")
        $("#clock").text("07:10")

        $("#answer").click(function(){
            var car_sound = document.getElementById("car-sound")
            car_sound.play();
            $("#day1-main").fadeOut(500)
            $("#black-effect").fadeIn(1000).text("You're driving towards the department...").delay(5000).fadeOut(600) /*delay 5000 */
            $("#day1-second").delay(5300).fadeIn(1000) /*delay 5300 */
        });
        $("#answer-2").click(function(){
            $("#chief").show()
            $("#clock-2").text("08:00")
            $("#question-2").animate({
                top: '48%',
                left: '5%'
            }).text("Welcome Officer Weston, I'm Police Chief Watkins.")
        $(this).animate({
            top: "80%",
            left: "5%"
        }).text("Next")
            $("#answer-2").click(function(){
            $("#question-2").html("You have just been appointed here"+ "<br>" + "and I have high expectations for you.")
                $("#answer-2").click(function(){
                $("#question-2").text("Come on, get to work now.")
                $(this).text("Yes sir!")
                    $("#answer-2").click(function(){
                    $("#day1-second").fadeOut(500)
                    $("#black-effect").fadeIn(1500).text("To be continued...")
                     });
                });
            });
        });
    });
   });
});