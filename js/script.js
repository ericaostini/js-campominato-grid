/* 
click button "Avvia Gioco" = visualizzo le celle sul playground
click singola cella sfondo blu e in console visualizzo indice casella
*/
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    const numberCell = 100;
    const playground = document.getElementById("playground");
    console.log(playground);
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
    console.log(singCell);
    singCell.addEventListener("click", function(){
        singCell.classList.add("changeCol")
    });
    return singCell;
}