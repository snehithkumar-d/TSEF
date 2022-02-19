const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<html lang="en" data-theme="light">
    
    <link href="       https://snehithkumar-d.github.io/TSEF/Assets/css/app.css" rel="stylesheet" type="text/css" />
    
   
    <script src="       https://snehithkumar-d.github.io/TSEF/Assets/js/manifest.js       "></script>
    
    
   <script src="       https://snehithkumar-d.github.io/TSEF/Assets/js/vendor/content-api.min.js       "></script>
    
  
    <script src="       https://snehithkumar-d.github.io/TSEF/Assets/js/vendor.js       "></script>
    
   
    <script src="       https://snehithkumar-d.github.io/TSEF/Assets/js/app.js       "></script>
    

   
     <link href="       https://snehithkumar-d.github.io/TSEF/Assets/css/home.css     " rel="stylesheet" type="text/css" />
     
   
     <link href="       https://snehithkumar-d.github.io/TSEF/Assets/css/listing.css     " rel="stylesheet" type="text/css" />
     
   
    <script src="       https://snehithkumar-d.github.io/TSEF/Assets/js/home.js       "></script>
    
     <link href="       https://snehithkumar-d.github.io/TSEF/Assets/css/home.css     " rel="stylesheet" type="text/css" />
     
   




   

<header class="m-header with-picture js-header">
    <div class="m-mobile-topbar" data-aos="fade-down">
        <button class="m-icon-button in-mobile-topbar js-open-menu" aria-label="Open menu">
            <span class="icon-menu" aria-hidden="true"></span>
        </button>
        <a href="http://137.184.211.5" class="m-logo in-mobile-topbar">
            <img src="http://137.184.211.5/content/images/2022/01/Basic-Logo-1.png" alt="TopShelf Equity Partners" class="m-logo__image-light">
            <img src="http://137.184.211.5/content/images/2022/01/Dark-Mode-15.png" alt="TopShelf Equity Partners" class="m-logo__image-dark">
        </a>
        <button class="m-icon-button in-mobile-topbar js-open-search" aria-label="Open search">
            <span class="icon-search" aria-hidden="true"></span>
        </button>
    </div>

    <div class="m-menu js-menu">
        <button class="m-icon-button outlined as-close-menu js-close-menu" aria-label="Close menu">
            <span class="icon-close"></span>
        </button>
        <div class="m-menu__main" data-aos="fade-down">
            <div class="l-wrapper">
                <div class="m-nav js-main-nav">
                    <nav class="m-nav__left js-main-nav-left" role="navigation" aria-label="Main menu">
                        <ul>
                            <li class="only-desktop">
                                <a href="http://137.184.211.5" class="m-logo">
                                    <img src="http://137.184.211.5/content/images/2022/01/Basic-Logo-1.png" alt="TopShelf Equity Partners" class="m-logo__image-light">
                                    <img src="http://137.184.211.5/content/images/2022/01/Dark-Mode-15.png" alt="TopShelf Equity Partners" class="m-logo__image-dark">
                                </a>
                            </li>

                            <li class="nav-home nav-current">
                                <a href="http://137.184.211.5/">Home</a>
                            </li>
                            <li class="nav-portfolio">
                                <a href="http://137.184.211.5/portfolio/">Portfolio</a>
                            </li>
                            <li class="nav-contact-us">
                                <a href="http://137.184.211.5/contact-us/">Contact Us</a>
                            </li>


                        </ul>
                    </nav>
                    <div class="m-nav__right">

                        <button id="newsletter-button" class="m-button primary block" type="submit"><a href="https://invest.spolisetti.com">Portal →</a></button>
                        <div class="m-toggle-darkmode js-tooltip" data-tippy-content="Toggle light/dark mode" tabindex="0">
                            <label for="toggle-darkmode" class="sr-only">
                                Toggle light/dark mode
                            </label>
                            <input id="toggle-darkmode" type="checkbox" class="js-toggle-darkmode">
                            <div>
                                <span class="icon-moon moon" aria-hidden="true"></span>
                                <span class="icon-sunny sun" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</header>
 `;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
