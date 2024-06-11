const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid', 'kdj', ';ll'],
      correctAnswer: 'Paris'
    },
    {
        question: 'Combien de Ville en France ?',
        choices: ['52 777', '36 529', '23 887'],
        correctAnswer: '36 529'
    },
    {
        question: 'Quelle est la plus petite ville de France ?',
        choices: ['lyon', 'Paris', 'Castelmoron-d\'Albret', 'Nice'],
        correctAnswer: 'Castelmoron-d\'Albret'
    },
    {
        question: 'Quelle est la 3e ville de la France ?',
        choices: ['Nice', 'Paris', 'Marseille', 'Lyon'],
        correctAnswer: 'Lyon'
    },
    {
        question: 'Quelle est la 2e ville de la France ?',
        choices: ['Nice', 'Paris', 'Marseille', 'Lyon'],
        correctAnswer: 'Marseille'
    },
  ];
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  // fonction pour affichier
  function displayQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;
  
    choicesElement.innerHTML = '';
    quizQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.classList.add('choice');
      button.addEventListener('click', () => checkAnswer(choice));
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(answer) {
    const quizQuestion = quizData[currentQuestion];
    if (answer === quizQuestion.correctAnswer) {
      score++;
      resultElement.textContent = 'Correct!';
    } else {
      resultElement.textContent = 'Wrong!';
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}.`;
    choicesElement.innerHTML = '';
    submitButton.style.display = 'none';
  }
  
  displayQuestion();
  