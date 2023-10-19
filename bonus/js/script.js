/* 
click button "Avvia Gioco" = visualizzo le celle sul playground
click singola cella sfondo blu e in console visualizzo indice casella
*/

/*
select per selezionare tipologia di difficoltà del gioco 
in base alla difficoltà scelta stamperò un numero di diverso di celle
*/

/*
Programma deve generare 16 numeri causali nello stesso range della difficoltà prescelta = le bombe (ogni qudratino è un numero, selezioni random 16 di questi numeri dove assegno la bomba)
*/

"use strict";
campoMinato();

/**
 * main function del gioco Campo Minato
 */
function campoMinato(){
    const btn = document.querySelector("button");
    
    btn.addEventListener("click", playGame);

    /**
     * funzione per riprodurre celle in base al livello selezionato
     */
    function playGame(){
        const optionLiv = select.selectedIndex;
        console.log(optionLiv);
        const playground = document.getElementById("playground");
        playground.innerHTML = " ";
        let numberCell;
        switch (optionLiv){
            case 1:
                numberCell = 100;
                // ciclo for per visualizzare 100 celle 
                for (let i = 1; i <= numberCell; i++){
                    const squareEl = displayCell(numberCell, i);
                    playground.append(squareEl); 
                };
                break;
            case 2:
                numberCell = 81;
                for (let i = 1; i <= numberCell; i++){
                    const squareEl = displayCell(numberCell, i);
                    playground.append(squareEl);
                };
                break;
            case 3:
                numberCell = 49;
                for (let i = 1; i <= numberCell; i++){
                    const squareEl = displayCell(numberCell, i);
                    playground.append(squareEl);
                };
                break;
            default:
                playground.innerHTML = `
                <div class="m-auto text-center text-light"> Seleziona un livello
                </div>
                `;
        };
        getNumBomb(numberCell);
    };

    
    /**
     * funzione genero un array contenente 16 numeri random corrispondendi alle posizioni delle bombe
     * @param {Number} numberCell 
     */
    function getNumBomb(numberCell){
        const numBombs = 16;
            const arrayBombs = [];
            while(arrayBombs.length < numBombs){
                let bomb = getRandomInt(1, numberCell);
                console.log(bomb);
                if(!arrayBombs.includes(bomb)){
                    arrayBombs.push(bomb);
                    console.log(arrayBombs);
                }
            }
    }
    /**
     * funzione che crea un quadratino
     * @param {Number} numberCell 
     * @param {Number} IndexCell 
     * @returns {Object} quadrato creato 
     */
    function displayCell(numberCell, IndexCell){
        const numCellSq = Math.sqrt(numberCell);
        // creo div che formerà la cella a cui assegno le rispettive classi
        let singCell = document.createElement("div");
        singCell.classList.add("cell");
        singCell.style.width = `calc(100% / ${numCellSq})`;
        singCell.style.height = `calc(100% / ${numCellSq})`;
        singCell.addEventListener("click", () => {
            singCell.style.backgroundColor = "blue";
            singCell.style.transition = "1s";
        },{once:true});
        return singCell;
    };
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};
