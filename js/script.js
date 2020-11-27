// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


$(document).ready (
  function() {

    // 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
    // var dati = [];
    // var studente = {
    // nome: "Fortunato",
    // cognome: "Sambataro",
    // eta: 27,
    // };
    //
    // for (var key in studente) {
    //   $(".stampa").append(key + ": " + studente[key] + "<br>");
    // };

    // fine esercizio 1 -----------------------

    //  2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
    // var studenti = [
    //   {
    //     "nome": "Fortunato",
    //     "cognome": "Sambataro",
    //   },
    //   {
    //     "nome": "Franco",
    //     "cognome": "Franchi",
    //   },
    // ]
    //
    // for(var i = 0; i < studenti.length; i++) {
    //   for (key in studenti[i]) {
    //     if(key == "nome") {
    //       $(".stampa").append("utente: " + studenti[i][key] + "<br>");
    //     } else if (key == "cognome"){
    //       $(".stampa").append(studenti[i][key] + "<br>");
    //     } else {
    //       console.log(studenti[i]);
    //     }
    //   }
    // }


    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    // creo array di dati studente
    var studente = [
      {nome: "Fortunato",
       cognome: "Sambataro",
       eta: 27,
      },
    ];

    // creo prompt con ciclo e  switch e un oggetto vuoto dove inserire i datiUtente
    var datoRichiesto = "";
    var inputUtente;
    var datiUtente = {};

    for(var i = 0; i < 3; i++) {

      switch (i) {
        case 0:
         datoRichiesto = "età";
         inputUtente = "eta";
         break;

         case 1:
           datoRichiesto = "cognome";
           inputUtente = "cognome";
           break;

        case 2:
          datoRichiesto = "nome";
          inputUtente = "nome";
          break;
      }

      if(i == 0) {
        var dato = parseInt(prompt("Quale è la tua" + datoRichiesto + "?"));
      } else {
        var dato = prompt("Quale è il tuo " + datoRichiesto + "?");
      }

      datiUtente[inputUtente] = dato;
    }
    // pusho i datiUtente nell'array studente
    studente.push(datiUtente);
    console.log(datiUtente);

    console.log(studente);





  }
)
