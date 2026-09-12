// shared chrome + helpers
const NAV = [
  {href:'index.html', fa:'خانه'},
  {href:'identity.html', fa:'هویت و مأموریت'},
  {href:'governance.html', fa:'حکمرانی و ارکان'},
  {href:'structure.html', fa:'ساختار و زنجیره'},
  {href:'trust.html', fa:'فیدااسکور و اعتماد'},
  {href:'tools.html', fa:'ابزارها'},
  {href:'economy.html', fa:'اقتصاد تیمی'},
  {href:'trade.html', fa:'تهاتر و تسویه'},
  {href:'security.html', fa:'محرمانگی و کارت‌ها'}
];
function mountChrome(active){
  const links = NAV.map(l=>`<a href="${l.href}" class="${l.href===active?'active':''}">${l.fa}</a>`).join('');
  document.body.insertAdjacentHTML('afterbegin', `<nav>
    <a href="index.html" class="brand"><span class="dot"></span> فیدا <span class="en">FIDA</span></a>
    <div class="navlinks" id="navlinks">${links}</div>
    <button class="menu-btn" onclick="document.getElementById('navlinks').classList.toggle('open')">☰</button>
  </nav>`);
  document.body.insertAdjacentHTML('beforeend', `<footer><div class="wrap foot">
    <a href="index.html" class="brand" style="font-size:1.05rem"><span class="dot"></span> فیدا</a>
    <p>نظام‌نامهٔ جامع مادر فیدا · ائتلاف بین‌المللی توسعه‌محور فرانگران</p>
    <span class="confid">ویرایش ۳ · محرمانه</span>
  </div></footer>`);
}
function enableReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(r=>io.observe(r));
}
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
