const products = [
    {
        id: 1,
        image: "../assets/clothes/cloth-1.webp",
        category: "MEN'S LIFESTYLE",
        name: "Arc T-Shirt",
        price: "₹ 2,499.00",
        colors: ["#1f1f1f", "#5b88b6", "#f2ead8"]
    },
    {
        id: 2,
        image: "../assets/clothes/cloth-2.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Sonic Boom Reflective T-Shirt",
        price: "₹ 2,299.00",
        colors: ["#1565d8", "#a76235", "#8b8b8b", "#ffffff"]
    },
    {
        id: 3,
        image: "../assets/clothes/cloth-3.webp",
        category: "MEN'S LIFESTYLE",
        name: "Sonic Boom Reflective T-Shirt",
        price: "₹ 2,299.00",
        colors: ["#1565d8", "#a76235", "#8b8b8b", "#ffffff"]
    },
    {
        id: 4,
        image: "../assets/clothes/cloth-4.webp",
        category: "MEN'S LIFESTYLE",
        name: "Chakra Tee",
        price: "₹ 1,999.00",
        colors: ["#2b2b2b", "#9aa67a", "#8b8b8b", "#5b88b6"]
    },
    {
        id: 5,
        image: "../assets/clothes/cloth-5.webp",
        category: "MEN'S LIFESTYLE",
        name: "Cricket Club Polo",
        price: "₹ 2,499.00",
        colors: ["#1f1f1f", "#ff8a00", "#b8d2ee", "#f3ecd9"]
    },
    {
        id: 6,
        image: "../assets/clothes/cloth-6.webp",
        category: "MEN'S LIFESTYLE",
        name: "Boom Logo Relaxed T-Shirt",
        price: "₹ 1,999.00",
        colors: ["#1f1f1f", "#f6f2e5", "#edd7a7"]
    },
    {
        id: 7,
        image: "../assets/clothes/cloth-7.webp",
        category: "MEN'S LIFESTYLE",
        name: "Cricket Ribbed Collar Sweatshirt",
        price: "₹ 4,499.00",
        colors: ["#123f7d", "#1f1f1f", "#f3ecd9"]
    },
    {
        id: 8,
        image: "../assets/clothes/cloth-8.webp",
        category: "MEN'S LIFESTYLE",
        name: "Essentials Ribbed Tee",
        price: "₹ 1,999.00",
        colors: ["#1f1f1f", "#4e342e", "#6d6a2c", "#324f8f", "#9b84ad"]
    },
    {
        id: 9,
        image: "../assets/clothes/cloth-9.webp",
        category: "MEN'S LIFESTYLE",
        name: "Cricket Club Polo",
        price: "₹ 2,499.00",
        colors: ["#1f1f1f", "#ff8a00", "#b8d2ee", "#f3ecd9"]
    },
    {
        id: 10,
        image: "../assets/clothes/cloth-10.webp",
        category: "MEN'S LIFESTYLE",
        name: "Evolve Carpenter Pants",
        price: "₹ 5,499.00",
        colors: ["#1f1f1f", "#6b6a2b", "#3b355f"]
    },
    {
        id: 11,
        image: "../assets/clothes/cloth-11.webp",
        category: "MEN'S LIFESTYLE",
        name: "Boom Logo T-Shirt",
        price: "₹ 1,999.00",
        colors: ["#1f1f1f", "#f8b7c8", "#c5e2d2", "#f2ead8"]
    },
    {
        id: 12,
        image: "../assets/clothes/cloth-12.webp",
        category: "MEN'S LIFESTYLE",
        name: "Arc T-Shirt",
        price: "₹ 2,499.00",
        colors: ["#1f1f1f", "#5b88b6", "#f2ead8"]
    }
];

// ================= Render Products =================

const productGrid = document.querySelector(".product-grid");

products.forEach(product => {

    const colorsHTML = product.colors
        .map(color => `<span class="color" style="background:${color}"></span>`)
        .join("");

    productGrid.innerHTML += `
        <div class="product-card">

            <div class="product-image">

                <div class="product-badge">
                    <span class="badge-dot"></span>
                    <span>NEW</span>
                </div>

                <button class="wishlist-btn">
                    <img src="../assets/logos/whishlist-icon.svg" alt="Wishlist">
                </button>

                <img src="${product.image}" alt="${product.name}" class="shoe-image">

            </div>

            <div class="product-info">

                <p class="category">${product.category}</p>

                <h3 class="product-name">${product.name}</h3>

                <h2 class="price">${product.price}</h2>

                <div class="product-footer">

                    <div class="colors">
                        ${colorsHTML}
                    </div>

                    <button class="cart-btn">
                        <img src="../assets/logos/shopping-bag.svg" alt="Cart">
                    </button>

                </div>

            </div>

        </div>
    `;
});