function scrollToEvent(eventId) {
    const element = document.getElementById(eventId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Quiz handler for Cold War tab (1970-1980 event)
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('#ColdWar input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('#ColdWar .timeline-event.hidden');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('answer-explanation');

    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = '';

    if (selectedAnswer) {
        if (selectedAnswer.value === 'B') {
            hiddenSections.forEach(section => section.classList.remove('hidden'));
            applause.currentTime = 0; applause.play();
            setTimeout(() => { applause.pause(); applause.currentTime = 0; }, 5000);
            correctText.textContent = 'Correct!'; correctText.style.display = 'block';
            setTimeout(() => {
                correctText.classList.add('shrink');
                setTimeout(() => { correctText.style.display = 'none'; correctText.classList.remove('shrink'); }, 1000);
            }, 3000);
            explanationDiv.innerHTML = '<p><strong>Correct!</strong> The main source of economic growth for the Soviet Union was high productive industries, particularly in the early decades of its industrialization.</p>';
            explanationDiv.style.display = 'block';
        } else {
            boo.currentTime = 0; boo.play();
            setTimeout(() => { boo.pause(); boo.currentTime = 0; }, 3000);
            explanationDiv.innerHTML = '<p><strong>Incorrect.</strong> Try again!</p>';
            explanationDiv.style.display = 'block';
            alert('Try again!');
        }
    }
});

// Quiz handler for Cold War tab (Berlin Wall & USSR Collapse event)
document.getElementById('quiz-form-5').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('#ColdWar input[name="answer"]:checked');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('answer-explanation-5');

    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = '';

    if (selectedAnswer) {
        if (selectedAnswer.value === 'B') {
            applause.currentTime = 0; applause.play();
            setTimeout(() => { applause.pause(); applause.currentTime = 0; }, 5000);
            correctText.textContent = 'Correct!'; correctText.style.display = 'block';
            setTimeout(() => {
                correctText.classList.add('shrink');
                setTimeout(() => { correctText.style.display = 'none'; correctText.classList.remove('shrink'); }, 1000);
            }, 3000);
            explanationDiv.innerHTML = '<p><strong>Correct!</strong> The loss of control over republics was a key factor in the Soviet Union’s collapse, as nationalist movements grew stronger.</p>';
            explanationDiv.style.display = 'block';
        } else {
            boo.currentTime = 0; boo.play();
            setTimeout(() => { boo.pause(); boo.currentTime = 0; }, 3000);
            explanationDiv.innerHTML = '<p><strong>Incorrect.</strong> Try again!</p>';
            explanationDiv.style.display = 'block';
            alert('Try again!');
        }
    }
});

// Quiz handler for Communism From Within tab (HUAC Investigations)
document.getElementById('quiz-form-huac').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('#CommunismFromWithin input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('#CommunismFromWithin .timeline-event.hidden');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('answer-explanation-huac');

    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = '';

    if (selectedAnswer) {
        if (selectedAnswer.value === 'B') {
            hiddenSections.forEach(section => section.classList.remove('hidden'));
            applause.currentTime = 0; applause.play();
            setTimeout(() => { applause.pause(); applause.currentTime = 0; }, 5000);
            correctText.textContent = 'Correct!'; correctText.style.display = 'block';
            setTimeout(() => {
                correctText.classList.add('shrink');
                setTimeout(() => { correctText.style.display = 'none'; correctText.classList.remove('shrink'); }, 1000);
            }, 3000);
            explanationDiv.innerHTML = '<p><strong>Correct!</strong> HUAC’s 1947 investigations primarily targeted the Hollywood film industry.</p>';
            explanationDiv.style.display = 'block';
        } else {
            boo.currentTime = 0; boo.play();
            setTimeout(() => { boo.pause(); boo.currentTime = 0; }, 3000);
            explanationDiv.innerHTML = '<p><strong>Incorrect.</strong> Try again!</p>';
            explanationDiv.style.display = 'block';
            alert('Try again!');
        }
    }
});
