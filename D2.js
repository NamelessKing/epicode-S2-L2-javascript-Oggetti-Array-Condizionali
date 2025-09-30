/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1:");
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(num1 + " è il numero più grande.");
} else if (num2 > num1) {
  console.log(num2 + " è il numero più grande.");
} else {
  console.log("I numeri sono uguali.");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2:");
let numero = 7;

if (numero !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3:");
let num = 15;

if (num % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4:");
let a = 3;
let b = 5;

if (a === 8 || b === 8 || (a + b) === 8 || Math.abs(a - b) === 8) {
  console.log("Una delle condizioni è vera.");
} else {
  console.log("Nessuna delle condizioni è vera.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5:");
let totalShoppingCart = 60;
let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("Totale da addebitare: " + totalShoppingCart + " (spedizione gratuita)");
} else {
  let totalWithShipping = totalShoppingCart + shippingCost;
  console.log("Totale da addebitare: " + totalWithShipping + " (inclusa spedizione di " + shippingCost + ")");
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6:");
let blackFridayDiscount = 0.20;
let discountedTotal = totalShoppingCart * (1 - blackFridayDiscount);

if (discountedTotal > 50) {
  console.log("Totale da addebitare: " + discountedTotal + " (spedizione gratuita)");
} else {
  let totalWithShippingBF = discountedTotal + shippingCost;
  console.log("Totale da addebitare: " + totalWithShippingBF + " (inclusa spedizione di " + shippingCost + ")");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7:");
let x = 15;
let y = 10;
let z = 20;
let sortedNumbers = [];

if (x >= y && x >= z) {
  sortedNumbers.push(x);
  if (y >= z) {
    sortedNumbers.push(y, z);
  } else {
    sortedNumbers.push(z, y);
  }
} else if (y >= x && y >= z) {
  sortedNumbers.push(y);
  if (x >= z) {
    sortedNumbers.push(x, z);
  } else {
    sortedNumbers.push(z, x);
  }
} else {
  sortedNumbers.push(z);
  if (x >= y) {
    sortedNumbers.push(x, y);
  } else {
    sortedNumbers.push(y, x);
  }
}

console.log("Numeri ordinati dal più alto al più basso: " + sortedNumbers.join(", "));

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8:");
let value = 42;

if (typeof value === 'number') {
  console.log(value + " è un numero.");
} else {
  console.log(value + " non è un numero.");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9:");
let numeroControllo = 9;

if (numeroControllo % 2 === 0) {
  console.log(numeroControllo + " è un numero pari.");
} else {
  console.log(numeroControllo + " è un numero dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10:");
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 11:");
me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 12:");
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 13:");
me.skills.pop();
console.log(me.skills);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 14:");
let numbersArray = [];
for (let i = 1; i <= 10; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 15:");
numbersArray[numbersArray.length - 1] = 100;
console.log(numbersArray);
