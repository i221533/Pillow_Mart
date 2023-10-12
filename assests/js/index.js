let menu_bar = document.querySelector(".btn-menu"); // Corrected selector
let closing_bar = document.querySelector(".btn-closing");
let navigation = document.querySelector(".Navbar");

menu_bar.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    navigation.classList.add("active2");
})

closing_bar.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    navigation.classList.remove("active2");
})
