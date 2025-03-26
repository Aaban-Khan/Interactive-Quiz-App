const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Donald Trump",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

let question = document.getElementById("question");
let option_a = document.querySelector(".text-option-a");
let option_b = document.querySelector(".text-option-b");
let option_c = document.querySelector(".text-option-c");
let option_d = document.querySelector(".text-option-d");
let result = document.querySelector(".final");
let resultText = document.getElementById("resultText");
let clickToContinue = document.querySelector("#ok")
let submit = document.getElementById("submit");


let contentIndex = 0;
let score = 0;

question.textContent = quiz[contentIndex].question;
option_a.innerHTML = quiz[contentIndex].ans1text;
option_b.innerHTML = quiz[contentIndex].ans2text;
option_c.innerHTML = quiz[contentIndex].ans3text;
option_d.innerHTML = quiz[contentIndex].ans4text;

submit.addEventListener("click", () => {
  let quiz_answer = document.querySelector("input[type='radio']:checked");
  console.log(quiz_answer);
  if (quiz_answer === null) {
    alert("please select an option");
  } else {

    if (quiz_answer.nextElementSibling.textContent === quiz[contentIndex].answer) {
      score++;
    }
    contentIndex++;
    if (contentIndex < quiz.length) {
      question.textContent = quiz[contentIndex].question;
      option_a.textContent = quiz[contentIndex].ans1text;
      option_b.textContent = quiz[contentIndex].ans2text;
      option_c.textContent = quiz[contentIndex].ans3text;
      option_d.textContent = quiz[contentIndex].ans4text;
      quiz_answer.checked = false
    } else{
        result.style.display = "flex"
        resultText.textContent = `Your score is ${score} out of ${quiz.length}`
    
        clickToContinue.addEventListener("click",()=>{
            setTimeout(() => {
                location.reload();
            }, 1000);
        })
    }
  }
});
