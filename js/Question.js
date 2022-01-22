class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Legendary GamerTag Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
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
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("THEgame");
    this.title.position(350, 0);
    this.question.html("Question:- What game starts with ‘C’, and is more than 30 years old? " );
    this.question.position(150, 80);

    this.question.html("Question:- What game starts with ‘M’, and is more than 10 years old? " );
    this.question.position(150, 100);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 120);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 140);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 160);
    this.option4.html("4: Example" );
    this.option4.position(150, 180);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(360, 300);

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

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
