const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `


     <style>
    
:root {
    --maxContentWidth: 1000px;
    --gradient: linear-gradient(-228deg, #045BA8, #1582D4);
    --theme-ui-colors-black: #000;
    --theme-ui-colors-gray3: #cfcfcf;
    --theme-ui-colors-gray1: #ededed;
    --theme-ui-colors-gray4: #8C8C88;

}


.css-q41tqn {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    background-color: var(--theme-ui-colors-black);
    color: var(--theme-ui-colors-gray1);
}


.css-1rscds9 {
    max-width: var(--maxContentWidth);
    margin-left: auto;
    margin-right: auto;
    padding-top: 64px;
    padding-bottom: 64px;
    padding-left: 32px;
    padding-right: 32px;
}

@media print {
    body {
        color: var(--theme-ui-colors-black)!important;
        background-color: var(--theme-ui-colors-black)!important;
    }

    main a::after,footer a::after {
        content: " (" attr(href) ")";
    }
}

.css-1b40x7f {
    margin-top: 0;
    margin-bottom: 32px;
    padding-left: 0;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    list-style-type: none;
}

@media print {
    .css-1b40x7f {
        display: none;
    }
}


.css-4o5y71 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: grid;
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 32px;
    padding-left: 0;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    list-style-type: none;
}

@media print {
    .css-4o5y71 {
        display: none;
    }
}


 .css-16ilj6a {
     margin-bottom: 32px;
 }



.css-138yxp1 {
    padding-top: 0;
    padding-bottom: 8px;
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: var(--theme-ui-colors-gray3);
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

@media screen and (min-width: 40em) {
    .css-138yxp1 {
        padding-bottom:4px;
    }
}

.css-138yxp1:hover,.css-138yxp1:focus {
    -webkit-text-decoration: underline;
    text-decoration: underline;
}



.css-1rxzsrh {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
}



.css-16v8fgb {
    padding-top: 8px;
    padding-bottom: 8px;
    display: block;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
                                   }

@media screen and (min-width: 40em) {
    .css-16v8fgb {
        padding-top:4px;
        padding-bottom: 4px;
    }
}

.css-16v8fgb:hover,.css-16v8fgb:focus {
    -webkit-text-decoration: underline;
    text-decoration: underline;
}




.css-c6f14a {
    margin-bottom: 8px;
    padding-top: 0;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--theme-ui-colors-gray3);
                                  }

@media screen and (min-width: 40em) {
    .css-c6f14a {
        padding-bottom:4px;
    }
}

.css-105cdjh {
    border-top: 1px solid;
    border-top-color: var(--theme-ui-colors-gray3);
    padding-top: 32px;
    padding-bottom: 32px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: inherit;
}



.css-1b0fgd4 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px solid;
    border-top-color: var(--theme-ui-colors-gray3);
    padding-top: 32px;
    padding-bottom: 32px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: inherit;
}

.css-n8ggt8 {
    font-size: 14px;
}

@media screen and (min-width: 40em) {
    .css-n8ggt8 {
        font-size:16px;
    }
}

.css-1vef6j {
    color: inherit;
}

.css-124v1g0 {
    margin-right: -8px;
    -webkit-flex: 128px 0 0;
    -ms-flex: 128px 0 0;
    flex: 128px 0 0;
}

@media print {
    .css-124v1g0 {
        display: none;
    }
}

.css-lsed3c {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: -8px;
    -webkit-flex: 128px 0 0;
    -ms-flex: 128px 0 0;
    flex: 128px 0 0;
}

@media print {
    .css-lsed3c {
        display: none;
    }
}

.css-1e79s7r {
    width: 40px;
    height: 40px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: 0.8;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
}

.css-1e79s7r:hover,.css-1e79s7r:focus {
    opacity: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
}

.css-hg7pd4 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 40px;
    height: 40px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: 0.8;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
}

.css-hg7pd4:hover,.css-hg7pd4:focus {
    opacity: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
}

.css-8iwup0 {
    width: 26px;
    height: 26px;
}

.css-1skxuzk {
    fill: rgba(255, 255, 255, 0.2);
}

.css-1hdkh9v {
    fill: var(--theme-ui-colors-gray1);
}

.css-1rx0i0o {
    width: 40px;
    height: 40px;
    margin-left: 4px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: 0.8;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
                                   }

.css-1rx0i0o:hover,.css-1rx0i0o:focus {
    opacity: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
}

.css-boix9n {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 40px;
    height: 40px;
    margin-left: 4px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: 0.8;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
}

.css-boix9n:hover,.css-boix9n:focus {
    opacity: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
}

.css-1ifhear {
    width: 24px;
    height: 24px;
}

.css-7nicv7 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
    color: var(--theme-ui-colors-gray4);
}

.css-1lkklub {
    margin-top: 0;
}

.css-f2kk04 {
    margin-bottom: 0;
    text-align: justify;
}
     </style>
      <footer id="nav" class="css-q41tqn">
  <div class="css-1rscds9">

    <ul class="css-4o5y71">

      <li class="css-16ilj6a">

        <a aria-current="page" class="css-138yxp1">Home</a>

        <ul class="css-1rxzsrh">
          
          <li>
            <a class="css-16v8fgb" href="/content-center">Portfolio</a>
          </li>
             <li>
            <a class="css-16v8fgb" href="/news"> </a>
          </li>
          <li>
            <a href="https://invest.spolisetti.com " class="css-16v8fgb" target="_blank" rel="noopener noreferrer">Signup</a>
          </li>
        </ul>
      </li>
      <li class="css-16ilj6a">
        <a class="css-138yxp1" href="/private-companies">Investors</a>
        <ul class="css-1rxzsrh">
            <li>
            <a href="https://invest.spolisetti.com " class="css-16v8fgb" target="_blank" rel="noopener noreferrer">Visit  [Portal]</a>
          </li>
          
          <li>
            <a class="css-16v8fgb" href=" ">  </a>
          </li>
          <li>
            <a class="css-16v8fgb" href="/ "></a>
          </li>
        </ul>
      </li>
      <li class="css-16ilj6a">
        <a class="css-138yxp1" href="/institutional-investors">Legal</a>
        <ul class="css-1rxzsrh">
          <li>
            <a class="css-16v8fgb" href="/terms">Terms and conditions</a>
          </li>
          <li>
            <a class="css-16v8fgb" href="/Privacy">Privacy </a>
          </li>
        </ul>
      </li>
        
       <li class="css-16ilj6a">
        <a class="css-138yxp1" href="/institutional-investors">Contact</a>
        <ul class="css-1rxzsrh">
          <li>
           <a class="css-16v8fgb" href="/request-information">Request information</a>
          </li>
          <li>
             <a class="css-16v8fgb" href=" "> Contact US</a>
          </li>
            <li>
             <a class="css-16v8fgb" href=" "> Become a member</a>
          </li>
            <li>
            <a href="https://invest.spolisetti.com " class="css-16v8fgb" target="_blank" rel="noopener noreferrer">FAQ's</a>
          </li>
        </ul>
      </li>
    </ul>


    <div class="css-1b0fgd4">

      <div class="css-n8ggt8">
        © TopShelf Equity Partners, LLC
        <!-- -->

        <a href="https://www.finra.org" class="css-1vef6j" target="_blank" rel="noopener noreferrer"> </a>
        <a href="https://www.sipc.org" class="css-1vef6j" target="_blank" rel="noopener noreferrer"> </a>
      </div>


      <div class="css-lsed3c">

        <a href=" " class="css-hg7pd4" target="_blank" rel="noopener noreferrer">

        </a>

        <a href=" --" class="css-boix9n" target="_blank" rel="noopener noreferrer">
        
        </a>
          
        <a href=" " class="css-boix9n" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="css-1ifhear">
            <title>Connect with TSEP, Inc. on LinkedIn</title>
            <path d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z" class="css-1skxuzk"></path>
            <rect width="85.76" height="257.962" x="61.053" y="178.667" class="css-1hdkh9v"></rect>
            <path d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z" class="css-1hdkh9v"></path>
            <path d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z" class="css-1hdkh9v"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="css-7nicv7">
    
      <p class="css-f2kk04">
        © TSEP | All Rights Reserved.
        <!-- -->
       
        This website is operated by TopShelf Equity Partners LLC (“TopShelf”). | The material and information provided on the site is for information purposes and does not constitute an offer to purchase or sell securities. | Certain information on our site is only accessible by sophisticated investors. | Neither TopShelf nor any of its affiliates are registered investment advisers or broker dealers. | Nothing on our site constitutes a recommendation to purchase a particular security or that any investment is suitable for any investor. | The use of this site is subject to your agreement to be bound by our <a href="http://137.184.211.5/terms/ " class="css-1vef6j" target="_blank" rel="noopener noreferrer">Terms</a>.  | We use personal information in a manner consistent with our <a href="http://137.184.211.5/privacy" class="css-1vef6j" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
      </p>
    </div>
  </div>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({mode: 'closed'});

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);

