const products = [
    {
        id: 1,
        image: "../assets/caps/cap-1.webp",
        category: "UNISEX ACTIVE LIFESTYLE",
        name: "Horizon Pro",
        price: "₹ 1,999.00",
        colors: ["#6b6b6b", "#2f2f2f"]
    },
    {
        id: 2,
        image: "../assets/caps/cap-2.webp",
        category: "UNISEX ACTIVE LIFESTYLE",
        name: "Mach Pro",
        price: "₹ 1,999.00",
        colors: ["#111111"]
    },
    {
        id: 3,
        image: "../assets/caps/cap-3.webp",
        category: "UNISEX ACTIVE LIFESTYLE",
        name: "Ace Pro",
        price: "₹ 1,799.00",
        colors: ["#182131"]
    },
    {
        id: 4,
        image: "../assets/caps/cap-4.webp",
        category: "UNISEX LIFESTYLE",
        name: "Prime Flo",
        price: "₹ 1,499.00",
        colors: ["#f5f0e8"]
    },
    {
        id: 5,
        image: "../assets/caps/cap-5.webp",
        category: "UNISEX LIFESTYLE",
        name: "Prime Flo",
        price: "₹ 1,499.00",
        colors: ["#5e5a37"]
    },
    {
        id: 6,
        image: "../assets/caps/cap-6.webp",
        category: "UNISEX LIFESTYLE",
        name: "Prime Flo",
        price: "₹ 1,499.00",
        colors: ["#1f335e"]
    },
    {
        id: 7,
        image: "../assets/caps/cap-7.webp",
        category: "UNISEX LIFESTYLE",
        name: "Prime Flo",
        price: "₹ 1,499.00",
        colors: ["#c99758"]
    },
    {
        id: 8,
        image: "../assets/caps/cap-8.webp",
        category: "UNISEX LIFESTYLE",
        name: "Prime Flo",
        price: "₹ 1,699.00",
        colors: ["#ffffff"]
    },
    {
        id: 9,
        image: "../assets/caps/cap-9.webp",
        category: "UNISEX LIFESTYLE",
        name: "Ease Flo",
        price: "₹ 999.00",
        colors: ["#f6f3ed"]
    },
    {
        id: 10,
        image: "../assets/caps/cap-10.webp",
        category: "UNISEX ACTIVE LIFESTYLE",
        name: "Ease Flo",
        price: "₹ 999.00",
        colors: ["#2367db"]
    },
    {
        id: 11,
        image: "../assets/caps/cap-11.webp",
        category: "UNISEX ACTIVE LIFESTYLE",
        name: "Ace Pro",
        price: "₹ 1,799.00",
        colors: ["#1d2b4d"]
    },
    {
        id: 12,
        image: "../assets/caps/cap-12.webp",
        category: "UNISEX LIFESTYLE",
        name: "Zen Flo",
        price: "₹ 1,499.00",
        colors: ["#e31d35", "#1f1f1f"]
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