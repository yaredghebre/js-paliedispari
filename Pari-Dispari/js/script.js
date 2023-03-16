// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const userChoice = prompt("PARI o DISPARI?")
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
const userResult = oddOrEven(userNumber);
console.log(userChoice, userNumber);
alert("Hai lanciato un " + userNumber);

const computerChoice = prompt("Ora tocca a me! Premi invio!")
let computerNumber = Math.floor(Math.random() * 5) + 1;
alert("Ho lanciato un " + computerNumber);
console.log(computerNumber);

let sum = userNumber + computerNumber;
console.log(sum);

let gameResult = sum % 2 === 0

function oddOrEven(result) {
    let result;
    if (sum % 2 === 0) {
        result = "even";
        alert("hai vinto")
    } else {
        result = "odd";
        alert("hai perso")
    }
    return result
}







// const arrayTest = ["ciao", "salve", "buonasera",]
// // console.log(arrayTest [0][0]);

// for (let i = 0; i < (arrayTest.length); i++) {
//     console.log(arrayTest[i][1]);
// }