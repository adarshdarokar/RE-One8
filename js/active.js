const products = [
    {
        id: 1,
        image: "../assets/active/active-1.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Essentials Bamboo Tee",
        price: "₹ 1,799.00",
        colors: ["#1f1f1f", "#f5f5f5", "#8d7c6c"]
    },
    {
        id: 2,
        image: "../assets/active/active-2.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Essentials Ribbed Tee",
        price: "₹ 1,999.00",
        colors: ["#ffffff", "#d9c9b6", "#5f6c84"]
    },
    {
        id: 3,
        image: "../assets/active/active-3.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Sonic Boom Reflective T-Shirt",
        price: "₹ 2,299.00",
        colors: ["#000000", "#b89d78", "#ffffff"]
    },

    {
        id: 4,
        image: "../assets/active/active-4.webp",
        category: "MEN'S ACTIVE LIFESTYLE",
        name: "Reset Raglan Tee",
        price: "₹ 2,299.00",
        colors: ["#1f1f1f", "#d8d8d8", "#5b88b6"]
    },
    {
        id: 5,
        image: "../assets/active/active-5.webp",
        category: "MEN'S ACTIVE LIFESTYLE",
        name: "Bonded Pocket Polo",
        price: "₹ 2,599.00",
        colors: ["#1f1f1f", "#7d8d5d", "#ffffff"]
    },
    {
        id: 6,
        image: "../assets/active/active-6.webp",
        category: "MEN'S ACTIVE LIFESTYLE",
        name: "Technical Shorts",
        price: "₹ 3,699.00",
        colors: ["#1f1f1f", "#8c8c8c", "#2d4f77"]
    },

    {
        id: 7,
        image: "../assets/active/active-7.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Swift Tank Top",
        price: "₹ 1,799.00",
        colors: ["#ffffff", "#e6d8cb", "#4b6388"]
    },
    {
        id: 8,
        image: "../assets/active/active-8.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Essentials Flared Bottoms",
        price: "₹ 3,799.00",
        colors: ["#1f1f1f", "#6a6a6a", "#a5a5a5"]
    },
    {
        id: 9,
        image: "../assets/active/active-9.webp",
        category: "WOMEN'S ACTIVE LIFESTYLE",
        name: "Sonic Curve Leggings",
        price: "₹ 3,799.00",
        colors: ["#000000", "#4b6388", "#8b8b8b"]
    },

    {
        id: 10,
        image: "../assets/active/active-10.webp",
        category: "MEN'S ACTIVE LIFESTYLE",
        name: "Sonic Boom Reflective T-Shirt",
        price: "₹ 2,299.00",
        colors: ["#1565d8", "#a76235", "#8b8b8b", "#ffffff"]
    },
    {
        id: 11,
        image: "../assets/active/active-11.webp",
        category: "MEN'S ACTIVE LIFESTYLE",
        name: "Reset Raglan Tee",
        price: "₹ 2,299.00",
        colors: ["#1f1f1f", "#d8d8d8", "#5b88b6"]
    },
    {
        id: 12,
        image: "../assets/active/active-12.webp",
        category: "MEN'S ACTIVE LIFESTYLE",
        name: "Bonded Pocket Polo",
        price: "₹ 2,599.00",
        colors: ["#1f1f1f", "#7d8d5d", "#ffffff"]
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