let currentQuestion = 0;
let correctAnswerTally = 0;

// Quiz Quesions 
let quizzQuestions = [   
      
    //Question 1
  {
    question: 'What planet is Chewbacca from?',
    answers: [
      "Tatooine",
      "Coruscant",
      "Ryloth",
      "Kashyyyk",
    ],
    correctAnswer: 3,
    picture: 'src="imgs/chewie.jpeg" alt="Chewbacca"'    
  
  },
    //Question 2
  {
    question: 'What make and model is the Millennium Falcon?',
    answers: [
      "Corellian YT-1300",
      "Sienar Systems TIE",
      "Kuat Victory Class",
      "Corellian CR-90 Corvette",
    ],
    correctAnswer: 0,
    picture: 'src="imgs/falcon.png" alt="Millennium Falcon"'
  },
      //Question 3
  {
    question: 'What race is Boba Fett?',
    answers: [
      "Human",
      "Mandalorian",
      "Sith",
      "Chiss",
    ],
    correctAnswer: 1,
    picture: 'class="pic" src="imgs/boba-fett.jpg" alt="Boba Fett"'
  },
      //Question 4
   {
    question: 'What model is Han Solo\'s blaster pistol?',
    answers: [
      "DL-44",
      "Sienar Systems TIE",
      "Kuat Victory Class",
      "Corellian CR-90 Corvette",
    ],
    correctAnswer: 0,
    picture: 'src="imgs/han-blaster.jpg" alt="Han Blaster"'
  },
      //Question 5
   {
    question: 'These giant creatures inhabit some caves on Tatooine and are often hunted for sport.',
    answers: [
      "Wampas",
      "Dewbacks",
      "Krayt Dragons",
      "Rondos",
    ],
    correctAnswer: 2,
    picture: 'src="imgs/beast.jpg" alt="Tatooine Creature"'
  },
      //Question 6
   {
    question: 'Originally manufactured by the Czerka Corportation, this series of droid is used for protocal AND assassination.',
    answers: [
      "C - Series",
      "R - Series",
      "BX - Series",
      "HK - Series",
    ],
    correctAnswer: 3,
    picture: 'src="imgs/droid-1.jpg" alt="assassination and protocol droid"'
  },
      //Question 7
   {
    question: 'Chancellor Palpatine, AKA, The Emporer and Darth Sidious, was apprentice to...',
    answers: [
      "Darth Revan",
      "Darth Plagueis",
      "Darth Tyrannus",
      "Darth Malak",
    ],
    correctAnswer: 1,
    picture: 'src="imgs/Palpatine.jpg" alt="Palpatine and Master"'
  }, 
      //Question 8
   {
    question: 'Han Solo obtaind the Millennium Falcon by...',
    answers: [
      "Winning it in a card game",
      "Stealing it",
      "Inheriting it",
      "Buying it brand new off the lot",
    ],
    correctAnswer: 0,
    picture: 'src="imgs/han-shrug.jpg" alt="Han Solo"'
  }, 
      //Question 9
   {
    question: 'What planet is the homeworld to the Sith?',
    answers: [
      "Taris",
      "Alderaan",
      "Tython",
      "Korriban",
    ],
    correctAnswer: 3,
    picture: 'src="imgs/sith-planet.png" alt="Sith Planet"'
  }, 
      //Question 10
   {
    question: 'Darth Vader hired this assassin droid alongside Boba Fett and others to track down the Millennium Falcon...',
    answers: [
      "Bossk",
      "Zam Wessell",
      "Dengar",
      "IG-88",
    ],
    correctAnswer: 3,
    picture: 'src="imgs/droid-2.jpg" alt="Hired Assassin"'
  },                        
];

//HTML Classes
const START_PAGE_CLASS = '.start-here';
const FINISH_PAGE_CLASS = '.finish-here';
const SCORE_TEXT_CLASS = ".score-message";
const QUIZ_PAGE = '.quiz-here';
const QUESTION_CLASS = '.question';
const QUESTION_ANSWER_CLASS = '.answerOption';
const QUESTION_ANSWER_TEXT_CLASS = '.answerOptionText';
const REMAINING_QUESTION_TEXT = '.remaining-text';
const START_QUIZ_BUTTON = '.start-btn';
const NEXT_BUTTON = '.next-btn';
const FINISH_BUTTON = '.finish-btn';
const PICTURE_CONTAINER = '.pic-box';
  
//Content Generators
const quizQuestionGenerator = `<h1 class='quizQuestion'>${quizzQuestions[currentQuestion].question}</h1>`;
const quizPictureGenerator = `<img class="pic"${quizzQuestions[currentQuestion].picture}>`; 

//Renders the quiz for each new question
let renderQuiz = () => {
  $('#quiz').empty();
  $('.pic-box').empty();
  $('#quiz').append(`<h3 class='quizQuestion'></h3>`); 
  showRemainingQuestions();
}

//Appends the question to the form
let insertQuestions = () => {
  $('.quizQuestion').append(quizzQuestions[currentQuestion].question);
}

//Inserts answers into the form for each question
let insertAnswers = () => {
    //appending all the answers to html
  let Allanswers = quizzQuestions[currentQuestion].answers;
  // Counter to increase value by in each answer, used for validation
  let valueMaker = 0;
    Allanswers.forEach(function(answer) {
      $('#quiz').append(`<label class="answerOption answerOptionJs"> 
      <input type="radio" name="answer" for="answerOption" required="required" value="${valueMaker++}"> 
      <span class=".answerOptionText"> ${answer} </span> 
      </label>`);       
    });  
}

//Inserts pictures into the DOM for each question
let insertPictures = () => {
  $(PICTURE_CONTAINER).append(`<img class="pic"${quizzQuestions[currentQuestion].picture}>`);  
}
//Refreshes the DOM with a new question, answers, and picture. 
let newQuestion = () => {
  renderQuiz();
  insertQuestions();
  insertAnswers();
  insertPictures();
}
    
//Find number of remaining questions
let remainingQuestions = () => {
  $(REMAINING_QUESTION_TEXT).empty();
  let totalQuestions = quizzQuestions.length;
  if (totalQuestions - currentQuestion === quizzQuestions.length) {
    return `${quizzQuestions.length} Questions Remain`
  }
  else if (totalQuestions - currentQuestion === 1) {
    // $("input[name='next-btn']").prop("type", "submit");
    //console.log(allInputs.attr('type'));
    return 'Final Question!';
  }
  else {
    return `${(totalQuestions - currentQuestion)} Questions Remain`;
  }
}

//Display number of remaining questions
let showRemainingQuestions = () => {
  $(REMAINING_QUESTION_TEXT).append(remainingQuestions());
}

let totalScore = () => {
  $('.score').empty();
  $('.score').append(`Your score is <p> ${correctAnswerTally} / 10</p>`)
}

let finishQuiz = () => {
  $(QUIZ_PAGE).hide();
  if (correctAnswerTally < (quizzQuestions.length - 4)) {
    $(SCORE_TEXT_CLASS).append(`Please return to the Archives Padawan.<p> You scored ${correctAnswerTally} / 10 </p> 
    <p>Your training is far from complete.</p>`)
  }
  else if (correctAnswerTally > (quizzQuestions.length - 4) && (correctAnswerTally < quizzQuestions.length - 1)) {
    $(SCORE_TEXT_CLASS).append(`You are almost ready young Padawan. <p> You scored ${correctAnswerTally} / 10 </p>
    <p>A few more study sessions at the archives and your training will be complete.</p> `)   
  }
  else {
    $(SCORE_TEXT_CLASS).append(`Excellent work, Padawan! <p> You scored ${correctAnswerTally} / 10! </p> 
    <p>Your training is complete, congratulations!</p> `)   
  }   
  $(FINISH_PAGE_CLASS).show();   
}

$(function() {
  $(QUIZ_PAGE).hide();
  $(FINISH_PAGE_CLASS).hide();
  renderQuiz();      
  insertQuestions(); 
  insertAnswers();
  insertPictures();

  // Click Handlers
  $(NEXT_BUTTON).click(function(event) {
    let unansweredQuestions = (quizzQuestions.length - currentQuestion);
    currentQuestion++;
    event.preventDefault();
    let chosenAnswer = Number($("input:radio[name='answer']:checked").val());
    if (isNaN(chosenAnswer)) {
      currentQuestion--;
      alert('Do. Or do not. Either way, you have no answer, please make a selection.');
    } 
    else if (currentQuestion <= (quizzQuestions.length - 2)) {
     // question is not the last, continue to next question  
      newQuestion(); 
    }
    else if (currentQuestion === (quizzQuestions.length - 1)) {
      // question is the last, change the button text
      newQuestion(); 
      $(NEXT_BUTTON).text('finish');       
    }
    else {
      //after last question, go to finish page
      finishQuiz();
      $(NEXT_BUTTON).text('next'); 
    }
  });

  $(START_QUIZ_BUTTON).click(function(event) {
    event.preventDefault();
    $(START_PAGE_CLASS).hide();
    $(QUIZ_PAGE).show();     
  }); 

  $(FINISH_BUTTON).click(function(event) {
    currentQuestion = 0;
    $(FINISH_PAGE_CLASS).hide();
    renderQuiz();
    insertQuestions(); 
    insertAnswers();
    insertPictures();
    $('.score').append(`Your score is <p> ${correctAnswerTally} / 10</p>`)
    $(START_PAGE_CLASS).show();
  })
  //When clicking an answer option, validate the question, don't allow for another choice
  $('#quiz').on('click', 'input:radio[name=answer]', function(event){
    $("input[type=radio]").attr('disabled', true);  
    $('input').each(function(){
      $(this).parent().removeClass('answerOptionJs');
    })
    let chosenAnswer = Number($("input:radio[name='answer']:checked").val());  
    if (chosenAnswer === quizzQuestions[currentQuestion].correctAnswer) {
      $(this).parent().addClass('right');  
      correctAnswerTally++; 
      totalScore();     
    }
    else {
      $(this).parent().addClass('wrong');
    }
  });
});
