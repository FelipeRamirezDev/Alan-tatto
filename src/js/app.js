

document.addEventListener('DOMContentLoaded', () => {
    app();
});

const app = () => {
    renderGallery();
    scrollNav();
    menuHamburguer();
};

const scrollNav = () => {
    const linksNav = document.querySelectorAll('.main-nav a');
    const button = document.querySelector('.cta-button');
    linksNav.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const scrollSection = event.target.getAttribute('href');
            const section = document.querySelector(scrollSection);

            section.scrollIntoView({behavior: "smooth"});
        });
    });
    button.addEventListener('click', event => {
        event.preventDefault();
            const section = document.querySelector('#gallery');

            section.scrollIntoView({behavior: "smooth"});
    });
}

const renderGallery = () => {
    let duplicate = false;
    const gallery = document.querySelector('.gallery-images');
    for(let i = 1; i <= 4; i++) {
        gallery.innerHTML += `
            <li>
                <picture>
                    <source srcset="build/img/gallery/${i}.webp" type="image/webp">
                    <source srcset="build/img/gallery/${i}.jpg" type="image/jpeg">
                    <img src="build/img/gallery/${i}.jpg" alt="hero background" class="hero-image">
                </picture>
            </li>
        `;
        if(i == 4 && !duplicate){
            i = 0;
            duplicate = true;
        }
    }
}

const menuHamburguer = () => {
    const menu = document.querySelector('.icon-menu');
    const nav = document.querySelector('.main-nav');

    menu.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}