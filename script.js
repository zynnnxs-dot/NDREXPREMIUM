function showSlide(n){document.querySelectorAll('.slide').forEach(s=>s.classList.remove('active'));document.getElementById('slide'+n).classList.add('active');window.scrollTo(0,0)}
function openCanva(){window.location.href='https://www.canva.com/'}
function buyTier(tier,price){const n=document.getElementById('notice');n.style.display='block';n.textContent=`Kamu memilih ${tier} — Rp${price.toLocaleString('id-ID')}.`}
document.getElementById('searchInput').addEventListener('input',function(){const k=this.value.toLowerCase();document.querySelectorAll('.app').forEach(a=>a.style.display=a.dataset.name.includes(k)?'flex':'none')})
