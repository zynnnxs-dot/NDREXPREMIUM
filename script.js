let prev = 2;
let chosen = {};
let timer;

function go(n){
  document.querySelectorAll('.slide').forEach(e => e.classList.remove('active'));
  const target = document.getElementById('s' + n);
  if(target) target.classList.add('active');
  window.scrollTo(0,0);
}

function buy(name, price, brand){
  prev = brand === 'c' ? 4 : 3;
  chosen = {name, price, brand};

  document.getElementById('name').textContent = name;
  document.getElementById('price').textContent = 'Rp' + price.toLocaleString('id-ID');

  const details = {
    'Netflix Basic':'Akun bersama • Garansi 1 bulan • Durasi 2 minggu',
    'Netflix VIP':'Akun personal • Minim gangguan dari luar • Region acak • Durasi 1 bulan',
    'Netflix Reseller':'Durasi seumur hidup / web hidup • Dapat menjual kembali',
    'Canva Normal':'Akses Canva Normal • Proses cepat',
    'Canva VIP':'Akses Canva VIP • Prioritas proses'
  };
  document.getElementById('detail').textContent = details[name] || '';

  const logo = document.getElementById('payLogo');
  logo.className = (brand === 'c' ? 'clogo' : 'nlogo') + ' big';
  logo.textContent = brand === 'c' ? 'C' : 'N';

  document.getElementById('msg').textContent = '';

  const end = Date.now() + 300000;
  clearInterval(timer);

  function updateTimer(){
    const remaining = Math.max(0, end - Date.now());
    const seconds = Math.ceil(remaining / 1000);

    document.getElementById('timer').textContent =
      String(Math.floor(seconds / 60)).padStart(2,'0') + ':' +
      String(seconds % 60).padStart(2,'0');

    if(!remaining) clearInterval(timer);
  }

  updateTimer();
  timer = setInterval(updateTimer, 250);
  go(5);
}

function acc(){
  const urls = {
    'Netflix Basic':'https://wa.me/6285715559734?text=HALO%20NDREX%0APesanan%20%3A%20Netflix%20basic%20%0AHarga%20%3ARp%205.000%0A%5BLampirkan%20bukti%20transaksi%5D',
    'Netflix VIP':'https://wa.me/6285715559734?text=HALO%20NDREX%0APesanan%20%3A%20Netflix%20VIP%0AHarga%20%3ARp%2010.000%0A%5BLampirkan%20bukti%20transaksi%5D',
    'Netflix Reseller':'https://wa.me/6285715559734?text=HALO%20NDREX%0APesanan%20%3A%20Netflix%20Reseller%20%0AHarga%20%3ARp%2015.000%0A%5BLampirkan%20bukti%20transaksi%5D',
    'Canva Normal':'https://wa.me/6285715559734?text=HALO%20NDREX%0APesanan%20%3A%20Canva%20Normal%0AHarga%20%3ARp%205.000%0A%5BLampirkan%20bukti%20transaksi%5D',
    'Canva VIP':'https://wa.me/6285715559734?text=HALO%20NDREX%0APesanan%20%3A%20Canva%20VIP%0AHarga%20%3ARp%208.000%0A%5BLampirkan%20bukti%20transaksi%5D'
  };

  if(urls[chosen.name]){
    window.open(urls[chosen.name], '_blank');
  }else{
    document.getElementById('msg').textContent =
      'Konfirmasi WhatsApp belum diatur untuk produk ini.';
  }
}

const search = document.getElementById('search');
const noResult = document.getElementById('noResult');

search.addEventListener('input', e => {
  const value = e.target.value.toLowerCase().trim();
  let visible = 0;

  document.querySelectorAll('.service').forEach(service => {
    const match = service.dataset.name.includes(value);
    service.style.display = match ? 'flex' : 'none';
    if(match) visible++;
  });

  noResult.hidden = visible !== 0;
});

function theme(t){
  document.body.classList.remove('light','neon');
  if(t !== 'dark') document.body.classList.add(t);
  localStorage.setItem('ndrex-theme', t);
}

theme(localStorage.getItem('ndrex-theme') || 'dark');

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

function updateMusicButton(){
  const playing = !bgMusic.paused;
  musicToggle.classList.toggle('playing', playing);
  musicToggle.innerHTML = playing ? '♫ <span>Music ON</span>' : '♪ <span>Music</span>';
}

function startExperience(){
  bgMusic.volume = 0.28;
  bgMusic.play().then(updateMusicButton).catch(updateMusicButton);
  go(2);
}

function toggleMusic(){
  if(bgMusic.paused){
    bgMusic.volume = 0.28;
    bgMusic.play().then(updateMusicButton).catch(updateMusicButton);
  }else{
    bgMusic.pause();
    updateMusicButton();
  }
}

updateMusicButton();
