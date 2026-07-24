const products = [
    {
        id: 1,
        name: "Boom Rush",
        price: 9999,
        images: ["shoe1.webp", "shoe1.2.webp"],
        rating: 4.8,
        reviews: 128,
        description: "Lightweight running shoes engineered for comfort, speed and all-day performance.",
        sizes: [7, 8, 9, 10]
    },
    {
        id: 2,
        name: "Quiet Edge",
        price: 10999,
        images: ["shoe2.webp", "shoe2.2.webp"],
        rating: 4.9,
        reviews: 214,
        description: "Premium lifestyle sneakers with a modern silhouette and superior cushioning.",
        sizes: [7, 8, 9, 10]
    },
    {
        id: 3,
        name: "Seam XVIII X",
        price: 6999,
        images: ["shoe3.webp", "shoe3.3.webp"],
        rating: 4.7,
        reviews: 96,
        description: "A sleek everyday sneaker designed for comfort and effortless style.",
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 4,
        name: "Seam Pavilion",
        price: 7999,
        images: ["shoe4.webp", "shoe4.1.webp"],
        rating: 4.6,
        reviews: 82,
        description: "Versatile sports shoes built with breathable materials and durable grip.",
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 5,
        name: "Boom Rush",
        price: 11999,
        images: ["shoe5.webp", "shoe5.5.webp"],
        rating: 4.9,
        reviews: 301,
        description: "Performance sneakers crafted for athletes who demand speed and stability.",
        sizes: [8, 9, 10, 11]
    },
    {
        id: 6,
        name: "Quiet Edge",
        price: 12999,
        images: ["shoe6.webp", "shoe6.6.webp"],
        rating: 5.0,
        reviews: 415,
        description: "Luxury edition sneakers featuring premium materials and exceptional comfort.",
        sizes: [7, 8, 9, 10, 11]
    }
];

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

const product = products.find((item) => item.id === productId);
const productImage1 = document.getElementById("product-image-1");
const productImage2 = document.getElementById("product-image-2");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productRating = document.getElementById("product-rating");
const productDescription = document.getElementById("product-description");
const sizeContainer = document.getElementById("size-container");
productImage1.src = product.images[0];
productImage2.src = product.images[1];
productName.textContent = product.name;

productPrice.textContent = `₹${product.price.toLocaleString("en-IN")}`;
productRating.textContent = `⭐ ${product.rating} (${product.reviews} Reviews)`;

productDescription.textContent = product.description;


product.sizes.forEach((size) => {
    const button = document.createElement("button");

    button.textContent = size;

    button.classList.add("size-btn");

    button.addEventListener("click", () => {
        const allButtons = document.querySelectorAll(".size-btn");

        allButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        console.log(size);
        button.classList.add("active");
    });

    sizeContainer.appendChild(button);
});