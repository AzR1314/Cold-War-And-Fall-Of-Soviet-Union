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
            explanationDiv.innerHTML = '<p><strong>Correct!</strong> The video highlights the loss of control over republics as a key factor in the Soviet Union’s collapse.</p>';
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

// Quiz handler for Communism From Within tab (HUAC event)
document.getElementById('quiz-form-huac').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector('#CommunismFromWithin input[name="answer"]:checked');
    const applause = document.getElementById('applause');
    const boo = document.getElementById('boo');
    const correctText = document.getElementById('correct-text');
    const explanationDiv = document.getElementById('answer-explanation-huac');

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
            explanationDiv.innerHTML = '<p><strong>Correct!</strong> The primary target of HUAC’s 1947 investigations was the Hollywood film industry.</p>';
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

// Quiz handler for Rise of the New Right tab (Goldwater event)
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

// Event delegation for "Learn More" buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('expand-btn')) {
        const extraInfo = event.target.nextElementSibling;
        if (extraInfo && extraInfo.classList.contains('extra-info')) {
            if (extraInfo.style.display === 'block') {
                extraInfo.style.display = 'none';
                event.target.textContent = 'Learn More';
            } else {
                extraInfo.style.display = 'block';
                event.target.textContent = 'Show Less';
            }
        }
    }
});

// Role-Play Game for Communism From Within (Tab 2)
function startGame() {
    const startButton = document.getElementById('start-game-btn');
    const gameContainer = document.getElementById('game-container');
    const scenarioDiv = document.getElementById('game-scenario');
    const choicesDiv = document.getElementById('game-choices');
    const outcomeDiv = document.getElementById('game-outcome');
    const publicTrustSpan = document.getElementById('public-trust');
    const nationalSecuritySpan = document.getElementById('national-security');
    const civilLibertiesSpan = document.getElementById('civil-liberties');

    let publicTrust = 50;
    let nationalSecurity = 50;
    let civilLiberties = 50;
    let currentScenario = 0;

    startButton.style.display = 'none';
    gameContainer.style.display = 'block';

    const scenarios = [
        {
            scenario: "It’s 1952, and Senator McCarthy is accusing government officials of being communists without solid proof. The public is scared, but civil rights groups are worried about unfair treatment. Do you support McCarthy’s investigations or push for more evidence?",
            choices: [
                { text: "Support McCarthy to calm public fears.", publicTrustChange: 20, nationalSecurityChange: 10, civilLibertiesChange: -30 },
                { text: "Demand evidence to protect civil liberties.", publicTrustChange: -10, nationalSecurityChange: -5, civilLibertiesChange: 20 }
            ]
        },
        {
            scenario: "A Hollywood director is blacklisted for suspected communist ties, and the public is divided. Some want to crack down on suspected communists in the film industry, while others see it as a violation of free speech. What do you do?",
            choices: [
                { text: "Crack down to show you’re tough on communism.", publicTrustChange: 15, nationalSecurityChange: 10, civilLibertiesChange: -25 },
                { text: "Protect free speech and oppose the blacklist.", publicTrustChange: -15, nationalSecurityChange: -10, civilLibertiesChange: 20 }
            ]
        },
        {
            scenario: "The Venona Project reveals real Soviet spies in the U.S., but McCarthy’s aggressive tactics are causing panic. Do you declassify parts of Venona to justify the investigations, or keep it secret to avoid more fear?",
            choices: [
                { text: "Declassify Venona to justify the investigations.", publicTrustChange: 10, nationalSecurityChange: 15, civilLibertiesChange: -10 },
                { text: "Keep it secret to prevent more panic.", publicTrustChange: -10, nationalSecurityChange: -15, civilLibertiesChange: 10 }
            ]
        }
    ];

    function displayScenario() {
        if (currentScenario >= scenarios.length) {
            showOutcome();
            return;
        }

        const scenario = scenarios[currentScenario];
        scenarioDiv.innerHTML = `<p>${scenario.scenario}</p>`;
        choicesDiv.innerHTML = scenario.choices.map((choice, index) => 
            `<button onclick="makeChoice(${index})">${choice.text}</button>`
        ).join('<br>');

        publicTrustSpan.textContent = publicTrust;
        nationalSecuritySpan.textContent = nationalSecurity;
        civilLibertiesSpan.textContent = civilLiberties;
    }

    window.makeChoice = function(choiceIndex) {
        const scenario = scenarios[currentScenario];
        const choice = scenario.choices[choiceIndex];

        publicTrust += choice.publicTrustChange;
        nationalSecurity += choice.nationalSecurityChange;
        civilLiberties += choice.civilLibertiesChange;

        publicTrust = Math.max(0, Math.min(100, publicTrust));
        nationalSecurity = Math.max(0, Math.min(100, nationalSecurity));
        civilLiberties = Math.max(0, Math.min(100, civilLiberties));

        currentScenario++;
        displayScenario();
    };

    function showOutcome() {
        scenarioDiv.style.display = 'none';
        choicesDiv.style.display = 'none';
        outcomeDiv.style.display = 'block';

        let outcome = '';
        if (publicTrust >= 60 && nationalSecurity >= 60 && civilLiberties >= 60) {
            outcome = 'Great job! You balanced public trust, national security, and civil liberties. Your leadership calms the nation while addressing real threats, ensuring McCarthyism doesn’t spiral out of control.';
            document.getElementById('cheer').play();
        } else if (publicTrust >= 50 || nationalSecurity >= 50 || civilLiberties >= 50) {
            outcome = 'Not bad! You managed to navigate McCarthyism, but there are some tensions. The nation is stable, but some groups feel neglected or unfairly targeted.';
            document.getElementById('applause').play();
        } else {
            outcome = 'Oh no! Your decisions led to chaos. Public trust, national security, and civil liberties are all low, and McCarthyism has caused widespread fear and division.';
            document.getElementById('boo').play();
        }

        outcomeDiv.innerHTML = `<p>${outcome}</p><button onclick="startGame()">Play Again</button>`;
    }

    displayScenario();
}

// Role-Play Game for New Right (Tab 3)
function startGameNewRight() {
    const startButton = document.getElementById('start-game-btn-new-right');
    const gameContainer = document.getElementById('game-container-new-right');
    const scenarioDiv = document.getElementById('game-scenario-new-right');
    const choicesDiv = document.getElementById('game-choices-new-right');
    const outcomeDiv = document.getElementById('game-outcome-new-right');
    const policySpan = document.getElementById('policy-priorities');
    const supportSpan = document.getElementById('public-support');
    const unitySpan = document.getElementById('party-unity');

    let policy = 50;
    let support = 50;
    let unity = 50;
    let currentScenario = 0;

    startButton.style.display = 'none';
    gameContainer.style.display = 'block';

    const scenarios = [
        {
            scenario: "It’s 1994, and you’re helping Newt Gingrich craft the Contract with America. Evangelical voters want a strong stance against abortion, but moderates in the party are worried it might push away swing voters. What do you prioritize?",
            choices: [
                { text: "Focus on anti-abortion policies to please evangelicals.", policyChange: 20, supportChange: -10, unityChange: -15 },
                { text: "Balance both sides by focusing on economic issues like tax cuts instead.", policyChange: -10, supportChange: 15, unityChange: 10 }
            ]
        },
        {
            scenario: "The Contract with America is gaining traction, but some Republicans are hesitant about deep welfare cuts. The public loves the idea of reducing government spending, but party unity is at risk. What do you do?",
            choices: [
                { text: "Push for deep welfare cuts to stick to the New Right’s principles.", policyChange: 15, supportChange: 10, unityChange: -20 },
                { text: "Compromise by proposing smaller cuts to keep the party together.", policyChange: -10, supportChange: -5, unityChange: 15 }
            ]
        },
        {
            scenario: "Election Day is approaching, and the media is criticizing the Contract as too extreme. You can either double down on the New Right’s message or soften the tone to appeal to more voters. What’s your strategy?",
            choices: [
                { text: "Double down on the New Right’s message to energize the base.", policyChange: 10, supportChange: -15, unityChange: 5 },
                { text: "Soften the tone to broaden appeal and win more seats.", policyChange: -15, supportChange: 20, unityChange: -5 }
            ]
        }
    ];

    function displayScenario() {
        if (currentScenario >= scenarios.length) {
            showOutcome();
            return;
        }

        const scenario = scenarios[currentScenario];
        scenarioDiv.innerHTML = `<p>${scenario.scenario}</p>`;
        choicesDiv.innerHTML = scenario.choices.map((choice, index) => 
            `<button onclick="makeChoiceNewRight(${index})">${choice.text}</button>`
        ).join('<br>');

        policySpan.textContent = policy;
        supportSpan.textContent = support;
        unitySpan.textContent = unity;
    }

    window.makeChoiceNewRight = function(choiceIndex) {
        const scenario = scenarios[currentScenario];
        const choice = scenario.choices[choiceIndex];

        policy += choice.policyChange;
        support += choice.supportChange;
        unity += choice.unityChange;

        policy = Math.max(0, Math.min(100, policy));
        support = Math.max(0, Math.min(100, support));
        unity = Math.max(0, Math.min(100, unity));

        currentScenario++;
        displayScenario();
    };

    function showOutcome() {
        scenarioDiv.style.display = 'none';
        choicesDiv.style.display = 'none';
        outcomeDiv.style.display = 'block';

        let outcome = '';
        if (policy >= 60 && support >= 60 && unity >= 60) {
            outcome = 'Great job! You balanced policy priorities, public support, and party unity. The Contract with America leads to a massive Republican victory, securing a congressional majority and cementing the New Right’s influence for years to come.';
            document.getElementById('cheer').play();
        } else if (policy >= 50 || support >= 50 || unity >= 50) {
            outcome = 'Not bad! You managed to push the Contract with America forward, but some challenges remain. The Republicans gain seats, but party divisions and public skepticism make the victory less decisive.';
            document.getElementById('applause').play();
        } else {
            outcome = 'Oh no! Your decisions led to a fractured party and a lukewarm public response. The Contract with America fails to resonate, and the Republicans struggle to gain a majority in Congress.';
            document.getElementById('boo').play();
        }

        outcomeDiv.innerHTML = `<p>${outcome}</p><button onclick="startGameNewRight()">Play Again</button>`;
    }

    displayScenario();
}
