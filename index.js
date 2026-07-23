const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", () => {
        console.log(card);
        console.log(card.dataset);
        console.log(card.dataset.id);
        window.location.href = `product.html?id=${card.dataset.id}`;
    })
})