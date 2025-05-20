const quizData = [
  {
    question: "당신의 MBTI는 무엇인가요?",
    choices: ["ISTJ", "ENFP", "INFJ", "ESTP"],
  },
  {
    question: "친구들과의 모임에서 당신의 역할은?",
    choices: ["주도자", "청취자", "분위기 메이커", "관찰자"],
  },
  // 추가 질문을 여기에 작성
];

let currentQuestion = 0;
let answers = [];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultEl = document.getElementById("result");

function showQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  choicesEl.innerHTML = "";
  currentQuiz.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => selectAnswer(index));
    choicesEl.appendChild(li);
  });
}

function selectAnswer(index) {
  answers[currentQuestion] = index;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  // 결과 계산 로직을 여기에 추가
  resultEl.textContent = "당신은 활발한 성격의 소유자입니다!";
}

showQuestion();
nextBtn.disabled = true;
