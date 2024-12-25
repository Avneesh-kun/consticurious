function checkAnswer(answer, questionNumber) {
    let feedback = document.getElementById(`feedback${questionNumber}`);
    let correctAnswers = {
        1: 'Dr. B.R. Ambedkar',
        2: 'Preamble',
        3: '12'
    };

    if (answer === correctAnswers[questionNumber]) {
        feedback.innerText = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}
