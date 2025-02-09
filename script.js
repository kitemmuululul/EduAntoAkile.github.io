document.addEventListener("DOMContentLoaded", function() {
    const maze = document.getElementById("maze");
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");

    // Costruzione del labirinto
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        maze.appendChild(cell);
    }

    // Definizione della posizione finale
    const cells = maze.querySelectorAll(".cell");
    const finishCell = cells[cells.length - 1];
    finishCell.classList.add("finish");

    // Definizione del giocatore
    let playerPosition = 0;
    cells[playerPosition].classList.add("player");

    // Funzione per muovere il giocatore
    function movePlayer(event) {
        switch (event.key) {
            case "ArrowRight":
                movePlayerTo(playerPosition + 1);
                break;
            case "ArrowLeft":
                movePlayerTo(playerPosition - 1);
                break;
            case "ArrowDown":
                movePlayerTo(playerPosition + 5);
                break;
            case "ArrowUp":
                movePlayerTo(playerPosition - 5);
                break;
        }
    }

    // Funzioni per muovere il giocatore con i pulsanti
    leftButton.addEventListener("click", function() {
        if (playerPosition % 5 > 0) {
            movePlayerTo(playerPosition - 1);
        }
    });

    rightButton.addEventListener("click", function() {
        if (playerPosition % 5 < 4) {
            movePlayerTo(playerPosition + 1);
        }
    });

    upButton.addEventListener("click", function() {
        if (playerPosition - 5 >= 0) {
            movePlayerTo(playerPosition - 5);
        }
    });

    downButton.addEventListener("click", function() {
        if (playerPosition + 5 < 25) {
            movePlayerTo(playerPosition + 5);
        }
    });

    // Funzione per spostare il giocatore a una nuova posizione
    function movePlayerTo(newPosition) {
        cells[playerPosition].classList.remove("player");
        playerPosition = newPosition;
        cells[playerPosition].classList.add("player");
        checkForWin();
    }

    // Controllo se il giocatore ha vinto
    function checkForWin() {
        if (cells[playerPosition].classList.contains("finish")) {
            alert("Hai vinto! Complimenti!");
            maze.removeEventListener("keydown", movePlayer);
            showFinalMessage();
        }
    }

    // Mostra la frase finale dopo la vittoria
    function showFinalMessage() {
        maze.innerHTML = "<h2>Complimenti! Hai completato il labirinto.</h2>";
        maze.style.textAlign = "center";
    }

    // Aggiungi il listener per il movimento del giocatore
    maze.addEventListener("keydown", movePlayer);
});
