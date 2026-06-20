// --- SCROLL ANIMATIONS (INTERSECTION OBSERVER) ---
// This makes sections slide up dynamically as the user scrolls
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 }); // Triggers when 15% of the element is visible

    reveals.forEach(section => {
        revealOnScroll.observe(section);
    });
});

// --- HELPER FUNCTION FOR FEEDBACK ---
function displayFeedback(elementId, isCorrect, message) {
    const feedback = document.getElementById(elementId);
    feedback.innerText = message;
    if (isCorrect) {
        feedback.className = "feedback correct";
    } else {
        feedback.className = "feedback incorrect";
    }
}

// --- CODING CHALLENGES ---

function checkReverse() {
    const userAnswer = document.getElementById('reverse-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('reverse-feedback', false, "Please enter your code!");
    
    if (userAnswer.includes('split') && userAnswer.includes('reverse') && userAnswer.includes('join')) {
        displayFeedback('reverse-feedback', true, "Correct! split(), reverse(), and join() is the way to go.");
    } else {
        displayFeedback('reverse-feedback', false, "Not quite. Hint: Try converting the string to an array first.");
    }
}

function checkPalindrome() {
    const userAnswer = document.getElementById('palindrome-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('palindrome-feedback', false, "Please enter your code!");

    if (userAnswer.includes('===') || userAnswer.includes('==')) {
        displayFeedback('palindrome-feedback', true, "Correct! You usually reverse the string and check if it exactly equals (===) the original.");
    } else {
        displayFeedback('palindrome-feedback', false, "Hint: How do you check if the original string is the EXACT same as a reversed version?");
    }
}

function checkFizzBuzz() {
    const userAnswer = document.getElementById('fizzbuzz-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('fizzbuzz-feedback', false, "Please enter your code!");

    if ((userAnswer.includes('% 3') && userAnswer.includes('% 5')) || userAnswer.includes('% 15')) {
        displayFeedback('fizzbuzz-feedback', true, "Correct! Using the modulo operator (%) to check remainders for 15 (or 3 and 5) is the right logic.");
    } else {
        displayFeedback('fizzbuzz-feedback', false, "Hint: You need to use the modulo operator (%) to find remainders.");
    }
}

function checkMax() {
    const userAnswer = document.getElementById('max-answer').value;
    if (userAnswer === "") return displayFeedback('max-feedback', false, "Please enter your code!");

    if (userAnswer.includes('Math.max') || userAnswer.includes('...')) {
        displayFeedback('max-feedback', true, "Correct! Math.max(...arr) using the spread operator is the cleanest way!");
    } else {
        displayFeedback('max-feedback', false, "Hint: Look into the JavaScript Math object.");
    }
}

function checkFactorial() {
    const userAnswer = document.getElementById('factorial-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('factorial-feedback', false, "Please enter your code!");

    if (userAnswer.includes('*') || userAnswer.includes('multiply')) {
        displayFeedback('factorial-feedback', true, "Correct! You need to multiply (*) the numbers sequentially.");
    } else {
        displayFeedback('factorial-feedback', false, "Hint: Factorials are all about 5 x 4 x 3 x 2 x 1.");
    }
}

function checkVowels() {
    const userAnswer = document.getElementById('vowels-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('vowels-feedback', false, "Please enter your code!");

    if (userAnswer.includes('match') || userAnswer.includes('regex') || userAnswer.includes('includes') || userAnswer.includes(/[aeiou]/)) {
        displayFeedback('vowels-feedback', true, "Correct! Using Regular Expressions (RegEx) with .match() is highly effective here.");
    } else {
        displayFeedback('vowels-feedback', false, "Hint: Think about Regular Expressions or the .includes() method.");
    }
}

// --- LOGIC PUZZLES ---

function checkJug() {
    const userAnswer = document.getElementById('jug-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('jug-feedback', false, "Please explain your solution!");

    if (userAnswer.includes("5") && userAnswer.includes("3") && (userAnswer.includes("4") || userAnswer.includes("2"))) {
        displayFeedback('jug-feedback', true, "Great job! Fill 5, pour to 3, leaving 2. Empty 3, move the 2. Fill 5, top off 3 (takes 1), leaving 4 in the big jug!");
    } else {
        displayFeedback('jug-feedback', false, "Hmm, try filling the 5-liter jug first.");
    }
}

function checkRiver() {
    const userAnswer = document.getElementById('river-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('river-feedback', false, "Please enter your answer!");

    if (userAnswer.includes('goose') && !userAnswer.includes('fox') && !userAnswer.includes('bean')) {
        displayFeedback('river-feedback', true, "Correct! You MUST take the goose first, because the fox won't eat the beans.");
    } else {
        displayFeedback('river-feedback', false, "Hint: Which two animals/items are perfectly safe to leave alone together?");
    }
}

function checkGuards() {
    const userAnswer = document.getElementById('guards-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('guards-feedback', false, "Please enter your answer!");

    if (userAnswer.includes('other guard') || userAnswer.includes('he say') || userAnswer.includes('they say')) {
        displayFeedback('guards-feedback', true, "Correct! Ask one guard what the OTHER guard would say, and then pick the opposite door.");
    } else {
        displayFeedback('guards-feedback', false, "Hint: You need a question that loops the liar's logic and the truth-teller's logic together.");
    }
}

function checkMarbles() {
    const userAnswer = document.getElementById('marbles-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('marbles-feedback', false, "Please enter your answer!");

    if (userAnswer.includes('3') || userAnswer.includes('three')) {
        displayFeedback('marbles-feedback', true, "Correct! You split them into groups of 3. Weigh 3 vs 3. If they balance, it's in the unweighed pile!");
    } else {
        displayFeedback('marbles-feedback', false, "Hint: You don't have to put ALL the marbles on the scale. Try dividing 9 by 3.");
    }
}

function checkMonty() {
    const userAnswer = document.getElementById('monty-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('monty-feedback', false, "Please enter your answer!");

    if (userAnswer.includes('switch') || userAnswer.includes('change')) {
        displayFeedback('monty-feedback', true, "Correct! Mathematically, switching gives you a 2/3 chance of winning!");
    } else if (userAnswer.includes('stay')) {
        displayFeedback('monty-feedback', false, "Actually, staying only gives you a 1/3 chance of winning. You should switch!");
    } else {
         displayFeedback('monty-feedback', false, "Hint: Type 'stay' or 'switch'.");
    }
}

function checkRopes() {
    const userAnswer = document.getElementById('ropes-answer').value.toLowerCase();
    if (userAnswer === "") return displayFeedback('ropes-feedback', false, "Please enter your answer!");

    if (userAnswer.includes('3') || userAnswer.includes('three')) {
        displayFeedback('ropes-feedback', true, "Correct! Light Rope 1 at BOTH ends, and Rope 2 at ONE end. That's 3 ends. When Rope 1 burns out (30 mins), light the other end of Rope 2!");
    } else {
        displayFeedback('ropes-feedback', false, "Hint: You can light a rope from both sides to make it burn twice as fast.");
    }
}