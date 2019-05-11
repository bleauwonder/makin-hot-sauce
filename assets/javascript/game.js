

// JavaScript function that wraps everything
$(document).ready(function() {
//    setupGame();
    // // Link for Game Song
    // var audioElement = document.createElement("audio");
    // audioElement.setAttribute("src", "/assets/Our-Mountain__Looping.mp3");

    // // Music Button
    // $(".music-button").on("click", function() {
    //   audioElement.play();
    // });
    // $(".pause-button").on("click", function() {
    //   audioElement.pause();
    // });

    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    function randomNum(max, min) {
        var result = Math.floor(Math.random() * (max - min + 1)) + min; 
        return result;
    }

    var compRandom = randomNum(120, 19);
    assignNumbersToCrystals();
    console.log(compRandom);
    $("#random-counter").html(compRandom);
    $("#total-counter").html(userTotal);
    $(".crystal-btn").on("click", function(e) {
        var value = parseInt(e.target.value);
        console.log(value)
        userTotal += value;
        $("#total-counter").html(userTotal);

      if (didUserWin(compRandom, userTotal)) {
        wins+=1;
        $("#win-counter").html(wins);
        restartGame();
      }
      else if (userTotal > compRandom) {
        losses+=1;
        console.log("userTotal", userTotal, "compRandom", compRandom, "losses", losses)
        $("#loss-counter").html(losses);
        restartGame();
      }
    })

// function for crystals, calling back randomNum and sending it to userTotal


// set up game

function assignNumbersToCrystals() {
    var array = ['#titanium-quartz', "#blue-quartz", "#quartz", "#tanzanite"]
for(var i = 0; i < array.length; i++) {
    var randnum = randomNum(12, 1)
    $(array[i]).val(randnum)
}

}
function restartGame() {
    userTotal = 0;
    compRandom = randomNum(120, 19);
    assignNumbersToCrystals();
    $("#random-counter").html(compRandom);
    $("#total-counter").html(userTotal);
}

function didUserWin(compRandom, userTotal) {
    if (userTotal === compRandom) {
        return true;
     } 
    else if (userTotal > compRandom) {
        
        return false;
    }
    else {
        return false;
    }
}


})

