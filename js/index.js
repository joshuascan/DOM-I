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
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector('header');
const link1nav = header.querySelector('a');
const link2nav = link1nav.nextElementSibling;
const link3nav = link2nav.nextElementSibling;
const link4nav = link3nav.nextElementSibling;
const link5nav = link4nav.nextElementSibling;
const link6nav = link5nav.nextElementSibling;

const cta = document.querySelector('.cta');
const ctaHeading = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
const ctaImg = cta.querySelector('img');

const features = document.querySelector('.top-content div:nth-of-type(1)');
const featuresHeading = features.querySelector('h4');
const featuresText = features.querySelector('p');

const about = document.querySelector('.top-content div:nth-of-type(2)');
const aboutHeading = about.querySelector('h4');
const aboutText = about.querySelector('p');

const middleImg = document.querySelector('.main-content img');

// const

link1nav.textContent = siteContent['nav']['nav-item-1'];
link2nav.textContent = siteContent['nav']['nav-item-2'];
link3nav.textContent = siteContent['nav']['nav-item-3'];
link4nav.textContent = siteContent['nav']['nav-item-4'];
link5nav.textContent = siteContent['nav']['nav-item-5'];
link6nav.textContent = siteContent['nav']['nav-item-6'];

ctaHeading.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

featuresHeading.textContent = siteContent['main-content']['features-h4'];
featuresText.textContent = siteContent['main-content']['features-content'];

aboutHeading.textContent = siteContent['main-content']['about-h4'];
aboutText.textContent = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];



