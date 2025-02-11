
document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/navbar.html') 
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; 
        })
        .catch(error => console.error('Eroare la încărcarea header-ului:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/footer.html') 
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("footer-container").innerHTML = data; 
        })
        .catch(error => console.error('Eroare la încărcarea header-ului:', error));
});

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
