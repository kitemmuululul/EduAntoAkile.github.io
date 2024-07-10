// Funzione per mostrare un messaggio di alert con il nome dell'immagine
function showAlert(imageName) {
    alert("Hai cliccato su: " + imageName);
}

// Aggiunge event listener a tutti i pulsanti "Mostra Dettagli"
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-details-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const imageAlt = this.previousElementSibling.alt;
            showAlert(imageAlt);
        });
    });
});
