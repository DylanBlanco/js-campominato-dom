/*// genera 16 numRandom da 1 a 100
let cellNumber = 100;
// richiama numRandom
const bombs = numRandom ();
function numRandom () {
    // lista numRandom
    let bombs = [];
    // genera num. random da 1 a 100
    for (let i=1; i < 17; i++) {
        let randomNumber = generateRandomNumber(1,cellNumber); //Math.floor(Math.random() * 100 )+ 1;
        console.log (`num. casuale:`, randomNumber.length);

        if (!bombs.includes.apply(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
}


// condizione fine gioco
if (partitanonterminata) {
    const numberIncell = parseInt(this.innerText);
    console.log(numberIncell);
    // condizione bombs
    if (bombs.include(numberIncell)) {
        this.classList.add(`bomb`);
    }
    else {
        this.classList.add(`not-bomb`);
    }
}
else {
    alert (`partita terminata`);
}

*/

const generate = document.getElementById(`generate`);

generate.addEventListener(`click`,function (event) {
    //blocca comportamento di default
    event.preventDefault();

    const cellsContainer = document.querySelector(`.cells-container`);
    
    let cellsNumber = 100;
    
    const bombs = [];
    while (bombs.length < 16) {
        const randomNumber = generateRandomNumber(1, cellsNumber);
        // console.log(`random number:`, randomNumber, typeof randomNumber);
        
        if (bombs.includes(randomNumber) == false) {
            bombs.push(randomNumber);
        }
    }
    console.log(`bombs`, bombs, typeof bombs);

    for (let i = 1; i <= cellsNumber; i++) {
        const newCell = document.createElement(`div`);
        newCell.innerText = i;
        newCell.addEventListener(`click`, function () {        
            newCell.classList.toggle(`lightcoral`);
            console.log(newCell.innerHTML);
        });
        cellsContainer.append(newCell);
    }
})


// funzione numeri random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};