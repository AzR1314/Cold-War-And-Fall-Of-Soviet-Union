document.addEventListener('DOMContentLoaded', () => {
    // "Learn More" button handler
    const expandButtons = document.querySelectorAll('.expand-btn');
    if (expandButtons.length) {
        expandButtons.forEach(button => {
            button.addEventListener('click', () => {
                const extraInfo = button.nextElementSibling;
                if (!extraInfo || !extraInfo.classList.contains('extra-info')) {
                    console.error('Extra info not found for button:', button);
                    return;
                }
                const isVisible = extraInfo.style.display === 'block';
                extraInfo.style.display = isVisible ? 'none' : 'block';
                button.textContent = isVisible ? 'Learn More' : 'Hide';
            });
        });
    } else {
        console.warn('No .expand-btn elements found');
    }

    // Quiz Form Submission - Cold War Event 1
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked');
            const explanationDiv = document.getElementById('answer-explanation');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'C'; // Military
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! The Soviet Union’s economic growth was heavily driven by its military-industrial complex.</p>';
                document.querySelectorAll('#ColdWar .timeline-event.hidden').forEach(event => {
                    event.classList.remove('hidden');
                });
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. The Soviet economy relied heavily on its military sector.</p>';
            }
            explanationDiv.style.display = 'block';
        });
    } else {
        console.warn('Quiz form #quiz-form not found');
    }

    // Quiz Form Submission - Cold War Event 5
    const quizForm5 = document.getElementById('quiz-form-5');
    if (quizForm5) {
        quizForm5.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            const selectedAnswer = quizForm5.querySelector('input[name="answer"]:checked');
            const explanationDiv = document.getElementById('answer-explanation-5');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form 5 elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'B'; // Loss of control over republics
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! The loss of control over republics was a key factor in the Soviet Union’s collapse.</p>';
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. The primary factor was the loss of control over republics.</p>';
            }
            explanationDiv.style.display = 'block';
        });
    } else {
        console.warn('Quiz form #quiz-form-5 not found');
    }

    // Quiz Form Submission - Communism From Within (HUAC)
    const quizFormHuac = document.getElementById('quiz-form-huac');
    if (quizFormHuac) {
        quizFormHuac.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            const selectedAnswer = quizFormHuac.querySelector('input[name="answer"]:checked');
            const explanationDiv = document.getElementById('answer-explanation-huac');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form HUAC elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'B'; // Hollywood film industry
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! HUAC targeted the Hollywood film industry in 1947.</p>';
                document.querySelectorAll('#CommunismFromWithin .timeline-event.hidden').forEach(event => {
                    event.classList.remove('hidden');
                });
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. HUAC focused on Hollywood in 1947.</p>';
            }
            explanationDiv.style.display = 'block';
        });
    } else {
        console.warn('Quiz form #quiz-form-huac not found');
    }

    // Quiz Form Submission - Rise of the New Right (Goldwater)
    const quizFormGoldwater = document.getElementById('quiz-form-goldwater');
    if (quizFormGoldwater) {
        quizFormGoldwater.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page reload
            const selectedAnswer = quizFormGoldwater.querySelector('input[name="answer"]:checked');
            const explanationDiv = document.getElementById('answer-explanation-goldwater');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form Goldwater elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'B'; // Limited government
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! Goldwater’s 1964 campaign emphasized limited government.</p>';
                document.querySelectorAll('#RiseOfTheNewRight .timeline-event.hidden').forEach(event => {
                    event.classList.remove('hidden');
                });
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. Goldwater focused on limited government.</p>';
            }
            explanationDiv.style.display = 'block';
        });
    } else {
        console.warn('Quiz form #quiz-form-goldwater not found');
    }
});
