# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./375px.png)
![](./375px_active.png)
![](./1024px.png)
![](./1440px.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS


## What I learned

- changing the image color on one part of the image - photopea

- lock scroll when mobile menu is active 

```js
function lockScroll() { /*prevents scrolling in the background when mobile-menu is active*/
    document.body.classList.toggle('lock-scroll');
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    lockScroll();
});

```
```css
.lock-scroll {
    overflow: hidden;
}

```

- adding background image to the input field and positioning the image when the e-mail field is empty:

``` JS

if (email.value === '' || email.value == null) {
        email.classList.add("active");
    }

```

```CSS

#email.active {
    background-image: url(./images/icon-error.svg);
    background-repeat: no-repeat;
    background-position-x: right .3rem;
    background-position-y: center;
}

```

### Continued development

I am working on the following skills:

- Javascript skills (functions, methods)
- Positioning elements - responsive mode
- Image sizing and positioning on different screen sizes
- Responsive design

### Useful resources

- [W3Schools](https://www.w3schools.com)- background image positioning

## Author

- Frontend Mentor - [@MirrMurr](https://www.frontendmentor.io/profile/MirMurr)


## Acknowledgments


