
const whatsappNumber = "8459065240";

const dresses = [
  {
    name: "Elegant Kurti",
    category: "Kurtis",
    price: "₹250 onwards",
    image: "https://i.pinimg.com/736x/e7/04/b2/e704b2895aad0b080c3b5e1c75977fbe.jpg"
  },
  {
    name: "Traditional Suit",
    category: "Suits",
    price: "₹400 onwards",
    image: "https://i.pinimg.com/736x/3d/05/92/3d0592312e9005d50e163dbd44877243.jpg"
  },
  {
    name: "Designer Blouse",
    category: "Blouses",
    price: "₹300 onwards",
    image: "https://i.pinimg.com/736x/ec/e4/7f/ece47f5a0cb5128679e9521d64f8c028.jpg"
  },
  {
    name: "Party Wear Gown",
    category: "Gowns",
    price: "₹700 onwards",
    image: "https://i.pinimg.com/736x/05/71/1b/05711bdd6a21afc3bc047b112d3df199.jpg"
  }
];

const products = document.getElementById("products");

function showProducts(category = "All") {
  products.innerHTML = "";

  const filtered = category === "All"
    ? dresses
    : dresses.filter(dress => dress.category === category);

  filtered.forEach(dress => {
    const message = encodeURIComponent(
      `Hello! I am interested in ${dress.name}. Please share details.`
    );

    products.innerHTML += `
      <article class="product">
        <img src="${dress.image}" alt="${dress.name}"
          onerror="this.src='https://placehold.co/500x600?text=Add+Dress+Photo'">
        <h3>${dress.name}</h3>
        <p>${dress.price}</p>
        <a target="_blank"
          href="https://wa.me/${whatsappNumber}?text=${message}">
          Enquire on WhatsApp →
        </a>
      </article>
    `;
  });
}

document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active")
      ?.classList.remove("active");

    button.classList.add("active");
    showProducts(button.dataset.category);
  });
});

const customMessage = encodeURIComponent(
  "Hello! I want to place a custom stitching order."
);

document.getElementById("customOrder").href =
  `https://wa.me/${whatsappNumber}?text=${customMessage}`;

document.getElementById("footerWhatsApp").href =
  `https://wa.me/${whatsappNumber}`;

showProducts();
