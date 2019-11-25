const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 

// This is for navbar

document.querySelectorAll('nav a')[0].textContent = siteContent['nav']['nav-item-1'];
document.querySelectorAll('nav a')[1].textContent = siteContent['nav']['nav-item-2'];
document.querySelectorAll('nav a')[2].textContent = siteContent['nav']['nav-item-3'];
document.querySelectorAll('nav a')[3].textContent = siteContent['nav']['nav-item-4'];
document.querySelectorAll('nav a')[4].textContent = siteContent['nav']['nav-item-5'];
document.querySelectorAll('nav a')[5].textContent = siteContent['nav']['nav-item-6'];

let navBar = document.querySelector("nav");
let linkOne = document.createElement('a');
linkOne.innerHTML = 'Parteners';
linkOne.setAttribute('href', '#');
navBar.appendChild(linkOne);

let linkTwo = document.createElement('a');
linkTwo.innerHTML = 'Donate';
linkTwo.setAttribute('href', '#');
navBar.appendChild(linkTwo);


document.querySelectorAll('nav a').forEach((link) => link.style.color = 'green');

document.getElementById('logo-img').src = siteContent['nav']['img-src'];

//This is for cta
document.querySelector('.cta-text h1').innerHTML = siteContent['cta']['h1'];
document.querySelector('.cta-text button').textContent = siteContent['cta']['button'];
document.getElementById('cta-img').src = siteContent['cta']['img-src'];

let newBtn = document.createElement('button');
newBtn.textContent = 'Change Style';
document.querySelector('.cta-text').insertBefore(newBtn, document.querySelector('.cta-text button'));

newBtn.onclick = () => {
  document.body.style.backgroundColor = '#eaeaea';
  document.querySelectorAll('h4').forEach((h) => h.style.color = '#08d9d6');
  document.querySelectorAll('nav a').forEach((link) => link.style.color = '#ff2e63');
  document.querySelectorAll('p').forEach((para) => para.style.color = '#252a34');
};

//This is for main content
document.querySelectorAll('.text-content h4')[0].textContent = siteContent['main-content']['features-h4'];
document.querySelectorAll('.text-content p')[0].textContent = siteContent['main-content']['features-content'];
document.querySelectorAll('.text-content h4')[1].textContent = siteContent['main-content']['about-h4'];
document.querySelectorAll('.text-content p')[1].textContent = siteContent['main-content']['about-content'];

document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];


document.querySelectorAll('.text-content h4')[2].textContent = siteContent['main-content']['services-h4'];
document.querySelectorAll('.text-content p')[2].textContent = siteContent['main-content']['services-content'];
document.querySelectorAll('.text-content h4')[3].textContent = siteContent['main-content']['product-h4'];
document.querySelectorAll('.text-content p')[3].textContent = siteContent['main-content']['product-content'];
document.querySelectorAll('.text-content h4')[4].textContent = siteContent['main-content']['vision-h4'];
document.querySelectorAll('.text-content p')[4].textContent = siteContent['main-content']['vision-content'];



//This is for contact
document.querySelector('.contact').children[0].textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact').children[1].innerHTML = siteContent['contact']['address'];
document.querySelector('.contact').children[2].textContent = siteContent['contact']['phone'];
document.querySelector('.contact').children[3].textContent = siteContent['contact']['email'];

//This is for footer
document.querySelector('footer').textContent = siteContent['footer']['copyright'];






