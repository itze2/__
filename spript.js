const cards = document.querySelectorAll(".card");
const text = document.getElementById("text");

let index = 0;

const descriptions = [
    "Vela de lavanda: ayuda a relajarte y reducir el estrés.",
    "Vela de vainilla: aroma dulce que genera tranquilidad.",
    "Vela de canela: aroma cálido ideal para ambientes acogedores."
];

function updateCarousel() {
    cards.forEach(card => {
        card.classList.remove("active", "left", "right");
    });

    cards[index].classList.add("active");

    let prev = (index - 1 + cards.length) % cards.length;
    let next = (index + 1) % cards.length;

    cards[prev].classList.add("left");
    cards[next].classList.add("right");

    text.textContent = descriptions[index];
}

/* 🔥 CLICK EN CARTAS */
cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

/* Inicial */
updateCarousel();