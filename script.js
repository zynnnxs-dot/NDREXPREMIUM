function goBack(){
  window.history.back();
}

function buyTier(tier, price){
  const notice=document.getElementById("notice");
  notice.style.display="block";
  notice.textContent=`Kamu memilih ${tier} — Rp${price.toLocaleString("id-ID")}.`;
}
