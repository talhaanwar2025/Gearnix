
// ==========================
// 0️⃣ Product Filter - Arrival Section
// ==========================
// const filterLinks = document.querySelectorAll(".arrival-nav a");
// const productCards = document.querySelectorAll(".product-card");
// const heading = document.getElementById("category-heading");

// filterLinks.forEach(link => {
//   link.addEventListener("click", e => {
//     e.preventDefault();
//     const category = link.dataset.category;
//     const title = link.dataset.title;

//     heading.textContent = title;

//     filterLinks.forEach(l => l.classList.remove("active"));
//     link.classList.add("active");

//     productCards.forEach(card => {
//       const cardCat = card.dataset.category;
//       card.style.display = (category === "all" || cardCat === category) ? "flex" : "none";
//     });
//   });
// });
const filterLinks = document.querySelectorAll(".arrival-nav a");
const productCards = document.querySelectorAll(".product-card");
const heading = document.getElementById("category-heading");

filterLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    link.blur(); // ✅ focus remove → scroll rokega

    const category = link.dataset.category;
    const title = link.dataset.title;

    heading.textContent = title;

    filterLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    productCards.forEach(card => {
      const cardCat = card.dataset.category;
      card.style.display = (category === "all" || cardCat === category) ? "flex" : "none";
    });
  });
});

// ==========================
// 1️⃣ Notification Function
// ==========================
function showNotification(message){
  const notif = document.getElementById("notification");
  if(!notif) return;
  notif.innerText = message;
  notif.style.display = "block";
  notif.style.opacity = "1";
  setTimeout(()=>{
    notif.style.opacity = "0";
    setTimeout(()=> notif.style.display = "none",500);
  },3000);
}

// ==========================
// 2️⃣ Store Card Click Data
// ==========================
productCards.forEach(card => {
  card.addEventListener("click", e => {

    if(
      e.target.closest(".add-to-cart-btn") ||
      e.target.closest(".heart-icon") ||
      e.target.closest(".compare-icon")
    ) return;

    const productData = {
      id: card.dataset.id,
      name: card.dataset.name,
      desc: card.dataset.desc,
      price: parseFloat(card.dataset.price),

      img: card.querySelector("img").src,   // ✅ image fix

      brand: card.dataset.brand,
      category: card.dataset.category,
      sku: card.dataset.sku,
      warranty: card.dataset.warranty,
      stock: card.dataset.stock
    };

    console.log(productData); // console me image check karo

    sessionStorage.setItem("currentProduct", JSON.stringify(productData));

    window.location.href = `product-details1.html?id=${card.dataset.id}`;
  });
});



// ==========================
// 3️⃣ Sample Products Search Dropdown
// ==========================
const products = [
  { id:1,name:"Apple iPhone 14",link:"product.html?id=1"},
  { id:2,name:"Samsung Galaxy S23",link:"product.html?id=2"},
  { id:3,name:"MacBook Pro 16",link:"product.html?id=3"},
  { id:4,name:"AirPods Pro",link:"product.html?id=4"},
  { id:5,name:"Sony WH-1000XM5",link:"product.html?id=5"},
];

const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");

searchInput?.addEventListener("input",()=>{
  const q = searchInput.value.toLowerCase();
  searchDropdown.innerHTML="";
  if(q.trim()===""){ searchDropdown.style.display="none"; return; }
  const results = products.filter(p=>p.name.toLowerCase().includes(q));
  if(results.length===0) searchDropdown.innerHTML="<div>No results found</div>";
  else results.forEach(p=>{
    const div=document.createElement("div");
    div.textContent=p.name;
    div.addEventListener("click",()=> window.location.href=p.link);
    searchDropdown.appendChild(div);
  });
  searchDropdown.style.display="block";
});

searchInput?.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    e.preventDefault();
    const q=searchInput.value.toLowerCase();
    const r = products.find(p=>p.name.toLowerCase()===q);
    if(r) window.location.href=r.link;
    else alert("Product not found!");
    searchDropdown.style.display="none";
  }
});

document.addEventListener("click",(e)=>{
  if(!searchDropdown?.contains(e.target) && e.target!==searchInput) searchDropdown.style.display="none";
});

// ==========================
// 4️⃣ Navbar Active Toggle
// ==========================
const navLinks = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname.split("/").pop();
navLinks.forEach(link=>{
  link.classList.toggle("active", link.getAttribute("href")===currentPath);
});

// ==========================
// 5️⃣ Mobile Menu Toggle
// ==========================
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobile = document.getElementById("closeMobile");

mobileToggle?.addEventListener("click",()=> mobileMenu.classList.add("active"));
closeMobile?.addEventListener("click",()=> mobileMenu.classList.remove("active"));
window.addEventListener("click",e=>{
  if(mobileMenu?.classList.contains("active") && !mobileMenu.contains(e.target) && e.target!==mobileToggle){
    mobileMenu.classList.remove("active");
  }
});
window.addEventListener("resize",()=>{ if(window.innerWidth>900) mobileMenu?.classList.remove("active"); });

// ==========================
// 6️⃣ Review Section Animation
// ==========================
const reviewSection = document.querySelector(".review-section");
const fills = document.querySelectorAll(".fill");
const ratingNumber = document.querySelector(".big-review h1");
let started=false;
window.addEventListener("scroll",()=>{
  if(!reviewSection || started) return;
  const top = reviewSection.getBoundingClientRect().top;
  if(top<window.innerHeight-100){
    started=true;
    let count=0,target=4.9,step=0.1;
    const counter=setInterval(()=>{
      count+=step;
      ratingNumber.textContent=count.toFixed(1);
      if(count>=target){ ratingNumber.textContent=target; clearInterval(counter);}
    },40);
    fills.forEach(f=> f.style.width=f.dataset.width);
  }
});

// ==========================
// 7️⃣ Search Icon Toggle
// ==========================
document.querySelector(".search-icon")?.addEventListener("click",()=>{
  const wrapper=document.querySelector(".search-wrapper");
  wrapper.classList.toggle("active");
  wrapper.querySelector("input")?.focus();
});

// ==========================
// 8️⃣ Wishlist / Heart
// ==========================
document.querySelectorAll(".heart-icon")?.forEach(icon=>{
  icon.addEventListener("click",()=>{
    if(!checkLogin()) return;
    const card = icon.closest(".product-card");
    const name = card.querySelector(".product-name").innerText;
    const id = card.dataset.id;
    let wishlist=JSON.parse(localStorage.getItem("wishlist")||"[]");
    if(icon.classList.contains("active")){
      icon.classList.remove("active","fa-solid");
      icon.classList.add("fa-regular");
      wishlist=wishlist.filter(p=>p.id!=id);
      showNotification(name+" removed from wishlist");
    } else {
      icon.classList.add("active","fa-solid");
      icon.classList.remove("fa-regular");
      wishlist.push({id,name});
      showNotification(name+" added to wishlist");
    }
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    document.querySelector(".heart-count").innerText=wishlist.length;
  });
});


// ==========================
// 4️⃣ Cart Button & Count
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("cart");
  const cartCountEl = document.querySelector(".cart-count");
  console.log(cartCountEl); // check kare ke ab element mil raha hai

  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

  addToCartBtns.forEach(addToCartBtn => {
    
    addToCartBtn.addEventListener("click", (e) => {
      
      if(!checkLogin()) return;

          e.stopPropagation();

          const btn = e.currentTarget;
          const card = btn.closest(".product-card");

          const productName = card.querySelector(".product-name").innerText;
          const price = parseFloat(card.querySelector(".current").innerText.replace(/[^0-9.]/g, "")) || 0;
          const img = card.querySelector("img").src;
          const id = card.dataset.id;

          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          let product = {
              id: id,
              name: productName,
              price: price,
              quantity: 1,
              img: img
          };

          let exist = cart.find(p => p.id === product.id);
          if(exist){
              exist.quantity = Number(exist.quantity || 0) + 1;
          } else {
              cart.push(product);
          }

          localStorage.setItem("cart", JSON.stringify(cart));

          // Navbar count update
          const cartCount = cart.reduce((acc, item) => acc + Number(item.quantity || 0), 0);
          if(cartCountEl){
            
              cartCountEl.innerText = cartCount;
          }

          // Button animation
          btn.innerHTML = "✔ Added!";
          btn.style.background = "#28a745";

          setTimeout(() => {
              btn.innerHTML = '<i class="fa-solid fa-cart-arrow-down"></i> Add to Cart';
              btn.style.background = "linear-gradient(45deg,#22d3ff,#1ab7e3)";
          }, 2500);

          showNotification(productName + " added to cart");
      });
  });
  

  // Page reload par bhi cart count show ho
  function updateCartCount(){
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartCount = cart.reduce((acc, item) => acc + Number(item.quantity || 0), 0);

      if(cartCountEl){
          cartCountEl.innerText = cartCount;
      }
  }

  updateCartCount();

});
// ==========================
// 🔟 Hero Slider & Brand Fade
// ==========================
document.addEventListener("DOMContentLoaded",()=>{
  const slides=document.querySelectorAll(".slide"); let current=0;
  if(slides.length)setInterval(()=>{
    slides[current].classList.remove("active");
    current=(current+1)%slides.length;
    slides[current].classList.add("active");
  },3500);
});

const brandCards=document.querySelectorAll(".brand-card");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add("fade-in"); });
},{threshold:0.2});
brandCards.forEach(card=>observer.observe(card));

// ==========================
// 1️⃣1️⃣ Countdown Timer
// ==========================
document.querySelectorAll(".countdown")?.forEach(timer=>{
  const endTime=new Date(timer.dataset.end).getTime();
  function update(){
    const now=Date.now();
    let dist=endTime-now;
    if(dist<0){ timer.innerHTML="Deal Ended"; return; }
    const d=Math.floor(dist/(1000*60*60*24));
    const h=Math.floor((dist%(1000*60*60*24))/(1000*60*60));
    const m=Math.floor((dist%(1000*60*60))/(1000*60));
    const s=Math.floor((dist%(1000*60))/1000);
    timer.innerHTML=`<span>${d}d</span> <span>${h}h</span> <span>${m}m</span> <span>${s}s</span>`;
  }
  update();
  setInterval(update,1000);
});


// ==========================
// 1️⃣2️⃣ News Slider & Thumbs Gallery
// ==========================
const slider=document.querySelector(".news-slider");
const nextBtn=document.querySelector(".news-arrows .next");
const prevBtn=document.querySelector(".news-arrows .prev");
if(slider && nextBtn && prevBtn){
  nextBtn.addEventListener("click",()=>{ const card=slider.querySelector(".news-card"); slider.scrollBy({left:card.offsetWidth+parseInt(getComputedStyle(slider).gap),behavior:"smooth"}); });
  prevBtn.addEventListener("click",()=>{ const card=slider.querySelector(".news-card"); slider.scrollBy({left:-(card.offsetWidth+parseInt(getComputedStyle(slider).gap)),behavior:"smooth"}); });
}

const bigImage=document.getElementById("big-image");
document.querySelectorAll(".thumb")?.forEach(thumb=>{
  thumb.addEventListener("click",()=>{ bigImage.style.opacity="0"; setTimeout(()=>{ bigImage.src=thumb.src; bigImage.style.opacity="1"; },200); });
});

// ==========================
// 1️⃣3️⃣ Login / Logout
// ==========================
const loginIcon=document.getElementById("login-name");
const loginBtn=document.getElementById("loginBtn");
const logoutBtn=document.getElementById("logoutBtn");
const mobileLoginIcon=document.querySelector(".mobile-login-name");
const mobileLoginBtn=document.querySelector(".mobile-login");
const mobileLogoutBtn=document.querySelector(".mobile-logout");

function updateLogin(){
  const username=localStorage.getItem("username");
  if(username){
    loginIcon.innerText=username;
    loginBtn.style.cursor="default"; loginBtn.onclick=()=>alert("Already logged in ✅");
    logoutBtn&&(logoutBtn.style.display="inline");
    mobileLoginIcon.innerText=username;
    mobileLoginBtn.style.cursor="default"; mobileLoginBtn.onclick=()=>alert("Already logged in ✅");
    mobileLogoutBtn&&(mobileLogoutBtn.style.display="flex");
  } else {
    loginIcon.innerText="Login"; loginBtn.style.cursor="pointer"; loginBtn.onclick=()=>{ sessionStorage.setItem("redirectAfterLogin",window.location.href); window.location.href="login.html"; };
    logoutBtn&&(logoutBtn.style.display="none");
    mobileLoginIcon.innerText="Login"; mobileLoginBtn.style.cursor="pointer"; mobileLoginBtn.onclick=()=>{ sessionStorage.setItem("redirectAfterLogin",window.location.href); window.location.href="login.html"; };
    mobileLogoutBtn&&(mobileLogoutBtn.style.display="none");
  }
}
logoutBtn?.addEventListener("click",()=>logoutUser());
mobileLogoutBtn?.addEventListener("click",()=>logoutUser());

function logoutUser(){
  localStorage.removeItem("username");
  localStorage.removeItem("cart");
  localStorage.removeItem("wishlist");
  localStorage.removeItem("compare");
  alert("Logged out successfully!");
  updateLogin();
  location.reload();
}

function checkLogin(){ if(!localStorage.getItem("username")){ sessionStorage.setItem("redirectAfterLogin",window.location.href); window.location.href="login.html"; return false;} return true;}
updateLogin();

// ==========================
// 1️⃣4️⃣ Compare System (2 products)
// ==========================
const compareBtn=document.getElementById("compare-now-btn");
function loadCompare(){return JSON.parse(localStorage.getItem("compare")||"[]");}
function saveCompare(list){localStorage.setItem("compare",JSON.stringify(list));}
function updateCompareBtn(list){compareBtn&&(compareBtn.style.display=list.length===2?"block":"none");}

let compareList=loadCompare();
updateCompareBtn(compareList);

productCards.forEach(card=>{
  const icon=card.querySelector(".compare-icon");
  if(compareList.find(p=>p.id==card.dataset.id)) icon.classList.add("active");
  icon?.addEventListener("click",()=>{
    const id=card.dataset.id;
    let exist=compareList.find(p=>p.id==id);
    if(exist){ compareList=compareList.filter(p=>p.id!=id); icon.classList.remove("active"); }
    else{
      if(compareList.length>=2){ alert("You can only compare 2 products!"); return; }
      compareList.push({id,name:card.querySelector(".product-name").textContent,price:parseFloat(card.dataset.price||0),rating:card.dataset.rating,img:card.querySelector("img").src,desc:card.querySelector(".desc").textContent,model:card.dataset.model||"",ram:card.dataset.ram||"",rom:card.dataset.rom||"",category:card.dataset.category||""});
      icon.classList.add("active");
    }
    saveCompare(compareList);
    updateCompareBtn(compareList);
  });
});

compareBtn?.addEventListener("click",()=>{ if(compareList.length===2) window.location.href="compare.html"; });

// ==========================
// 1️⃣5️⃣ Happy Customer Counters
// ==========================
document.querySelectorAll(".counter")?.forEach(counter=>{
  const target=parseFloat(counter.dataset.target),speed=target>10?target/100:target/40;
  let count=0;
  const update=()=>{ count+=speed; if(count<target){ counter.innerText=target%1!==0?count.toFixed(1):Math.floor(count); requestAnimationFrame(update); } else counter.innerText=target; };
  update();
});

/* FILTER */
const filterButtons = document.querySelectorAll(".filter-btn");
  // const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      filterButtons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category;

      productCards.forEach(card=>{
        if(category === "all" || card.dataset.category === category){
          card.style.display = "flex";
        }else{
          card.style.display = "none";
        }
      });
    });
  });

  /* SORT */
  const sortSelect = document.getElementById("sort-products");
  sortSelect.addEventListener("change", ()=>{
    const value = sortSelect.value;
    const parent = document.querySelector(".product-grid");
    const cards = Array.from(parent.querySelectorAll(".product-card"));

    if(value === "price-low"){
      cards.sort((a,b)=>parseFloat(a.dataset.price)-parseFloat(b.dataset.price));
    }else if(value === "price-high"){
      cards.sort((a,b)=>parseFloat(b.dataset.price)-parseFloat(a.dataset.price));
    }else if(value === "rating"){
      cards.sort((a,b)=>parseFloat(b.dataset.rating)-parseFloat(a.dataset.rating));
    }

    cards.forEach(c=>parent.appendChild(c));
  });

  /* SEARCH BAR FILTER */
//   const searchInput = document.getElementById("product-search");
//   searchInput.addEventListener("input", ()=>{
//     const query = searchInput.value.toLowerCase();
//     const categoryActive = document.querySelector(".filter-btn.active").dataset.category;

//     productCards.forEach(card=>{
//       const name = card.querySelector(".product-name").textContent.toLowerCase();
//       const matchCategory = categoryActive === "all" || card.dataset.category === categoryActive;
//       const matchSearch = name.includes(query);

//       card.style.display = (matchCategory && matchSearch) ? "flex" : "none";
//     });
//   });


  document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", (e)=>{
    // Agar click Add to Cart ya icon pe hua, to ignore karo
    if(e.target.closest(".add-to-cart-btn") || e.target.closest(".heart-icon") || e.target.closest(".compare-icon")){
      return; // card click ko ignore karo
    }
    const id = card.dataset.id;
    window.location.href = `product-details1.html?id=${id}`;
  });
});
window.addEventListener("load", () => {
    const username = localStorage.getItem("username");
    if(!username){
        sessionStorage.setItem("redirectAfterLogin", window.location.href);
        // window.location.href = "login.html";
    }
});



