const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const input = document.getElementById("pizza-id");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  const id = input.value;
  input.value = "";
  result.innerHTML = "";

  if (id === "") {
    renderError("<p class='error-message'>Please enter a number.</p>");
    return;
  }

  const pizza = pizzas.find((pizza) => pizza.id === parseInt(id));

  if (!pizza) {
    renderError("<p class='error-message'>No pizza with that ID found.</p>");
    return;
  }

  renderPizza(pizza);
});

function renderPizza(pizza) {
  const pizzaCard = document.createElement("div");
  pizzaCard.classList.add("pizza-card");

  const pizzaImg = document.createElement("img");
  pizzaImg.src = pizza.imagen;
  pizzaCard.appendChild(pizzaImg);

  const pizzaInfo = document.createElement("div");
  pizzaInfo.innerHTML = `
    <h3>${pizza.nombre}</h3>
    <p>Price: $${pizza.precio}</p>
    <p>Ingredients: ${pizza.ingredientes.join(", ")}</p>
  `;
  pizzaCard.appendChild(pizzaInfo);

  result.appendChild(pizzaCard);
}

function renderError(message) {
  result.innerHTML = "";
  result.appendChild(message);
}
