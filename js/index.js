const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const id = card.dataset.id;

        window.location.href = `pages/product.html?id=${id}`;
    });
});