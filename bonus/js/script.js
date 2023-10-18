/* 
click button "Avvia Gioco" = visualizzo le celle sul playground
click singola cella sfondo blu e in console visualizzo indice casella
*/

/*
select per selezionare tipologia di difficoltà del gioco 
in base alla difficoltà scelta stamperò un numero di diverso di celle
*/

const btn = document.querySelector("button");
const livOne = document.getElementById("one").value;
console.log(livOne);
const livTwo = document.getElementById("two");
const livThree = document.getElementById("three");

btn.addEventListener("click", function(){
    const numberCell = 49;
    const playground = document.getElementById("playground");
    // ciclo for per visualizzare 100 celle 
    for (let i = 1; i <= numberCell; i++){
        const squareEl = displayCell(numberCell, i);
        playground.append(squareEl);
    }
});

function displayCell(numberCell, IndexCell){
    const numCellSq = Math.sqrt(numberCell);
    // creo div che formerà la cella a cui assegno le rispettive classi
    let singCell = document.createElement("div");
    singCell.classList.add("cell");
    singCell.style.width = `calc(100% / ${numCellSq})`;
    singCell.style.height = `calc(100% / ${numCellSq})`;
    singCell.addEventListener("click", function(){
        singCell.classList.add("changeCol");
        console.log("L'indice della casella è: " + IndexCell);
    });
    return singCell;
};

function displayLivOne(){
    const numberCell = 49;
}

