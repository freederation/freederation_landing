function toggleAnswer(element, category) {
  const activeQuestion = document.querySelector(`#${category} .faq-question.active`);
  if (activeQuestion && activeQuestion !== element) {
    activeQuestion.classList.remove('active');
    activeQuestion.nextElementSibling.style.display = "none";
  }
  
  element.classList.toggle('active');
  const answer = element.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
