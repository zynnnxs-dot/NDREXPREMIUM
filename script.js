const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".card")];

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase().trim();
  cards.forEach(card => {
    card.style.display = card.dataset.name.includes(keyword) ? "flex" : "none";
  });
});

function openApp(name){
  alert(`Kamu memilih aplikasi: ${name}`);
}

document.getElementById("year").textContent = new Date().getFullYear();
