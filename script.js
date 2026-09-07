function showSlide(n){document.querySelectorAll('.slide').forEach(x=>x.classList.remove('active'));document.getElementById('slide'+n).classList.add('active');scrollTo(0,0)}
function buy(name,price){const n=document.querySelector('.slide.active .notice');n.style.display='block';n.textContent=`Kamu memilih ${name} — Rp${price.toLocaleString('id-ID')}.`}
q.addEventListener('input',()=>{const k=q.value.toLowerCase();document.querySelectorAll('.app').forEach(a=>a.style.display=a.dataset.name.includes(k)?'flex':'none')})
