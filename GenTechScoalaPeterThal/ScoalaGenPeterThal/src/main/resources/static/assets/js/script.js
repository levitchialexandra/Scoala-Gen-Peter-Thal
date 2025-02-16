
document.addEventListener("DOMContentLoaded", function () {
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error('Eroare la încărcarea header-ului:', error));
    setTimeout(() => {
        const currentPath = window.location.pathname.toLowerCase();
        document.querySelectorAll('.nav-item .nav-link.active').forEach(el => el.classList.remove('active'));
        if (currentPath.indexOf("orar") > -1 || currentPath.indexOf("biblioteca") > -1 || currentPath.indexOf("ghidul") > -1) {
            const activeLink = document.querySelector(`.dropdown-item[href="${currentPath}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                (document.querySelectorAll(".resurseMenu"))[0].classList.add("active");

            }
            return;
        }
      
        const activeLink = document.querySelector(`.nav-item .nav-link[href="${currentPath}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
       
    }, 200);

});

document.addEventListener("DOMContentLoaded", function () {
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error('Eroare la încărcarea header-ului:', error));
});

document.querySelectorAll('.flip-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


function copyToClipboard(element) {
    const textElement = element.querySelector(".text-to-copy"); // Find the child <p>
    const originalText = textElement.innerText; // Save original text
    const textCopied = textElement.getAttribute("data-value"); // Get "copied" message

    // Copy text to clipboard
    navigator.clipboard.writeText(originalText)
        .then(() => {
            // Change text to "Text copiat!"
            textElement.innerText = textCopied;

            // Restore original text after 2 seconds
            setTimeout(() => {
                textElement.innerHTML = originalText; // Restore innerHTML to keep <br> tags
            }, 1500);
        })
        .catch(err => console.error("Error copying text: ", err));
}