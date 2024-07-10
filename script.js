// Funzione per mostrare un messaggio di alert con il nome dell'immagine e riprodurre un suono
function showDetails(button) {
    const imageAlt = button.previousElementSibling.alt;
    alert("Hai cliccato su: " + imageAlt);

    // Riproduci il suono
    const sound = document.getElementById('buttonSound');
    sound.play();
}

// Aggiunge event listener a tutti i pulsanti "Mostra Dettagli"
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-details-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            showDetails(this);
        });
    });
});
