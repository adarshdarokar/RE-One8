const products = [
    {
        id: 1,
        name: "Cricket Ribbed Collar Sweatshirt",
        price: 4499,
        images: [
            "../assets/campaign/cam-1.webp",
            "../assets/campaign/cam-1.webp"
        ],
        rating: 4.9,
        reviews: 164,
        description: "Premium cricket-inspired ribbed collar sweatshirt crafted for everyday lifestyle wear.",
        sizes: ["S", "M", "L", "XL"]
    },

    {
        id: 2,
        name: "Seam XVIII X",
        price: 6999,
        images: [
            "../assets/campaign/cam-2.webp",
            "../assets/campaign/cam-2.webp"
        ],
        rating: 4.8,
        reviews: 132,
        description: "Signature Seam XVIII X lifestyle sneaker with premium leather construction.",
        sizes: [6, 7, 8, 9, 10]
    },

    {
        id: 3,
        name: "Seam XVIII X",
        price: 6999,
        images: [
            "../assets/campaign/cam-3.webp",
            "../assets/campaign/cam-3.webp"
        ],
        rating: 4.8,
        reviews: 147,
        description: "Women's lifestyle sneaker inspired by cricket heritage and modern comfort.",
        sizes: [5, 6, 7, 8, 9]
    },

    {
        id: 4,
        name: "The Pavilion Resort Polo",
        price: 2299,
        images: [
            "../assets/campaign/cam-4.webp",
            "../assets/campaign/cam-4.webp"
        ],
        rating: 4.7,
        reviews: 88,
        description: "Classic resort polo designed with cricket-inspired detailing and relaxed comfort.",
        sizes: ["S", "M", "L", "XL"]
    },

    {
        id: 5,
        name: "Zen Flo",
        price: 1499,
        images: [
            "../assets/campaign/cam-5.webp",
            "../assets/campaign/cam-5.webp"
        ],
        rating: 4.6,
        reviews: 73,
        description: "Minimal everyday lifestyle cap with premium embroidery and soft structured fit.",
        sizes: ["Free Size"]
    },

    {
        id: 6,
        name: "Cricket Club Polo",
        price: 2499,
        images: [
            "../assets/campaign/cam-6.webp",
            "../assets/campaign/cam-6.webp"
        ],
        rating: 4.8,
        reviews: 121,
        description: "Cricket Club Polo featuring timeless styling with a modern athletic silhouette.",
        sizes: ["S", "M", "L", "XL"]
    }
];

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find((item) => item.id === productId);

if (product) {
    const productImage1 = document.getElementById("product-image-1");
    const productImage2 = document.getElementById("product-image-2");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productRating = document.getElementById("product-rating");
    const productDescription = document.getElementById("product-description");
    const sizeContainer = document.getElementById("size-container");

    if (productImage1) productImage1.src = product.images[0];
    if (productImage2) productImage2.src = product.images[1];
    if (productName) productName.textContent = product.name;
    if (productPrice) productPrice.textContent = `₹${product.price.toLocaleString("en-IN")}`;
    if (productRating) productRating.textContent = `⭐ ${product.rating} (${product.reviews} Reviews)`;
    if (productDescription) productDescription.textContent = product.description;

    if (sizeContainer) {
        product.sizes.forEach((size) => {
            const button = document.createElement("button");

            button.textContent = size;
            button.classList.add("size-btn");

            button.addEventListener("click", () => {
                document.querySelectorAll(".size-btn").forEach((btn) => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");
            });

            sizeContainer.appendChild(button);
        });
    }
}