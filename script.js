// Quiz Form Submission for Event 1
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('.timeline-event.hidden');
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
            for (let i = 0; i < 1000; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 5000);
            }
            explanationDiv.innerHTML = `
                <p><strong>Correct!</strong> The Soviet Union's economic growth was driven by high productivity industries like oil, gas, and heavy manufacturing, though stagnation hit by the 1970s.</p>
                <p><strong>Evidence:</strong> Oil exports peaked at over 50% of earnings by 1975, per video at 22:25–23:25.</p>
            `;
            explanationDiv.style.display = 'block';
        } else {
            boo.currentTime = 0; boo.play();
            setTimeout(() => { boo.pause(); boo.currentTime = 0; }, 3000);
            if (selectedAnswer.value === 'A') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Low productive industries like consumer goods were underfunded, not a growth source.</p>
                    <p><strong>Evidence:</strong> Only 25% of GDP went to consumer goods vs. 40% for heavy industry in the 1970s.</p>
                    <p><strong>Sources:</strong> <a href="https://www.pbs.org/wgbh/frontline/article/the-soviet-occupation-of-afghanistan/" target="_blank">PBS: Soviet Occupation</a></p>
                `;
            } else if (selectedAnswer.value === 'C') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Military spending consumed up to 20% of GDP, draining rather than driving growth.</p>
                    <p><strong>Evidence:</strong> Increased in the 1980s, per CIA estimates.</p>
                    <p><strong>Sources:</strong> <a href="https://www.cia.gov/readingroom/docs/CIA-RDP90T00155R000300030001-8.pdf" target="_blank">CIA: Soviet Military Spending</a></p>
                `;
            }
            explanationDiv.style.display = 'block';
            alert('Try again!');
        }
    }
});

// Quiz Form Submission for Event 5
document.getElementById('quiz-form-5').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
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
            for (let i = 0; i < 1000; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 5000);
            }
            explanationDiv.innerHTML = `
                <p><strong>Correct!</strong> The loss of control over republics was a key factor in the Soviet Union’s collapse.</p>
                <p><strong>Evidence:</strong> The video (4:30–6:01) highlights how nationalist movements in the republics led to the USSR’s disintegration.</p>
                <p><strong>Source:</strong> <a href="https://history.state.gov/milestones/1989-1992/collapse-soviet-union" target="_blank">U.S. State Dept: Collapse of Soviet Union</a></p>
            `;
            explanationDiv.style.display = 'block';
        } else {
            boo.currentTime = 0; boo.play();
            setTimeout(() => { boo.pause(); boo.currentTime = 0; }, 3000);
            if (selectedAnswer.value === 'A') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Increased military spending weakened the USSR but was not the decisive factor in the video.</p>
                    <p><strong>Evidence:</strong> The video (4:30–6:01) focuses on republics breaking away.</p>
                    <p><strong>Source:</strong> <a href="https://history.state.gov/milestones/1989-1992/collapse-soviet-union" target="_blank">U.S. State Dept: Collapse of Soviet Union</a></p>
                `;
            } else if (selectedAnswer.value === 'C') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> A stronger U.S. military presence played a role but was not emphasized in the video’s explanation.</p>
                    <p><strong>Evidence:</strong> The video (4:30–6:01) stresses internal collapse over external military pressure.</p>
                    <p><strong>Source:</strong> <a href="https://history.state.gov/milestones/1989-1992/collapse-soviet-union" target="_blank">U.S. State Dept: Collapse of Soviet Union</a></p>
                `;
            }
            explanationDiv.style.display = 'block';
            alert('Try again!');
        }
    }
});

// Expandable "Learn More" buttons with cheer sound for Velvet Revolutions
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const extraInfo = button.nextElementSibling;
        const cheer = document.getElementById('cheer');
        if (extraInfo.style.display === 'block') {
            extraInfo.style.display = 'none';
            button.textContent = 'Learn More';
        } else {
            extraInfo.style.display = 'block';
            button.textContent = 'Hide';
            if (button.closest('.timeline-event').getAttribute('data-year') === '1989' && 
                button.parentElement.querySelector('p').textContent.includes('nationalist')) {
                cheer.currentTime = 0; cheer.play();
                setTimeout(() => { cheer.pause(); cheer.currentTime = 0; }, 3000);
            }
        }
    });
});

// Smooth scroll to timeline events
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('click', () => {
        event.scrollIntoView({ behavior: 'smooth' });
    });
});
