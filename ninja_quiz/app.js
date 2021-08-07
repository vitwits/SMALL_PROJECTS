const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault(); //stop the page from reload

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //show result
  scrollTo({
    top: 0,
    behavior: "smooth"
  });
  result.classList.remove('d-none');
  let i = 0;

  setTimeout(() => {
    const timer = setInterval(() => {
      i++;
      result.querySelector('span').textContent = `${i}%`;
      if (i === score) {
        clearInterval(timer);
      }
    }, 20);
  }, 500);
});