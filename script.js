// Quiz Form Submission for Event 1 (Cold War)
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

// Quiz Form Submission for Event 5 (Cold War)
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

// Quiz Form Submission for Event 1 (Communism From Within)
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
                <p><strong>Correct!</strong> HUAC targeted Hollywood in 1947 to probe communist influence.</p>
                <p><strong>Evidence:</strong> Subpoenaed 43 witnesses, blacklisting the Hollywood Ten for refusing to testify.</p>
                <p><strong>Source:</strong> <a href="https://www.history.com/articles/huac" target="_blank">HISTORY: HUAC Investigations</a></p>
            `;
            explanationDiv.style.display = 'block';
        } else {
            boo.currentTime = 0; boo.play();
            setTimeout(() => { boo.pause(); boo.currentTime = 0; }, 3000);
            if (selectedAnswer.value === 'A') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Military officials were not HUAC’s 1947 focus.</p>
                    <p><strong>Evidence:</strong> Hollywood was targeted, with 43 witnesses subpoenaed.</p>
                    <p><strong>Source:</strong> <a href="https://www.history.com/articles/huac" target="_blank">HISTORY: HUAC Investigations</a></p>
                `;
            } else if (selectedAnswer.value === 'C') {
                explanationDiv.innerHTML = `
                    <p><strong>Incorrect.</strong> Professors were investigated later, not in 1947.</p>
                    <p><strong>Evidence:</strong> Hollywood was the focus, with 43 witnesses subpoenaed.</p>
                    <p><strong>Source:</strong> <a href="https://www.history.com/articles/huac" target="_blank">HISTORY: HUAC Investigations</a></p>
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

// Timeline Navigation
function scrollToEvent(eventId) {
    const element = document.getElementById(eventId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mini-Game Logic: Presidential Decisions – Navigating McCarthyism
let gameState = {
    publicTrust: 50,
    nationalSecurity: 50,
    civilLiberties: 50,
    currentScenario: 0
};

const scenarios = [
    {
        text: "It’s 1952, and Senator Joseph McCarthy claims there are 205 communists in the State Department, echoing his 1950 Wheeling speech. His accusations lack evidence, but the public is fearful. How do you respond?",
        choices: [
            {
                text: "Publicly support McCarthy’s investigations to show you’re tough on communism.",
                effects: { publicTrust: 10, nationalSecurity: 15, civilLiberties: -20 },
                feedback: "McCarthy’s influence grows, and fear spreads. Over 2,000 government employees are dismissed without evidence, damaging civil liberties. Public trust rises slightly as people feel you’re taking action, but at what cost?"
            },
            {
                text: "Demand evidence from McCarthy before taking action, emphasizing due process.",
                effects: { publicTrust: -10, nationalSecurity: -5, civilLiberties: 15 },
                feedback: "Your call for evidence angers McCarthy’s supporters, lowering public trust. However, civil liberties are protected as you resist baseless accusations. National security takes a slight hit as some fear you’re not doing enough."
            },
            {
                text: "Quietly investigate the claims through the FBI, keeping the public calm.",
                effects: { publicTrust: 5, nationalSecurity: 10, civilLiberties: 5 },
                feedback: "The FBI investigates discreetly, finding some espionage (as later confirmed by Venona), boosting national security. Public trust and civil liberties improve slightly as you avoid mass hysteria."
            }
        ]
    },
    {
        text: "The House Un-American Activities Committee (HUAC) is blacklisting Hollywood artists, like the Hollywood Ten in 1947, for suspected communism. Over 300 are affected, and the public demands action. What do you do?",
        choices: [
            {
                text: "Support HUAC’s blacklists to crack down on potential threats.",
                effects: { publicTrust: 10, nationalSecurity: 10, civilLiberties: -25 },
                feedback: "HUAC’s blacklists expand, and public trust rises as people feel protected. National security improves slightly, but civil liberties plummet as artists like Dalton Trumbo are silenced, violating free speech."
            },
            {
                text: "Condemn HUAC’s actions and protect free speech, risking public backlash.",
                effects: { publicTrust: -15, nationalSecurity: -10, civilLiberties: 20 },
                feedback: "You defend free speech, boosting civil liberties. However, the public, fearing communism, loses trust in your leadership. National security dips as some believe you’re ignoring real threats."
            },
            {
                text: "Propose a review board to fairly assess HUAC’s claims, balancing security and rights.",
                effects: { publicTrust: 0, nationalSecurity: 5, civilLiberties: 10 },
                feedback: "A review board ensures fairer investigations, slightly improving national security and civil liberties. Public trust remains neutral as some support your moderation, while others want harsher action."
            }
        ]
    },
    {
        text: "The Rosenberg trial has concluded, and Julius and Ethel Rosenberg are sentenced to death in 1953 for espionage, based on Venona evidence and David Greenglass’s testimony. Protests erupt, claiming unfair trials. How do you handle the situation?",
        choices: [
            {
                text: "Uphold the death sentences to deter future espionage.",
                effects: { publicTrust: 15, nationalSecurity: 20, civilLiberties: -15 },
                feedback: "The executions proceed, boosting public trust and national security as a strong message is sent. However, civil liberties suffer as protests highlight the trial’s reliance on secret Venona evidence, raising due process concerns."
            },
            {
                text: "Commute the sentences to life imprisonment, citing trial concerns.",
                effects: { publicTrust: -20, nationalSecurity: -15, civilLiberties: 20 },
                feedback: "Commuting the sentences protects civil liberties by addressing trial fairness, but public trust and national security plummet. Many accuse you of being soft on communism during a time of fear."
            },
            {
                text: "Order a public review of the trial while keeping the sentences on hold.",
                effects: { publicTrust: -5, nationalSecurity: 0, civilLiberties: 15 },
                feedback: "A public review calms some protests, improving civil liberties. Public trust dips slightly as some see you as indecisive, but national security remains stable as you address espionage concerns thoughtfully."
            }
        ]
    }
];

const endings = [
    {
        condition: (state) => state.publicTrust >= 50 && state.civilLiberties >= 50,
        text: "<h3>Strong Leadership</h3><p>You’ve navigated the McCarthyism era with balance, maintaining public trust while protecting civil liberties. By 1954, McCarthy’s tactics are discredited, and you’re praised for upholding democratic values during a time of fear. History remembers you as a leader who resisted hysteria.</p>"
    },
    {
        condition: (state) => state.publicTrust < 40 || state.civilLiberties < 40,
        text: "<h3>Public Backlash</h3><p>Your handling of McCarthyism has led to widespread unrest. Public trust or civil liberties have collapsed, fueling protests and division. By 1954, McCarthy’s influence wanes, but your presidency is tarnished, remembered as a cautionary tale of leadership during crisis.</p>"
    },
    {
        condition: (state) => state.nationalSecurity >= 70 && state.civilLiberties < 50,
        text: "<h3>Authoritarian Shift</h3><p>You’ve prioritized national security, cracking down on communism with McCarthy and HUAC. While espionage threats are minimized, civil liberties are severely damaged. By 1954, the U.S. has shifted toward authoritarian policies, a legacy that overshadows your presidency.</p>"
    },
    {
        condition: () => true, // Default fallback
        text: "<h3>Mixed Legacy</h3><p>Your presidency during the McCarthyism era leaves a mixed legacy. You’ve managed some crises well, but struggles with public trust, security, or civil liberties have marked your term. By 1954, McCarthy is censured, but your leadership is debated by historians.</p>"
    }
];

function startGame() {
    gameState = {
        publicTrust: 50,
        nationalSecurity: 50,
        civilLiberties: 50,
        currentScenario: 0
    };
    const gameContainer = document.getElementById('game-container');
    const gameScenario = document.getElementById('game-scenario');
    const gameChoices = document.getElementById('game-choices');
    const gameOutcome = document.getElementById('game-outcome');

    // Show game container and reset visibility of elements
    document.getElementById('start-game-btn').style.display = 'none';
    gameContainer.style.display = 'block';
    gameScenario.style.display = 'block';
    gameChoices.style.display = 'flex';
    gameOutcome.style.display = 'none';
    gameScenario.innerHTML = '';
    gameChoices.innerHTML = '';
    
    updateMetrics();
    showScenario();
}

function showScenario() {
    const scenario = scenarios[gameState.currentScenario];
    const gameScenario = document.getElementById('game-scenario');
    gameScenario.innerHTML = `<p>${scenario.text}</p>`;
    
    const choicesDiv = document.getElementById('game-choices');
    choicesDiv.innerHTML = '';
    choicesDiv.style.display = 'flex'; // Ensure choices are visible
    scenario.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.innerText = choice.text;
        button.onclick = () => makeChoice(index);
        choicesDiv.appendChild(button);
    });
}

function makeChoice(choiceIndex) {
    const scenario = scenarios[gameState.currentScenario];
    const choice = scenario.choices[choiceIndex];
    
    gameState.publicTrust += choice.effects.publicTrust;
    gameState.nationalSecurity += choice.effects.nationalSecurity;
    gameState.civilLiberties += choice.effects.civilLiberties;

    // Cap metrics between 0 and 100
    gameState.publicTrust = Math.max(0, Math.min(100, gameState.publicTrust));
    gameState.nationalSecurity = Math.max(0, Math.min(100, gameState.nationalSecurity));
    gameState.civilLiberties = Math.max(0, Math.min(100, gameState.civilLiberties));

    updateMetrics();

    const gameScenario = document.getElementById('game-scenario');
    gameScenario.innerHTML += `<p><strong>Result:</strong> ${choice.feedback}</p>`;
    document.getElementById('game-choices').style.display = 'none';

    gameState.currentScenario++;
    if (gameState.currentScenario < scenarios.length) {
        setTimeout(showScenario, 6000); // Increased to 6 seconds for readability
    } else {
        setTimeout(showOutcome, 6000); // Show outcome after 6 seconds
    }
}

function updateMetrics() {
    document.getElementById('public-trust').innerText = gameState.publicTrust;
    document.getElementById('national-security').innerText = gameState.nationalSecurity;
    document.getElementById('civil-liberties').innerText = gameState.civilLiberties;
}

function showOutcome() {
    const outcome = endings.find(ending => ending.condition(gameState)) || endings[endings.length - 1];
    const gameOutcome = document.getElementById('game-outcome');
    gameOutcome.innerHTML = outcome.text + '<button onclick="startGame()">Play Again</button>';
    gameOutcome.style.display = 'block';
    document.getElementById('game-scenario').style.display = 'none';
    document.getElementById('game-choices').style.display = 'none';
}
document.getElementById('quiz-form-goldwater').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('#RiseOfTheNewRight input[name="answer"]:checked');
    const hiddenSections = document.querySelectorAll('#RiseOfTheNewRight .timeline-event.hidden');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('answer-explanation-goldwater');

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
            explanationDiv.innerHTML = '<p><strong>Correct!</strong> Limited government was a key theme of Goldwater’s campaign.</p>';
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
