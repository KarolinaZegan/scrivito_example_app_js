import * as React from "react";
import * as Scrivito from "scrivito";
import { HelmetProvider } from "react-helmet-async";

import CurrentPageMetadata from "./Components/CurrentPageMetadata";
import ErrorBoundary from "./Components/ErrorBoundary";
import Footer from "./Components/Footer";
import Intercom from "./Components/Intercom";
import Navigation from "./Components/Navigation";
import NotFoundErrorPage from "./Components/NotFoundErrorPage";
import CookieConsentBanner from "./Components/CookieConsentBanner";
import Tracking from "./Components/Tracking";
import { CookieConsentProvider } from "./Components/CookieConsentContext";

export const helmetContext = {};

export default function App() {
  return (
    <>
  <section className="header-wrapper">
  <nav className="navigation">
      <div className="container navigation__container">
        <div className="row">
          <div className="col navigation__bar">
                <div className="navigation__logo">
                  <img src="src/assets/images/myImages/logo.png" className="navigation__img"alt=""/>
                </div>
                <div className="navigation__menu">
                  <ul className="navigation__menu-list">
                    <li className="navigation__item"><a href="#">Home</a></li>
                    <li className="navigation__item"><a href="#">About</a></li>
                    <li className="navigation__item"><a href="#">Blog</a></li>
                    <li className="navigation__item"><a href="#">Training</a></li>
                    <li className="navigation__item"><a href="#">Event</a></li>
                    <li className="navigation__item"><a href="#">Shop</a></li>
                    <li className="navigation__item"><a href="#">Contact</a></li>
                  </ul>
                  <button className="navigation__toggle"><i className="fa fa-bars"></i><a href="#"></a></button>
                </div>
          </div>
        </div>
      </div>
    </nav>
  <header className="header">
    <div className="container header__container">
      <div className="row align-items-center">
        <div className="col header__main-photo">
            <img src="src/assets/images/myImages/header1.png" alt="" className="header__img"/>
        </div>
        <div className="col header__main-description">
          <h2>Balance Your Body and Mind</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam laborum ab, praesentium a soluta nostrum libero eligendi repellendus ullam?</p>
          <button className ="btn-pink">join us now</button>
        </div>
      </div>
    </div>
  </header>
  </section>
  <section className="program">
    <div className="container program__container">
      <div className="row">
        <div className="col program__description">
          <h2>Pregnant Women Program</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam laborum ab, praesentium a soluta nostrum libero eligendi repellendus ullam?</p>
          <button className ="btn-pink">join us now</button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  </section>
  <section className="levels">
    <div className="container levels__container">
      <div className="row">
        <div className="col levels__element">
        <div className="levels__photo">
            <img src="src/assets/images/myImages/program3.png" className="levels__img"alt=""/>
          </div>   
          <h4>Program 1</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="col levels__element">
          <div className="levels__photo">
            <img src="src/assets/images/myImages/program2.png" className="levels__img" alt=""/>
          </div> 
          <h4>Program 2</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="col levels__element">
          <div className="levels__photo">
            <img src="src/assets/images/myImages/program1.png" className="levels__img" alt=""/>
          </div>  
          <h4>Program 3</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
    </section> 
  <section className="breath">
    <div className="container breath__container">
      <div className="row breath__wrapper">
        <div className="col breath__description">
          <h3>Yoga breathing or Paranayama</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at ipsam aspernatur? Fugiat voluptatem totam doloribus nobis recusandae iste.</p>
          <button className ="btn-pink">learn more</button>
        </div>
        <div className="col breath__foto">
          <img src="src/assets/images/myImages/foto1.png" alt=""/>
        </div>
      </div>
    </div>
    </section>  
  <section className="join">
    <div className="container join__container">
      <div className="row">
        <div className="col">
        </div>
        <div className="col join__description">
          <h3>Join now and get 50% off</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat labore laborum voluptate voluptatem minus quo quibusdam enim recusandae aperiam?</p>
          <button className ="btn-pink">join now</button>
        </div>
      </div>
    </div>
  </section>
  <section className="galery"> 
  <div className="container galery__container">
    <div className="row">
      <div className="col text-center">
        <h3>Galery</h3>
      </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ullam culpa repudiandae? Quia impedit earum a tempore quidem ullam iusto?</p>
        </div>
      </div>
      <div className="row galery__tails">
        <div className="col galery__tail">
        <div className="galery__tail-wrap">
          <img src="src/assets/images/myImages/foto4.png" alt=""/>
          <h4>Lorem, ipsum.</h4>
          <p className="galery__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minus!</p>
          </div>
        </div>
        <div className="col galery__tail">
        <div className="galery__tail-wrap">
          <img src="src/assets/images/myImages/foto3.png" alt=""/>
          <h4>Lorem, ipsum.</h4>
          <p className="galery__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minus!</p>
          </div>
        </div>
        <div className="col galery__tail">
        <div className="galery__tail-wrap">
          <img src="src/assets/images/myImages/foto2.png" alt=""/>
          <h4>Lorem, ipsum.</h4>
          <p className="galery__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minus!</p>
          </div>
        </div>
      </div>
      </div>
      </section>
  <section className="video">
    <div className="container video__container">
      <div className="row">
        <div className="col">
        <img src="src/assets/images/myImages/video.png" alt=""/>
        </div>
        <div className="col video__description">
          <h3 className="video__title">yoga training video showreel</h3>
          <p className="video__main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae voluptatum molestiae laboriosam, maxime mollitia totam. Omnis eveniet nesciunt sed.</p>
          <div className="video__icons">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="form">
    <div className="container form__container">
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <h3>Get in touch</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, vero maxime error quidem porro placeat facilis iste sint veritatis quos?</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <input className="form__input"type="text" id="fname" name="firstname" placeholder="Your name"/>
          <input className="form__input"type="text" id="fname" name="firstname" placeholder="Gender"/>
          {/* <input type="text" id="fname" name="firstname" placeholder="Message"/> */}
          <textarea className="form__textarea" name="" id="" cols="30" rows="10">Message</textarea>
          <button className="btn-pink">send message</button>
        </div>
      </div>
    </div>

  </section>
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
        <h4>Your company</h4>
        <p>Halimun Streen 25 <span>Jakarta, Indonesia</span> <span>12850</span></p>
        <p>www.yourdomain.com</p>
        </div>
        <div className="col-12 col-md-1">
          <h5>Sitemap</h5>
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        <div className="col-12 col-md-1">
        <h5>Lorem, ipsum.</h5>
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
        <div className="col-12 col-md-2">
          <h5>Dolor sit.</h5>
            <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
        </div>
        <div className="col-12 col-md-4">
          <img src="src/assets/images/myImages/logo-footer.png" alt=""/>
          <p>Copyright &#169;2020 Freepik <span> Company St. All rights reserved </span></p>
          <div className="footer__icons">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>

        </div>
      </div>
    </div>
  </footer>
    
    </>
  
  );
}
