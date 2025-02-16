
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
        const menuLinks = document.querySelectorAll(".dropdown-menu .dropdown-item");
        (document.querySelectorAll(".dropdown-toggle"))[0].classList.remove("active");
        menuLinks.forEach(link => {
            (document.querySelectorAll(".dropdown-toggle"))[0].classList.add("active");
            const linkHref = link.getAttribute("href").toLowerCase();

            // Check if the current path matches any menu item's href
            if (currentPath.includes("orar") && linkHref.includes("orar")) {
                link.classList.add("hover-movActive");
            } else if (currentPath.includes("biblioteca") && linkHref.includes("biblioteca")) {
                link.classList.add("hover-galbenActive");
            } else if (currentPath.includes("ghidul") && linkHref.includes("ghidul")) {
                link.classList.add("hover-rozActive");
            }

        });


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
    const textElement = element.querySelector(".text-to-copy");
    const originalText = textElement.innerText;
    const textCopied = textElement.getAttribute("data-value");

    navigator.clipboard.writeText(originalText)
        .then(() => {
            textElement.innerText = textCopied;

            setTimeout(() => {
                textElement.innerHTML = originalText;
            }, 1500);
        })
        .catch(err => console.error("Error copying text: ", err));
}