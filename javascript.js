// State Management
let scores = {
    A: parseInt(localStorage.getItem('score-A')) || 0,
    B: parseInt(localStorage.getItem('score-B')) || 0
};

// UI Elements
const votingSection = document.getElementById('voting-section');
const loginSection = document.getElementById('login-section');
const scoresSection = document.getElementById('scores-section');
const adminBtn = document.getElementById('admin-btn');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const voteStatus = document.getElementById('vote-status');
const scoreA = document.getElementById('score-a');
const scoreB = document.getElementById('score-b');

// PUBLIC: Vote Function
function vote(candidate) {
    scores[candidate]++;
    localStorage.setItem(`score-${candidate}`, scores[candidate]);
    
    // Feedback to user
    voteStatus.innerText = `You voted for Candidate ${candidate}!`;
    setTimeout(() => { voteStatus.innerText = ''; }, 3000);
    
    // Update UI in case admin is watching
    updateScoresUI();
}

// Navigation Logic
function showLogin() {
    votingSection.style.display = 'none';
    loginSection.style.display = 'block';
    adminBtn.style.display = 'none';
}

function hideLogin() {
    loginSection.style.display = 'none';
    votingSection.style.display = 'block';
    adminBtn.style.display = 'block';
    loginError.style.display = 'none';
    loginForm.reset();
}

// PROTECTED: Login Logic
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('password').value;

    if (pass === '07042558') {
        loginSection.style.display = 'none';
        scoresSection.style.display = 'block';
        adminBtn.style.display = 'none';
        updateScoresUI();
    } else {
        loginError.style.display = 'block';
    }
});

function updateScoresUI() {
    scoreA.innerText = scores.A;
    scoreB.innerText = scores.B;
}

function logout() {
    scoresSection.style.display = 'none';
    votingSection.style.display = 'block';
    adminBtn.style.display = 'block';
    loginForm.reset();
}

// Initial UI Update
updateScoresUI();
