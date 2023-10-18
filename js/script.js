/* 
click button "Avvia Gioco" = visualizzo le celle sul playground
click singola cella sfondo blu e in console visualizzo indice casella
*/

/*
select per selezionare tipologia di difficoltà del gioco 
in base alla difficoltà scelta stamperò un numero di diverso di celle
*/

const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    const numberCell = 100;
    const playground = document.getElementById("playground");
    // ciclo for per visualizzare 100 celle 
    for (let i = 1; i <= numberCell; i++){
        const squareEl = displayCell();
        playground.append(squareEl);
    }
});

function displayCell(){
    // creo div che formerà la cella a cui assegno le rispettive classi
    let singCell = document.createElement("div");
    singCell.classList.add("cell");
    singCell.addEventListener("click", function(){
        singCell.classList.add("changeCol")
    });
    return singCell;
}
