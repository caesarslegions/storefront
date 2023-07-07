let productService = {
  allProducts: [
    {
      "productId": 1,
      "productSku": "BOOK-001",
      "name": "The Encyclopedia of Invisible Things",
      "description": "We swear the pages aren't just blank.",
      "price": 27.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 2,
      "productSku": "POT-002",
      "name": "Self-Watering Flowerpot",
      "description": "Because even your plants should learn self-reliance.",
      "price": 34.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 3,
      "productSku": "GLS-003",
      "name": "Glasses for the Perfect Hindsight",
      "description": "Now you can say 'I told you so' with confidence.",
      "price": 59.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 4,
      "productSku": "BAG-004",
      "name": "Bag of Holding",
      "description": "Conveniently holds an endless amount of guilt.",
      "price": 39.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 5,
      "productSku": "CLK-005",
      "name": "24-hour Clock",
      "description": "Because 12 hours in a day just isn't enough.",
      "price": 18.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 6,
      "productSku": "MAG-006",
      "name": "Magnet of Attraction",
      "description": "Attract people, success, and metallic objects.",
      "price": 24.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 7,
      "productSku": "WIG-007",
      "name": "Wig of Wisdom",
      "description": "Great for thinking and bad hair days.",
      "price": 35.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },    
    {
      "productId": 8,
      "productSku": "GAD-001",
      "name": "Anti-gravity boots",
      "description": "Defy the laws of physics (and fashion)!",
      "price": 259.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 9,
      "productSku": "CLK-033",
      "name": "Time-traveling alarm clock",
      "description": "Snooze to yesterday!",
      "price": 149.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 10,
      "productSku": "WAND-045",
      "name": "Magic wand (non-functional)",
      "description": "Because everyone needs to dream",
      "price": 19.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 11,
      "productSku": "CAP-052",
      "name": "Invisible cap",
      "description": "Can't be seen in photos. Actually, can't be seen at all.",
      "price": 44.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 12,
      "productSku": "SHRT-734",
      "name": "Shirt of invisibility",
      "description": "Perfect for those 'I don't want to be seen' days.",
      "price": 29.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 13,
      "productSku": "BBLE-289",
      "name": "Infinite bubble wrap",
      "description": "Pop till you drop!",
      "price": 14.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 14,
      "productSku": "FLY-097",
      "name": "Flight Potion",
      "description": "Results may vary.",
      "price": 99.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 15,
      "productSku": "BOOK-458",
      "name": "Cookbook for cooking with fairy dust",
      "description": "Warning: Side effects may include flight or invisibility",
      "price": 25.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 16,
      "productSku": "PLT-011",
      "name": "Plants that sing",
      "description": "Warning: They only know one song, and it's 'Never Gonna Give You Up'",
      "price": 79.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 17,
      "productSku": "MUG-036",
      "name": "Mug of Infinite Coffee",
      "description": "Warning: Overuse may lead to seeing in 4 dimensions.",
      "price": 23.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 18,
      "productSku": "BTN-045",
      "name": "Easy Button",
      "description": "Results not guaranteed, but the placebo effect is a powerful thing.",
      "price": 9.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 19,
      "productSku": "BOK-859",
      "name": "Autobiography of a Pencil",
      "description": "Riveting tale of graphite, wood, and self-discovery.",
      "price": 14.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 20,
      "productSku": "CND-013",
      "name": "Eau de Wet Dog Candle",
      "description": "Perfect for when you miss the aroma of your best friend after bath time.",
      "price": 19.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 21,
      "productSku": "SCK-982",
      "name": "Unicorn-shaped Cloud",
      "description": "Not responsible for changes in shape due to wind.",
      "price": 45.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 22,
      "productSku": "KIT-356",
      "name": "Air Guitar Strings",
      "description": "For when your imaginary guitar sounds a bit off.",
      "price": 6.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 23,
      "productSku": "JAM-777",
      "name": "Traffic Jam",
      "description": "A jar filled with 100% authentic rush hour frustrations. Great for ex-bus drivers!",
      "price": 18.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 24,
      "productSku": "CAP-062",
      "name": "Thinking Cap",
      "description": "Increase your IQ by up to 50 imaginary points.",
      "price": 29.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    },
    {
      "productId": 25,
      "productSku": "PLT-022",
      "name": "Money Tree",
      "description": "Actual money not included. Keep out of reach from accountants and bankers.",
      "price": 49.99,
      "imageName": "https://via.placeholder.com/350x250.jpg"
    }
    
    
  ],

  getProducts() {
    return this.allProducts;
  },
};


document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < productService.allProducts.length; i++) {
    let article = productToArticle(productService.allProducts[i]);

    document.querySelector("#product-cards").appendChild(article);
  }

  document.querySelector("#search-bar").addEventListener("keyup", (event) => {
    searchProducts(event.target.value);
  });
});

function productToArticle(product) {
  let productArticle = document.createElement("article");
  productArticle.classList.add("product-card");

  let productSku = document.createElement("div");
  productSku.classList.add("sku");
  productSku.innerText = product.productSku;
  productArticle.appendChild(productSku);

  let productPrice = document.createElement("div");
  productPrice.classList.add("price");
  productPrice.innerText = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(product.price);
  productArticle.appendChild(productPrice);

  let productName = document.createElement("div");
  productName.classList.add("product-name", "action");
  productName.innerText = product.name;
  productName.setAttribute("data-id", product.productId);
  productArticle.appendChild(productName);

  productName.addEventListener("click", (event) => {
    window.alert(product.description);
  });

  let productImage = document.createElement("div");
  productImage.classList.add("product-image");
  productArticle.appendChild(productImage);

  let image = document.createElement("img");
  image.setAttribute("src", product.imageName);
  productImage.appendChild(image);

  let cartIcon = document.createElement("div");
  cartIcon.classList.add("cart");
  productArticle.appendChild(cartIcon);

  cartIcon.addEventListener("click", (event) => {
    window.alert(product.name + " has been added to your shopping cart");
  });

  let cartIconImage = document.createElement("i");
  cartIconImage.classList.add("fa-solid", "fa-cart-plus", "icon", "action");
  cartIconImage.setAttribute("title", "Add item to cart");
  cartIcon.appendChild(cartIconImage);

  return productArticle;

  }


function searchProducts(searchTerm) {
  let filteredProducts = productService.allProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // clear the current product cards
  let productCards = document.querySelector("#product-cards");
  while (productCards.firstChild) {
    productCards.removeChild(productCards.firstChild);
  }

  // append the new filtered products
  for (let i = 0; i < filteredProducts.length; i++) {
    let article = productToArticle(filteredProducts[i]);
    productCards.appendChild(article);
  }
}