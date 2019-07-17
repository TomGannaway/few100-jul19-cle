//const squares = document.querySelectorAll('.square');

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let squares: NodeList;
let message: HTMLElement;

export function runApp() {
    let secretSquareId: number;
    const promise = fetch('http://localhost:3000/game');
    console.log('making your request');
    promise.then((response) => {
        response.json().then(x => {
            secretSquareId = x.secret;
            console.log('secretSquareId:' + secretSquareId);
        })
    })

    squares = document.querySelectorAll('.square');
    //const secretSquareId = getRandomInt(1, 9);
    message = document.getElementById('message');
    message.innerText = 'Play the game!';

    squares.forEach((square, index) => {
        const that = square as HTMLElement;
        that.classList.remove('winner', 'loser');

        if (index + 1 === secretSquareId) {
            that.dataset.secret = "true";
        }
        square.addEventListener('click', handleClick);
    });
}

function handleClick(evt) {
    console.log({ evt, this: this });
    const that = this as HTMLElement;
    if (that.dataset.secret) {
        that.classList.add('winner');

        message.innerText = 'You Win! (click here to play again)';
        squares.forEach((square: HTMLElement) => {
            if (!square.classList.contains('winner')) {
                square.classList.remove('loser');
                square.classList.add('loser');
            }
            square.removeEventListener('click', handleClick);
        })
    }
    else {
        that.classList.add('loser');
    }
}