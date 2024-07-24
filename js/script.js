const generate = document.getElementById(`generate`);

let points = 0;

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

    cellsContainer.innerHTML = ``;

    for (let i = 1; i <= cellsNumber; i++) {
        const newCell = document.createElement(`div`);
        newCell.innerHTML = i;

        // funzione click
        newCell.addEventListener(`click`, function () {        
            //this.classList.toggle(`lightcoral`);
            //console.log(this.innerHTML);

            const cellNumber = parseInt(this.innerText);
            console.log(cellNumber);
            
            // condizione per click su bombs
            if (bombs.includes(cellNumber)) {
                this.classList.add(`bomb`);
            }
            else {
                this.classList.add(`not-bomb`);
                points += 1;
                console.log(`punteggio:`, points);
            }
        });
        cellsContainer.append(newCell);
    }
})

// funzione numeri random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};