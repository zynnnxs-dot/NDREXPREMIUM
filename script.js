function openNetflix(){window.location.href="https://www.netflix.com/";}
function openCanva(){window.location.href="https://www.canva.com/";}
const searchInput=document.getElementById("searchInput");
const apps=document.querySelectorAll(".app");
searchInput.addEventListener("input",function(){const keyword=this.value.toLowerCase();apps.forEach(app=>{app.style.display=app.dataset.name.toLowerCase().includes(keyword)?"flex":"none";});});