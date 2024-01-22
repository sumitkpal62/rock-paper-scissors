const choices = document.querySelectorAll('.option');
const compChoices = ['rock', 'paper', 'scissors'];
const msg = document.querySelector('.msg');
let you = document.querySelector('.user-win');
let comp = document.querySelector('.comp-win');

let winner = '';
let youCount = 0;
let compCount = 0;

const genChoice = () => {
    return Math.floor(Math.random() * 3);
}

const comparision = (userSelection, compSelection) => {
    if (userSelection == compSelection) {
        return 'Its draw!';
    }
    else if (userSelection == 'rock') {
        return compSelection == 'paper' ? 'You lose!' : 'You win!';
    }
    else if (userSelection == 'paper') {
        return compSelection == 'scissors' ? 'You lose!' : 'You win!';
    }
    else {
        return compSelection == 'rock' ? 'You lose!' : 'You win!';
    }

}

const showResult = (result) => {
    if (result == 'Its draw!') {
        msg.style.backgroundColor = '#E6AF2E';
    }
    else if (result == 'You lose!') {
        msg.style.backgroundColor = 'red';
        comp.innerText = ++compCount;
    }
    else if (result == 'You win!') {
        msg.style.backgroundColor = 'green';
        you.innerText = ++youCount;
    }
    msg.innerText = result;
}

const clicked = (a) => {
    a.addEventListener('click', () => {
        let userSelection = a.getAttribute('id');
        let compSelection = compChoices[genChoice()];
        winner = comparision(userSelection, compSelection);
        showResult(winner);
    })
}

choices.forEach(clicked);


