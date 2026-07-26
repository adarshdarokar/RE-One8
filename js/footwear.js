const products = [
    {
        id: 1,
        image: "../assets/footwear-png/shoe-1.webp",
        category: "MEN'S LIFESTYLE",
        name: "Quiet Edge",
        price: "₹ 5,499.00",
        colors: ["#dfe4ea", "#1f4a2b", "#1d1d1d"]
    },
    {
        id: 2,
        image: "../assets/footwear-png/shoe2.webp",
        category: "MEN'S LIFESTYLE",
        name: "Seam XVIII OG",
        price: "₹ 6,999.00",
        colors: ["#ffffff", "#111111", "#4f6d57"]
    },
    {
        id: 3,
        image: "../assets/footwear-png/shoe-3.webp",
        category: "MEN'S LIFESTYLE",
        name: "Seam XVIII OG",
        price: "₹ 6,999.00",
        colors: ["#ffffff", "#d9d9d9", "#6c8a72"]
    },
    {
        id: 4,
        image: "../assets/footwear-png/shoe-4.webp",
        category: "MEN'S LIFESTYLE",
        name: "Urban Motion",
        price: "₹ 5,999.00",
        colors: ["#ffffff", "#000000", "#2c4f34"]
    },
    {
        id: 5,
        image: "../assets/footwear-png/shoe-5.webp",
        category: "MEN'S LIFESTYLE",
        name: "Classic Edge",
        price: "₹ 6,499.00",
        colors: ["#ffffff", "#2c4f34", "#d9d9d9"]
    },
    {
        id: 6,
        image: "../assets/footwear-png/shoe-6.webp",
        category: "MEN'S LIFESTYLE",
        name: "Street Pro",
        price: "₹ 5,799.00",
        colors: ["#1f1f1f", "#ffffff", "#c9b28f"]
    },
    {
        id: 7,
        image: "../assets/footwear-png/shoe-7.webp",
        category: "MEN'S LIFESTYLE",
        name: "Urban Flow",
        price: "₹ 6,299.00",
        colors: ["#d6d6d6", "#111111", "#3f5f48"]
    },
    {
        id: 8,
        image: "../assets/footwear-png/shoe-8.webp",
        category: "MEN'S LIFESTYLE",
        name: "Velocity",
        price: "₹ 7,199.00",
        colors: ["#ffffff", "#5d7f68", "#1d1d1d"]
    },
    {
        id: 9,
        image: "../assets/footwear-png/shoe-9.webp",
        category: "MEN'S LIFESTYLE",
        name: "Seam XVIII",
        price: "₹ 6,999.00",
        colors: ["#ffffff", "#1f4a2b", "#d9d9d9"]
    },
    {
        id: 10,
        image: "../assets/footwear-png/shoe-10.webp",
        category: "MEN'S LIFESTYLE",
        name: "Run Max",
        price: "₹ 5,899.00",
        colors: ["#ffffff", "#000000", "#d9d9d9"]
    },
    {
        id: 11,
        image: "../assets/footwear-png/shoe-11.webp",
        category: "MEN'S LIFESTYLE",
        name: "Prime Walk",
        price: "₹ 6,799.00",
        colors: ["#ffffff", "#2b2b2b", "#d9d9d9"]
    },
    {
        id: 12,
        image: "../assets/footwear-png/shoe-12.webp",
        category: "MEN'S LIFESTYLE",
        name: "Essential OG",
        price: "₹ 5,499.00",
        colors: ["#ffffff", "#2b2b2b", "#7a8c67"]
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