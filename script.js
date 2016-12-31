$(document).ready(function(){
  $("#answer").hide();

  var magic8BallAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Definitely", "You may rely on it", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict right now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

  var getAnswer = function() {
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * magic8BallAnswers.length;
    var randomIndex = Math.floor(randomNumberArray);
    return magic8BallAnswers[randomIndex];
  };

  $("#questionButton").click(function(){
    $("#answer").hide();
    $("#answer").text(getAnswer());

    var askQuestion = prompt("Ask a Yes/No question");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
    $("#questionButton").text("ASK AGAIN");
  });
});
