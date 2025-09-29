/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let numerico;
numerico = 1;
console.log("Esempio numerico:", numerico);

let stringa = "stringa";
stringa = "stringa";
console.log("Esempio di stringa:", stringa);

let boolean;
boolean = true;
console.log("Esempio di boolean:", boolean);

let indefinito;
indefinito = undefined;
console.log("Esempio di indefinito:", indefinito);

let nullo;
nullo = null;
console.log("Esempio di nullo:", nullo);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const myName = "Filippo";
console.log("Esempio costante myName:", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addizione;
addizione = 12 + 20;
console.log("Esempio addizione 12+20:", addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;
console.log("Valore variabile x:", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// L'HO SCRITTO ALLA FINE PER NON FAR USCIRE QUI L'ERRORE CHE BLOCCA TUTTI GLI ESERCIZI RIMANENTI

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione;
sottrazione = 4 - x;
console.log("Esempio sottrazione tra lettera e numero", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1;
name1 = "john";
console.log("Valore name1:", name1);
let name2;
name2 = "John";
console.log("Valore name2:", name2);

let uguaglianza;
uguaglianza = name1 === name2;
console.log("Esempio diversità name1 === name2:", uguaglianza);

// EXTRA
let EXTRA;
EXTRA = name1 === "john";
console.log("Esempio uguaglianza name1 === john", EXTRA);

// ESERCIZIO 5

myName = "Timo";
