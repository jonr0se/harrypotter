// A simple function to display a wizardly message
function castSpell() {
    const spells = [
        "Lumos! 🪄 (A light appears!)",
        "Wingardium Leviosa! ✨ (Feathers float!)",
        "Alohomora! 🗝️ (The page feels unlocked!)",
        "Expecto Patronum! 🦌 (A warm feeling spreads!)",
        "Accio! ⚡ (Content feels closer!)"
    ];
    const randomSpell = spells[Math.floor(Math.random() * spells.length)];
    alert(randomSpell);
}

// Get the spell button and add an event listener
const spellButton = document.getElementById('spellButton');
if (spellButton) {
    spellButton.addEventListener('click', castSpell);
}

// Function to update the "wizard" date (optional, for fun!)
function updateWizardDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);

    const wizardYear = today.getFullYear() - 1995 + 1995; // Keeps it in the "past" but adjusts year
    const wizardDateElement = document.getElementById('current-wizard-date');
    if (wizardDateElement) {
        // We'll keep the static date from HTML for theme, but this shows how you *could* update it dynamically
        // wizardDateElement.textContent = dateString.replace(today.getFullYear(), wizardYear);
        console.log("Wizard date update function running, but using static date for theme consistency.");
    }
}

// Call the date update function when the DOM is loaded
document.addEventListener('DOMContentLoaded', updateWizardDate);

// A simple console log to show the script is running
console.log("Daily Prophet's magic is brewing...");