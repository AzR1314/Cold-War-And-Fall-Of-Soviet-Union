// Quiz Form Submission
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('.timeline-event.hidden');
    const applause = document.getElementById('applause');

    if (selectedAnswer && selectedAnswer.value === 'B') {
        hiddenSections.forEach(section => {
            section.classList.remove('hidden');
        });
        
        // Play applause for 5 seconds
        applause.currentTime = 0; // Reset to start
        applause.play();
        setTimeout(() => applause.pause(), 5000); // Stop after 5 seconds
        
        // More confetti (300 pieces) for 5 seconds
        for (let i = 0; i < 300; i++) { // Increased from 100 to 300
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000); // Changed to 5 seconds
        }
    } else {
        alert('Try again!');
    }
});

// Expandable "Learn More" buttons
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
