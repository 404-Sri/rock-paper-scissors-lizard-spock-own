'use strict';

const result = document.getElementById('result');
let [computer_score, user_score] = [0, 0];


//when user clicks
//generate a random choice of the computer languages
//it should compare the com choice with user choice
//it should show a message about
//it should update the score

let gameRules = {
    Rock : {
        Rock : 'draw',
        Scissors : 'Win',
        Paper : 'lose',
        Lizard : 'win',
        Spock : 'lose',
    },
    Paper : {
        Paper : 'draw',
        Rock : 'Win',
        Scissors : 'lose',
        Lizard : 'lose',
        Spock : 'win',
    },
    Scissors : {
        Scissors : 'draw',
        Paper : 'Win',
        Rock : 'lose',
        Lizard : 'win',
        Spock : 'lose',
    },
    Lizard : {
        Lizard : 'draw',
        Rock : 'lose',
        Paper : 'win',
        Scissors : 'lose',
        Spock : 'win',
    },
    Spock : {
        Spock : 'draw',
        Rock : 'win',
        Paper : 'lose',
        Scissors : 'win',
        Lizard : 'lose',
    }
};



function clicked(input) 
{
    let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spoke'];
    let randomNumber = Math.trunc(Math.random() * 5);
    let computer_choice = choices[randomNumber];
    document.getElementById('user_choice').innerHTML = `Computer choose <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById('computer_choice').innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;


    switch(gameRules[input][computer_choice]) {
        case 'win':
            result.innerText = 'You win';
            result.style.cssText = 'background-color: #008000';
            user_score++;
            break;
        case 'lose':
            result.innerText = 'You lose';
            result.style.cssText = 'background-color: red';
            computer_score++;
            break;
        case 'draw':    
            result.innerText = 'You draw';
            result.style.cssText = 'background-color: blue';
            break;
    }
    document.getElementById('computer_score').innerHTML = computer_score;
    document.getElementById('user_score').innerHTML = user_score;
}


