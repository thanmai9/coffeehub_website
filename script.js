document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const cartBtn = document.getElementById('cart-btn');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const menuBtn = document.getElementById('menu-btn');
    const scrollUp = document.getElementById('scroll-up');
    const searchForm = document.querySelector('.search-form');
    const shoppingCart = document.querySelector('.shopping-cart');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const navbar = document.querySelector('.navbar-nav');
    const showSignupLink = document.querySelector('.show-signup');
    const showLoginLink = document.querySelector('.show-login');

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
    });

    cartBtn.addEventListener('click', () => {
        shoppingCart.classList.toggle('active');
    });

    loginBtn.addEventListener('click', () => {
        loginForm.classList.toggle('active');
        signupForm.classList.remove('active');
    });

    signupBtn.addEventListener('click', () => {
        signupForm.classList.toggle('active');
        loginForm.classList.remove('active');
    });

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    
    showSignupLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        signupForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.style.display = 'none';
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    });
});
