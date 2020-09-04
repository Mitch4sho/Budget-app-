/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice, gamePlaying, diceArray;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random Number generator 
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display results
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //for new rule 
        diceArray.unshift(dice);

        if (diceArray[0] && diceArray[1] === 6) {
            // Player loses all points
            scores[activePlayer] = 0;

            //move to the next player
            nextPlayer();
        }
        // removes the 3rd index in the array
        if (2 < diceArray.length) {
            diceArray.pop();
        }

        //3. update the round score IF the rolled was NOT 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update UI 
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player wins
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //nextPlayer 
            nextPlayer();
        }
    }
})

//New game button 
document.querySelector('.btn-new').addEventListener('click', init);

// Init New game 
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    diceArray = [];
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none ';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    //Next Player 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //reset score 
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // add active class or remove active class for current player 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}