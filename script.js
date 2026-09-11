const products = {
  "NETFLIX": [
    { name: "BASIC", price: "Rp5.000" },
    { name: "VIP", price: "Rp10.000" },
    { name: "RESELLER", price: "Rp25.000" }
  ],
  "CANVA": [
    { name: "BASIC", price: "Rp5.000" },
    { name: "VIP", price: "Rp10.000" }
  ],
  "ALIGHT MOTION": [
    { name: "VIP 1 TAHUN", price: "Rp2.000" },
    { name: "GENERATOR APK", price: "Rp15.000" }
  ]
};

const typing = "NDREX PROJECT";
let i = 0;

function typeText() {
  const el = document.getElementById("typingText");
  if (i < typing.length) {
    el.textContent += typing.charAt(i);
    i++;
    setTimeout(typeText, 105);
  }
}
typeText();

function goToStore() {
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openTiers(product) {
  const modal = document.getElementById("tierModal");
  const title = document.getElementById("modalTitle");
  const list = document.getElementById("tierList");

  title.textContent = product;
  list.innerHTML = "";

  products[product].forEach(item => {
    const button = document.createElement("button");
    button.className = "tier";
    button.innerHTML = `
      <span class="tier-name">${item.name}</span>
      <span class="tier-price">${item.price}</span>
    `;
    button.onclick = () => openPayment(item.name, product, item.price);
    list.appendChild(button);
  });

  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("tierModal").classList.remove("show");
}

function openPayment() {
  closeModal();
  document.getElementById("paymentModal").classList.add("show");
}

function closePayment() {
  document.getElementById("paymentModal").classList.remove("show");
}

async function copyNumber() {
  const number = "085718558667";
  try {
    await navigator.clipboard.writeText(number);
    document.getElementById("copyStatus").textContent = "Tersalin ✓";
  } catch {
    document.getElementById("copyStatus").textContent = number;
  }
  setTimeout(() => {
    document.getElementById("copyStatus").textContent = "";
  }, 2000);
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
    closePayment();
  }
});

document.getElementById("tierModal").addEventListener("click", e => {
  if (e.target.id === "tierModal") closeModal();
});

document.getElementById("paymentModal").addEventListener("click", e => {
  if (e.target.id === "paymentModal") closePayment();
});
