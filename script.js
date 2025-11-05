const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hyper Tool Multi Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: "Hypertext Markup Language"
  }
];

let index = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");

function showQuestion() {
  const q = questions[index];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      index++;
      if (index < questions.length) showQuestion();
      else showResult();
    };
    optionsElement.appendChild(btn);
  });
}

function showResult() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  result.textContent = `You scored ${score} out of ${questions.length}!`;
  nextBtn.style.display = "none";
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) showQuestion();
  else showResult();
};

showQuestion();
