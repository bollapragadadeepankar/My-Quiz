class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    question.hide();
    
    //write code to change the background color here
    //background.change("yellow");
    //document.body.style.background = "yellow";
    

    //write code to show a heading for showing the result of Quiz
    push();
    textSize(20);
    textFont("algerian");
    fill("red");
    text("Result of the Quiz.......",330,200);
    pop();

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
       var displayAnswers = 230
        push();
        fill("blue");
        textSize(20);
        text("*NOTE : Contestant who answered correct are highlighted in green Color",110,230);
        pop();
        for(var plr in allContestants){
          var correctAns = "2";
          if(correctAns === allContestants[plr].answer){
              // stroke("white");
              // strokeWeight(1);
               textFont("algerian");
               textSize(20);
               fill("lightgreen");
          }else {
               //stroke("white");
               //strokeWeight(1);
               textFont("algerian");
               textSize(20);
               fill("red");
          }
          displayAnswers += 30;
          text(allContestants[plr].name+" : "+allContestants[plr].answer, 250,displayAnswers);
        }
    }

    
    
  }

}
