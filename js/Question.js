class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What has many keys but can’t open a single lock? " );
    this.question.position(230, 200);
    this.option1.html("1: key " );
    this.option1.position(280, 280);
    this.option2.html("2: piano" );
    this.option2.position(280, 300);
    this.option3.html("3: violin " );
    this.option3.position(280, 320);
    this.option4.html("4: guitar" );
    this.option4.position(280, 340);

    this.input1.position(480, 400);
    this.input2.position(480, 450);
    this.button.position(500, 500);

    this.button.style('background','red');
    this.input1.style('background','#26f7fd');
    this.input2.style('background','#26f7fd');
    
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
