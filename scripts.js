document.addEventListener('DOMContentLoaded', (event) => {
    loadNotes();
    openTab('current-notes');
    displayQuote();
});

const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt",
    "It always seems impossible until it's done. – Nelson Mandela",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
];

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

function toggleComplete(cell) {
    cell.classList.toggle('completed');
}

function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

function saveNotes() {
    const notes = document.getElementById('notes').value;
    localStorage.setItem('savedNotes', notes);
}

function loadNotes() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
        document.getElementById('notes').value = savedNotes;
    }
}

function saveNewNote() {
    const newNoteContent = document.getElementById('new-note-content').value;
    if (newNoteContent) {
        const currentNotes = localStorage.getItem('savedNotes') || '';
        const updatedNotes = currentNotes + '\n\n' + newNoteContent;
        localStorage.setItem('savedNotes', updatedNotes);
        document.getElementById('notes').value = updatedNotes;
        document.getElementById('new-note-content').value = '';
    }
}
function toggleComplete(cell) {
    cell.classList.toggle('completed');
}
