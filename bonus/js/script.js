/* 
click button "Avvia Gioco" = visualizzo le celle sul playground
click singola cella sfondo blu e in console visualizzo indice casella
*/

/*
select per selezionare tipologia di difficoltà del gioco 
in base alla difficoltà scelta stamperò un numero di diverso di celle
*/

campoMinato();

function campoMinato(){
    const btn = document.querySelector("button");
    
    btn.addEventListener("click", function(){
        const optionLiv = select.selectedIndex;
        console.log(optionLiv);
        const playground = document.getElementById("playground");
        playground.innerHTML = " ";
        let numberCell;
        switch (optionLiv){
            case 1:
                numberCell = 100;
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
        }
        // ciclo for per visualizzare 100 celle 
    });
    
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};
  
