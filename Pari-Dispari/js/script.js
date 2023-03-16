// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const userChoice = prompt("PARI o DISPARI?")
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
// const userResult = oddOrEven(userNumber);
console.log(userChoice, userNumber);
alert("Hai lanciato un " + userNumber);

const computerNumber = randomNumber();
alert("Ho lanciato un " + computerNumber);

console.log(computerNumber);

gameResult(userNumber, computerNumber, userChoice);

function gameResult(userNumber, computerNumber, userChoice) {
    let sum = userNumber + computerNumber;

    console.log(sum);

    let result;
    if (sum % 2 === 0) {
        console.log("even");
        if (userChoice === "PARI") {
            alert("Hai vinto");
        } else {
            alert("Hai perso");
        }

    } else {
        console.log("odd");
        if (userChoice === "DISPARI") {
            alert("Hai vinto");
        } else {
            alert("Hai perso");
        }
    }
  
}

function randomNumber() {
    const rndNumber = Math.floor(Math.random() * 5) + 1;
    return rndNumber;
}
