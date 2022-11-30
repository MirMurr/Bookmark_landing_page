//START SLIDER
//titles
let bookmarkTitle = document.getElementById('bookmarking-title');
let searchTitle = document.getElementById('search-title');
let shareTitle = document.getElementById('share-title');

//containers
let bookmarkContainer = document.querySelector(".bookmarking");
let searchContainer = document.querySelector(".searching");
let shareContainer = document.querySelector(".share");


bookmarkContainer.classList.toggle("active"); /*this will be displayed*/

bookmarkTitle.addEventListener("click", () => {
    searchContainer.classList.remove("active");
    shareContainer.classList.remove("active");

    bookmarkContainer.classList.add("active");
    

    //red underline on click
    bookmarkTitle.classList.add("active");
    searchTitle.classList.remove("active");
    shareTitle.classList.remove("active");
});
    

searchTitle.addEventListener("click", () => {
     shareContainer.classList.remove("active");
     bookmarkContainer.classList.remove("active");

     searchContainer.classList.add("active");


     //red underline on click
     searchTitle.classList.add("active");
     shareTitle.classList.remove("active");
     bookmarkTitle.classList.remove("active");
 });

 shareTitle.addEventListener("click", () => {
     bookmarkContainer.classList.remove("active");
     searchContainer.classList.remove("active");
    
     shareContainer.classList.add("active");


     //red underline on click
     shareTitle.classList.add("active");
     searchTitle.classList.remove("active");
     bookmarkTitle.classList.remove("active");

 }); 

//END SLIDER



// START FAQ SECTION

const accItem = document.querySelectorAll('.accordion-item');

accItem.forEach((acc) => acc.addEventListener('click', toggleAccItem))

function toggleAccItem() {
    accItem.forEach((item) => item != this ? item.classList.remove('accordion-item--active') : null) 

        if(this.classList != 'accordion-item--active') {
            this.classList.toggle('accordion-item--active')
        }
    };


//END FAQ SECTION

//START CONTACT FORM ERROR MESSAGE

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElement = document.getElementById('error-message');
const errorWrapper = document.querySelector(".error-wrap")

form.addEventListener('submit', (e) => {
    let message = [];

    if (email.value === '' || email.value == null) {
        errorWrapper.style.display = "block";
        email.style.border =" 2px solid hsl(0, 94%, 66%)";
        message.push('Woops, make sure it´s an E-mail');  
        email.classList.add("active");
    }

    if(message.length > 0) { 
        e.preventDefault()
        errorElement.innerHTML = message.join(', ');
    }
});

//END CONTACT FORM ERROR MESSAGE

//START SOCIAL ICONS HOVER STATE - doesn´t work, didn´t turn back to white
/*
let fbIcon = document.getElementById("fb");
let twitterIcon = document.getElementById("twitter");

fbIcon.addEventListener('mouseover', () => {
    fbIcon.style.fill ="hsl(0, 94%, 66%)";
});
*/

// START HAMBURGER MENU

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".navlinks");

let logoMobile = document.querySelector(".logo-m");
let logoInvisible = document.querySelector(".logo-invisible");

let loginBtn = document.querySelector(".login-btn");

/*hamburger menu X animation*/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    logoMobile.classList.toggle("active");
    loginBtn.classList.toggle("active");
    logoInvisible.classList.toggle("active");

    document.body.classList.toggle('lock-scroll');

});


//END HAMBURGER MENU


