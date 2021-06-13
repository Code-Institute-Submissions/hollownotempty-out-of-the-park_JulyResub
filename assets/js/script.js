let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answers-container');
let nextButton = document.getElementById('next-button');
let finishButton = document.getElementById('finish-button');
let fullGame = document.getElementById('game');
let gameContainer = document.getElementById('container');
let navButtons = document.getElementById('bottom-buttons');

let shuffledQuestions, currentQuestionIndex

let questionsAsked = 0;

function checkAnswer(){
    
}


function startGame(){
    console.log('Game started...');
    shuffledQuestions = questions.sort(() => Math.random () - .5)
    currentQuestionIndex = 0
    nextQuestion();
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        answerButtonsElement.appendChild(button)
        button.addEventListener('click', selectedAnswer)
    })
}

function nextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

nextButton.addEventListener('click', () => {
    questionsAsked++;
    checkAnswer();
    if (questionsAsked === 9){
        nextButton.innerText = 'Finish';
    }
    if (questionsAsked === 10){
        fullGame.style.display = 'none';
        nextButton.classList.add('hide')
        gameEnd();
    } else {
        currentQuestionIndex++;
        resetState();
        nextQuestion();
        nextButton.classList.add('hide')
    };
    console.log('Your current score is ' + score);
})


function selectedAnswer(e){
    nextButton.classList.remove('hide');
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (selectedButton.dataset.correct){
        score++;
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

let score = 0;

function gameEnd(event){
    let endScreen = document.createElement('h2');
    endScreen.classList.add('end-screen')
    endScreen.innerText = 'You score is ' + score;
    navButtons.appendChild(endScreen);
    let restartButton = document.createElement('button');
    restartButton.classList.add('restart-btn')
    restartButton.innerText = 'Restart?';
    restartButton.addEventListener('click', refreshPage())
    navButtons.appendChild(restartButton);
}

function resetState(){while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
}
}

let MAX_QUESTIONS = 10;

let questions = [
    {
        question: 'Who is the Yankees current general manager?',
        answers: [
            {text: 'Thad Levine', correct: false},
            {text: 'Scott Harris', correct: false},
            {text: 'Brian Cashman', correct: true},
            {text: 'Alex Anthopoulos', correct:false},
        ]
    },
    {
        question: 'Which of these teams does not play in the AL West division?',
        answers: [
            {text: 'Houston Astros', correct: false},
            {text: 'Seattle Mariners', correct: false},
            {text: 'Texas Rangers', correct: false},
            {text: 'Minnesota Twins', correct: true},
        ]
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox', correct: true},
            {text: 'Chicago White Sox', correct: false},
            {text: 'Baltimore Orioles', correct: false},
            {text: 'New York Yankees', correct: false},
        ]
    },
    {
        question: 'What team did Babe Ruth play for first?',
        answers: [
            {text: 'Boston Red Sox', correct: true},
            {text: 'Chicago White Sox', correct: false},
            {text: 'Baltimore Orioles', correct: false},
            {text: 'New York Yankees', correct: false},
        ]
    },
    {
        question: 'What team did Shohei Ohtani play for in the Japanese league?',
        answers: [
            {text: 'Hokkaido Nippon-Ham Fighters', correct: true},
            {text: 'Hanshin Tigers', correct: false},
            {text: 'Yomiuri Giants', correct: false},
            {text: 'Orix Buffaloes', correct: false},
        ]
    },
    {
        question: 'Which pitcher holds the world record for fastest ball thrown?',
        answers: [
            {text: 'Jordan Hicks', correct: false},
            {text: 'Aroldis Chapman', correct: true},
            {text: 'Randy Johnson', correct: false},
            {text: 'Justin Verlander', correct: false},
        ]
    },
    {
        question: 'Who did Boston play against in the first World Series?',
        answers: [
            {text: 'Arizona', correct: false},
            {text: 'Miami', correct: false},
            {text: 'Houston', correct: false},
            {text: 'Pittsburgh', correct: true},
        ]
    },
    {
        question: 'How long was the shortest game in baseball history?',
        answers: [
            {text: '1 hour', correct: false},
            {text: '2 hours', correct: false},
            {text: '51 minutes', correct: true},
            {text: '22 minutes', correct: false},
        ]
    },
    {
        question: 'What year was the MLB founded?',
        answers: [
            {text: '1876', correct: false},
            {text: '1932', correct: false},
            {text: '1903', correct: true},
            {text: '1901', correct: false},
        ]
    },
    {
        question: 'How long was the longest game in baseball history?',
        answers: [
            {text: '8 hours 6 minutes', correct: true},
            {text: '4 hours 3 minutes', correct: false},
            {text: '9 days', correct: false},
            {text: '13 hours 20 minutes', correct: false},
        ]
    },
    {
        question: 'What player is credited with the most home runs in their career?',
        answers: [
            {text: 'Albert Pujols', correct: false},
            {text: 'Willie Mays', correct: false},
            {text: 'Barry Bonds', correct: true},
            {text: 'Ken Griffey Jr.', correct: false},
        ]
    },
    {
        question: 'Which player has played for the most franchises in MLB history?',
        answers: [
            {text: 'Ron Villione', correct: false},
            {text: 'Edwin Jackson', correct: true},
            {text: 'Deacon McGuire', correct: false},
            {text: 'Henry Blanco', correct: false},
        ]
    },
    {
        question: 'What team was caught cheating by stealing signs in 2017 and 2018?',
        answers: [
            {text: 'Baltimore Orioles', correct: false},
            {text: 'Oakland Athletics', correct: false},
            {text: 'Philadelphia Phillies', correct: false},
            {text: 'Houston Astros', correct: true},
        ]
    },
    {
        question: 'Where is the baseball Hall Of Fame?',
        answers: [
            {text: 'Cooperstown, New York', correct: true},
            {text: 'Dublin, Georgia', correct: false},
            {text: 'Los Angeles, California', correct: false},
            {text: 'Seattle, Washington', correct: false},
        ]
    },
    {
        question: 'Who is the oldest recorded player in the MLB?',
        answers: [
            {text: "Charley O'Leary", correct: false},
            {text: 'Leroy Paige', correct: true},
            {text: "Jim O'Rourke", correct: false},
            {text: 'Hoyt Wilhelm', correct: false},
        ]
    },
    {
        question: 'What famous slugger retired after suffering from ALS?',
        answers: [
            {text: 'Red Ruffing', correct: false},
            {text: 'Johnny Murphy', correct: false},
            {text: 'Lou Gehrig', correct: true},
            {text: 'Joe DiMaggio', correct: false},
        ]
    },
    {
        question: 'How many players are in a teams batting order?',
        answers: [
            {text: '12', correct: false},
            {text: '9', correct: true},
            {text: '8', correct: false},
            {text: '6', correct: false},
        ]
    },
    {
        question: 'Which of these is not a type of pitch?',
        answers: [
            {text: 'Shoulder Curveball', correct: true},
            {text: 'Slider', correct: false},
            {text: 'Eephus', correct: false},
            {text: 'Four-Seam Fastball', correct: false},
        ]
    },
    {
        question: 'How many balls does a pitcher need to throw to walk a batter?',
        answers: [
            {text: '3', correct: false},
            {text: '5', correct: false},
            {text: '2', correct: false},
            {text: '4', correct: true},
        ]
    },
    {
        question: 'What is another name for baseball stadium?',
        answers: [
            {text: 'A Ring', correct: false},
            {text: 'An Octagon', correct: false},
            {text: 'A Diamond', correct: true},
            {text: 'An Alley', correct: false},
        ]
    }
]

document.onload = startGame();