// Quiz Form Submission
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('.timeline-event.hidden');
    const applause = document.getElementById('applause');

    if (selectedAnswer && selectedAnswer.value === 'B') {
        // Correct answer: Reveal sections, play applause, show confetti
        hiddenSections.forEach(section => {
            section.classList.remove('hidden');
        });
        applause.play();

        // Confetti effect
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000); // Remove after 3s
        }
    } else {
        alert('Try again!'); // Wrong answer feedback
    }
});

// Existing interactivity for "Learn More" buttons
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const extraInfo = button.nextElementSibling;
        if (extraInfo.style.display === 'block') {
            extraInfo.style.display = 'none';
            button.textContent = 'Learn More';
        } else {
            extraInfo.style.display = 'block';
            button.textContent = 'Hide';
        }
    });
});

// Smooth scroll to timeline events
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('click', () => {
        event.scrollIntoView({ behavior: 'smooth' });
    });
});
