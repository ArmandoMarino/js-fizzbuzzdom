console.log("JS OK");

// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al 
// nostro programma così come lo faremmo "a mano"
// Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore


// BONUS 1:
// Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
// Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore
//  inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Come abbiamo visto puoi  usare varie tecniche (style , className, classList)


// PRENDO GLI ELEMENTI DAL DOM
const wrapperContent = document.getElementById("wrapper"); 
console.log(wrapperContent);


// ? Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// ? per i multipli di 3 stampi “Fizz” al posto del numero
// ? per i multipli di 5 stampi “Buzz” al posto del numero.
// ? Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


let content = `<div class="row gx-5 text-center justify-content-between">`;


for (var i = 1; i < 101; i++) 
    if (i % 15 == 0){
        content += `
        <div class="multiple-15 g-1 col-1 d-flex align-items-center justify-content-center">
            FizzBuzz
        </div>`;
        console.log("FizzBuzz");
    } 
    else if (i % 3 == 0){
        content += `
        <div class="multiple-3 g-1 col-1 d-flex align-items-center justify-content-center">
            Fizz
        </div>`;
        console.log("Fizz");
    } 
    else if (i % 5 == 0){
        content += `
        <div class="multiple-5 g-1 col-1 d-flex align-items-center justify-content-center">
            Buzz
        </div>`;
        console.log("Buzz");
    } 
    else {
        content += `
        <div class="normal g-1 col-1 d-flex align-items-center justify-content-center">
            ${i}
        </div>`;
        console.log(i);
}

wrapperContent.innerHTML = content;


