// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo informazioni all'utente
const userChoice = prompt("PARI o DISPARI?")
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userChoice, userNumber);
alert("Hai lanciato un " + userNumber);

// Creo variabile per lancio numero al computer
const computerNumber = randomNumber();
alert("Ho lanciato un " + computerNumber);

console.log(computerNumber);

gameResult(userNumber, computerNumber, userChoice);

// funzione per fare la sommma dei risultati e condizioni per stabilire il vincitore
function gameResult(userNumber, computerNumber, userChoice) {
    let sum = userNumber + computerNumber;

    console.log(sum);


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
// creo funzione del per numero casuale computer
function randomNumber() {
    const rndNumber = Math.floor(Math.random() * 5) + 1;
    return rndNumber;
}
