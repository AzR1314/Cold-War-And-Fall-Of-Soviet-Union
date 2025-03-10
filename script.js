// Quiz Form Submission for Event 1 (Soviet Economy)
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('.timeline-event.hidden');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('answer-explanation');

    // Clear previous explanation
    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = '';

    if (selectedAnswer) {
        if (selectedAnswer.value === 'B') {
            // Reveal hidden sections
            hiddenSections.forEach(section => {
                section.classList.remove('hidden');
            });

            // Play applause for 5 seconds
            applause.currentTime = 0;
            applause.play();
            setTimeout(() => {
                applause.pause();
                applause.currentTime = 0;
            }, 5000);

            // Show "Correct!" text
            correctText.textContent = 'Correct!';
            correctText.style.display = 'block';
            setTimeout(() => {
                correctText.classList.add('shrink');
                setTimeout(() => {
                    correctText.style.display = 'none';
                    correctText.classList.remove('shrink');
                }, 1000);
            }, 3000);

            // More confetti (1000 pieces) for 5 seconds
            for (let i = 0; i < 1000; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 5000);
            }

            // Show correct answer explanation
            explanationDiv.innerHTML = `
                <p><strong>Correct!</strong> The Soviet Union's economic growth in the 20th century, especially during the Cold War, was driven by high productivity industries like oil, gas, and heavy manufacturing. These sectors fueled rapid industrialization post-WWII, but by the 1970s, inefficiencies and over-reliance on oil exports led to stagnation, as seen in the video.</p>
                <p><strong>Evidence:</strong> Oil exports peaked in the 1970s, accounting for over 50% of Soviet hard currency earnings, yet productivity lagged due to outdated technology and central planning.</p>
                <p><strong>Sources:</strong> <a href="https://www.britannica.com/place/Soviet-Union/The-USSR-from-1953-to-1991" target="_blank">Britannica: Soviet Union Economy</a>, <a href="https://www.jstor.org/stable/2491225" target="_blank">JSTOR: Soviet Economic Decline</a></p>
            `;
            explanationDiv.style.display = 'block';
        } else {
            // Play boo sound for wrong answer
            boo.currentTime = 0;
            boo.play();
            setTimeout(() => {
                boo.pause();
                boo.currentTime = 0;
            }, 3000);

            // Show wrong answer explanation
            if (selectedAnswer.value === 'A') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Low productive industries, like consumer goods, were not the main source of Soviet economic growth. The USSR prioritized heavy industry over consumer production, leading to shortages and low quality in these sectors.</p>
                    <p><strong>Evidence:</strong> Consumer goods output was consistently underfunded, with only 25% of GDP allocated compared to 40% for heavy industry in the 1970s.</p>
                    <p><strong>Sources:</strong> <a href="https://www.britannica.com/place/Soviet-Union/The-USSR-from-1953-to-1991" target="_blank">Britannica: Soviet Union Economy</a></p>
                `;
            } else if (selectedAnswer.value === 'C') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> While the military was a massive part of the Soviet economy, it wasn’t the main source of growth. It consumed resources (up to 20% of GDP), diverting funds from productive sectors, contributing to economic strain during the Afghan War.</p>
                    <p><strong>Evidence:</strong> Military spending rose sharply in the 1980s, exacerbating deficits rather than driving growth.</p>
                    <p><strong>Sources:</strong> <a href="https://www.cia.gov/readingroom/docs/CIA-RDP90T00155R000300030001-8.pdf" target="_blank">CIA: Soviet Military Spending</a></p>
                `;
            }
            explanationDiv.style.display = 'block';
            alert('Try again!');
        }
    }
});

// Quiz Form Submission for Gorbachev’s Reforms
document.getElementById('glasnost-quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="glasnost-answer"]:checked');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('glasnost-answer-explanation');

    // Clear previous explanation
    explanationDiv.style.display = 'none';
    explanationDiv.innerHTML = '';

    if (selectedAnswer) {
        if (selectedAnswer.value === 'B') {
            // Play applause for 5 seconds
            applause.currentTime = 0;
            applause.play();
            setTimeout(() => {
                applause.pause();
                applause.currentTime = 0;
            }, 5000);

            // Show "Correct!" text
            correctText.textContent = 'Correct!';
            correctText.style.display = 'block';
            setTimeout(() => {
                correctText.classList.add('shrink');
                setTimeout(() => {
                    correctText.style.display = 'none';
                    correctText.classList.remove('shrink');
                }, 1000);
            }, 3000);

            // More confetti (1000 pieces) for 5 seconds
            for (let i = 0; i < 1000; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 5000);
            }

            // Show correct answer explanation
            explanationDiv.innerHTML = `
                <p><strong>Correct!</strong> Gorbachev’s <em>glasnost</em> policy aimed to increase government transparency and openness, allowing public criticism and media freedom, as highlighted in the video at 2:00–2:40. It exposed issues like Chernobyl and corruption, sparking dissent.</p>
                <p><strong>Evidence:</strong> Over 300 banned books were published by 1989, and the 1986 Chernobyl disaster was openly discussed, a first for the USSR.</p>
                <p><strong>Sources:</strong> <a href="https://www.britannica.com/topic/glasnost" target="_blank">Britannica: Glasnost</a>, <a href="https://www.history.com/topics/russia/mikhail-gorbachev" target="_blank">History.com: Gorbachev’s Reforms</a></p>
            `;
            explanationDiv.style.display = 'block';
        } else {
            // Play boo sound for wrong answer
            boo.currentTime = 0;
            boo.play();
            setTimeout(() => {
                boo.pause();
                boo.currentTime = 0;
            }, 3000);

            // Show wrong answer explanation
            if (selectedAnswer.value === 'A') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Restructuring the Soviet economy was the goal of <em>perestroika</em>, not <em>glasnost</em>. Glasnost focused on political openness, not economic reform.</p>
                    <p><strong>Evidence:</strong> Perestroika’s 1987 Law on State Enterprise aimed at economic changes, while glasnost enabled free speech.</p>
                    <p><strong>Sources:</strong> <a href="https://www.britannica.com/topic/perestroika" target="_blank">Britannica: Perestroika</a></p>
                `;
            } else if (selectedAnswer.value === 'C') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Strengthening the military was not a goal of <em>glasnost</em>. Gorbachev reduced military spending to fund reforms, cutting defense budgets by 1989.</p>
                    <p><strong>Evidence:</strong> The INF Treaty (1987) with the U.S. eliminated intermediate-range missiles, reflecting a de-escalation focus.</p>
                    <p><strong>Sources:</strong> <a href="https://history.state.gov/milestones/1981-1989/inf" target="_blank">U.S. State Dept: INF Treaty</a></p>
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
                button.parentElement.querySelector('p').textContent.includes('Velvet Revolutions')) {
                cheer.currentTime = 0;
                cheer.play();
                setTimeout(() => {
                    cheer.pause();
                    cheer.currentTime = 0;
                }, 3000);
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
