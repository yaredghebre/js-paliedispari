// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Creo prompt
const displayWord = prompt("Per favore inserisci una parola");
// Definisco costante per estrarre dal prompt
const userWord = isPalindromeOrNormal(displayWord);

// Creo funzione con al suo interno ciclo FOR 
function isPalindromeOrNormal(insertWord) {

    let word = insertWord.length;

    for (let i = 0; i <  word / 2; i++) {
        // creo condizione con al suo interno algoritmo per dividere a metà la parola e confrontarne le due parti
        if (insertWord [i] !== insertWord [word - 1 -i]) {
            console.log("NON Palindroma");
            alert ("Hai inserito una parola NON PALINDROMA!")
        } else {
            console.log(("Palindroma"));
            alert("Hai inserito una parola PALINDROMA!")
        }
    }
    // Chiudo funzione con il return
    return word;
}

