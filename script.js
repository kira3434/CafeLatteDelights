function toggleNavbarItems() {
    var navbarItems = document.getElementById("navbar-itens");
    if (navbarItems.style.display === "none") {
        navbarItems.style.display = "block";
    } else {
        navbarItems.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.addEventListener('click', toggleNavbarItems);
});
