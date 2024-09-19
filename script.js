// Arrays with data for the random message
const subjects = ['The universe', 'Your future', 'A wise person', 'The stars', 'The cosmos'];
const verbs = ['is guiding', 'will surprise', 'foresees', 'blesses', 'hints towards'];
const complements = ['great things for you.', 'a wonderful opportunity.', 'a challenge to overcome.', 'a new adventure.', 'unexpected news.'];

// Function to generate a random index based on the array length
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function to generate a random message
function generateMessage() {
    const randomSubject = subjects[getRandomIndex(subjects)];
    const randomVerb = verbs[getRandomIndex(verbs)];
    const randomComplement = complements[getRandomIndex(complements)];
    
    return `${randomSubject} ${randomVerb} ${randomComplement}`;
}

// Updated to display on the webpage
function displayMessage() {
    const message = generateMessage();
    document.getElementById('message').textContent = message;
}

