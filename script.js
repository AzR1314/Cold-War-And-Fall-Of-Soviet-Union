document.addEventListener('DOMContentLoaded', () => {
    // Helper function for confetti animation
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    }

    // "Learn More" button handler
    const expandButtons = document.querySelectorAll('.expand-btn');
    if (expandButtons.length) {
        expandButtons.forEach(button => {
            button.addEventListener('click', () => {
                const extraInfo = button.nextElementSibling;
                const cheer = document.getElementById('cheer');
                if (!extraInfo || !extraInfo.classList.contains('extra-info')) {
                    console.error('Extra info not found for button:', button);
                    return;
                }
                const isVisible = extraInfo.style.display === 'block';
                extraInfo.style.display = isVisible ? 'none' : 'block';
                button.textContent = isVisible ? 'Learn More' : 'Hide';
                if (!isVisible && button.closest('.timeline-event')?.getAttribute('data-year') === '1989' &&
                    button.parentElement.querySelector('p')?.textContent.includes('nationalist')) {
                    if (cheer) {
                        cheer.currentTime = 0;
                        cheer.play().catch(e => console.error('Cheer audio failed:', e));
                        setTimeout(() => {
                            cheer.pause();
                            cheer.currentTime = 0;
                        }, 3000);
                    } else {
                        console.warn('Cheer audio element not found');
                    }
                }
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
            const applause = document.getElementById('applause');
            const boo = document.getElementById('boo');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'C'; // Military
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! The Soviet Union’s economic growth was heavily driven by its military-industrial complex, which prioritized defense spending over consumer goods, contributing to its eventual economic strain.</p>';
                if (applause) {
                    applause.currentTime = 0;
                    applause.play().catch(e => console.error('Applause audio failed:', e));
                }
                createConfetti();
                document.querySelectorAll('#ColdWar .timeline-event.hidden').forEach(event => {
                    event.classList.remove('hidden');
                });
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. The Soviet economy relied heavily on its military sector, not low or high productive industries, which led to imbalances and stagnation.</p>';
                if (boo) {
                    boo.currentTime = 0;
                    boo.play().catch(e => console.error('Boo audio failed:', e));
                }
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
            const applause = document.getElementById('applause');
            const boo = document.getElementById('boo');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form 5 elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'B'; // Loss of control over republics
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! The loss of control over republics, driven by nationalist movements and Gorbachev’s reforms, was a key factor in the Soviet Union’s collapse.</p>';
                if (applause) {
                    applause.currentTime = 0;
                    applause.play().catch(e => console.error('Applause audio failed:', e));
                }
                createConfetti();
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. While military spending and U.S. presence played roles, the primary factor was the loss of control over republics seeking independence.</p>';
                if (boo) {
                    boo.currentTime = 0;
                    boo.play().catch(e => console.error('Boo audio failed:', e));
                }
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
            const applause = document.getElementById('applause');
            const boo = document.getElementById('boo');
            if (!selectedAnswer || !explanationDiv) {
                console.error('Quiz form HUAC elements missing:', { selectedAnswer, explanationDiv });
                return;
            }

            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
            const correctAnswer = 'B'; // Hollywood film industry
            if (selectedAnswer.value === correctAnswer) {
                explanationDiv.innerHTML = '<p>Correct! HUAC targeted the Hollywood film industry in 1947, investigating alleged communist propaganda in films.</p>';
                if (applause) {
                    applause.currentTime = 0;
                    applause.play().catch(e => console.error('Applause audio failed:', e));
                }
                createConfetti();
                document.querySelectorAll('#CommunismFromWithin .timeline-event.hidden').forEach(event => {
                    event.classList.remove('hidden');
                });
            } else {
                explanationDiv.innerHTML = '<p>Incorrect. HUAC focused on Hollywood in 1947, not military officials or university professors.</p>';
                if (boo) {
                    boo.currentTime = 0;
                    boo.play().catch(e => console.error('Boo audio failed:', e));
                }
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
