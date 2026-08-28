const CART_KEY = "fashionCartItems";

const femaleItems = [
  "Sakura Street Layer Set",
  "Moonlight Ribbon Varsity",
  "Kawaii Pixel Bomber Look",
  "Blush Aura Pleated Combo",
  "Cyber Petal Hoodie Fit",
  "Starline Denim Dream",
  "Cherry Beat Utility Outfit",
  "Luna Pop Graffiti Layer",
  "Velvet Spark Tennis Pair",
  "Neo Bow Cargo Blend",
  "Manga Glow Cardigan Set",
  "Cloud Candy Sport Dress",
  "Prism Idol Skater Fit",
  "Galaxy Lace Track Style",
  "Dawn Spark Kimono Mix",
  "Bubblegum Rebel Uniform",
  "Pastel Nova Jacket Pair",
  "Arcade Bloom Streetwear",
  "Glitter Drift Layered Fit",
  "Mirage Ribbon Cargo Dress",
  "Comet Crush Hoodie Skirt",
  "Sunset Pop Knit Combo",
  "Electric Daisy Urban Set",
  "Peach Pulse Athletic Pair",
  "Holo Charm Flare Outfit",
  "Dreamwave Puff Sleeve Fit",
  "Aurora Candy Tech Layer",
  "Fairy Code Denim Mix",
  "Twinkle Shift Retro Set",
  "Rose Rush Festival Style"
];

const maleItems = [
  "Shadow Strike Urban Set",
  "Blaze Mode Varsity Stack",
  "Neo Ronin Hoodie Kit",
  "Skyline Pulse Cargo Fit",
  "Pixel Knight Denim Build",
  "Storm Drift Bomber Combo",
  "Thunder Snap Street Pair",
  "Dragon Grid Track Look",
  "Zen Dash Skate Outfit",
  "Lunar Bolt Utility Wear",
  "Turbo Ace Layer Ensemble",
  "Frost Byte Knit Match",
  "Comet Lock Jacket Blend",
  "Echo Flash Sport Combo",
  "Orbit Racer Tech Set",
  "Steel Wave Chill Fit",
  "Nova Grind Urban Gear",
  "Cobalt Edge Panel Set",
  "Graphite Vibe Overshirt",
  "Wildcard Shift Cargo Style",
  "Prism Hawk Layer Pack",
  "Jetstream Mono Denim",
  "Astro Peak Street Cut",
  "Static Crown Track Style",
  "Solar Pulse Hoodie Build",
  "Chrome Beat Casual Kit",
  "Quantum Drift Outfit",
  "Midnight Clip Bomber Fit",
  "Fusion Riot Utility Set",
  "Volt Snap Weekend Look"
];

const shoeItems = [
  "Aero Spark Sneaker",
  "Pixel Glide High-Top",
  "Nova Foam Runner",
  "Comet Kick Street Sole",
  "Neon Orbit Trainer",
  "Drift Wave Slip-On",
  "Luna Dash Court Shoe",
  "Storm Lite Motion Pair",
  "Aurora Flex Skate Shoe",
  "Turbo Cloud Sport Sneaker",
  "Cyber Lace Track Runner",
  "Echo Grip Studio Sneaker",
  "Blush Bolt Everyday Shoe",
  "Rocket Step Hi-Sneak",
  "Pulse Knit Sprint Shoe",
  "Holo Stride Street Runner",
  "Prism Trail Casual Trainer",
  "Volt Frame Retro Sneaker",
  "Galaxy Pop Deck Shoe",
  "Flare Motion Youth Shoe",
  "Zen Bounce Court Sneaker",
  "Skyline Dash Air Shoe",
  "Fusion Drift Walk Sneaker",
  "Manga Move Flex Pair",
  "Cloud Snap Urban Runner",
  "Candy Shock Style Sneaker",
  "Flash Arc Weekender Shoe",
  "Rift Spin Neon Trainer",
  "Orbit Bloom Hybrid Shoe",
  "Starlight Rush Teen Sneaker"
];

function readCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(itemName) {
  const cart = readCart();
  cart.push(itemName);
  writeCart(cart);
}

function removeFromCart(index) {
  const cart = readCart();
  cart.splice(index, 1);
  writeCart(cart);
}

function renderHome() {
  const catalog = document.getElementById("catalog");
  if (!catalog) return;

  const categories = [
    {
      title: "Female Anime Clothing Designers (30 pieces)",
      items: femaleItems,
      viewLabel: "anime female fit"
    },
    {
      title: "Male Anime Clothing Designers (30 pieces)",
      items: maleItems,
      viewLabel: "anime male fit"
    },
    {
      title: "Anime Shoes for Male & Female Designers (30 pieces)",
      items: shoeItems,
      viewLabel: "animated shoe style"
    }
  ];

  categories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "category";

    const heading = document.createElement("h2");
    heading.textContent = category.title;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "grid";

    category.items.forEach((name, index) => {
      const card = document.createElement("article");
      card.className = "card";

      const itemTitle = document.createElement("h3");
      itemTitle.textContent = `${index + 1}. ${name}`;
      card.appendChild(itemTitle);

      const details = document.createElement("p");
      details.textContent = "Age range: 11-18 • Era: Gen-Alpha & Gen-Z (2025-2030)";
      card.appendChild(details);

      const views = document.createElement("div");
      views.className = "views";

      ["Front View", "Back View", "Side View"].forEach((viewName) => {
        const view = document.createElement("div");
        view.className = "view";
        view.textContent = `${viewName}: ${category.viewLabel}`;
        views.appendChild(view);
      });

      card.appendChild(views);

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Add to Cart";
      button.addEventListener("click", () => addToCart(name));
      card.appendChild(button);

      grid.appendChild(card);
    });

    section.appendChild(grid);
    catalog.appendChild(section);
  });
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const clearCart = document.getElementById("clear-cart");

  if (!cartList || !emptyCart || !clearCart) return;

  const cart = readCart();
  emptyCart.style.display = cart.length ? "none" : "block";

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const entry = document.createElement("li");

    const label = document.createElement("span");
    label.textContent = item;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeFromCart(index);
      renderCart();
    });

    entry.appendChild(label);
    entry.appendChild(removeButton);
    cartList.appendChild(entry);
  });

  clearCart.addEventListener("click", () => {
    writeCart([]);
    renderCart();
  });
}

renderHome();
renderCart();
