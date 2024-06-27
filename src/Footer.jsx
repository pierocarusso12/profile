
export function Footer() {

      const scrollUp = () => {
            const scrollUp = document.getElementById('scroll-up');
            window.scrollY >= 350
              ? scrollUp.classList.add('show-scroll')
              : scrollUp.classList.remove('show-scroll');
          };
        
        
            window.addEventListener('scroll', scrollUp);
        
            
      return (

            <footer className="footer">
<div className="footer__container container grid">
      <div className="footer__content grid">
            <a href="index.html" className="footer__logo"><i className="ri-code-s-slash-line"></i> Piero Carusso</a>

            <ul className="footer__links">
                  <li>
                        <a href="#inicio" className="footer__link">Inicio</a>
                  </li>

                  <li>
                        <a href="#acerca" className="footer__link">Acerca de mi</a>
                  </li>

                  <li>
                        <a href="#portafolio" className="footer__link">Portafolio</a>
                  </li>

                  <li>
 <a href="https://wa.link/hwe3g1" target='_blank'  rel="noopener noreferrer" className="footer__link">Contáctame</a>
                  </li>

                
            </ul>

            <div className="footer__social">
                  <a href="https://m.facebook.com/people/Piero-Carusso-Urtecho/100087936861192/"  target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <i className="ri-facebook-circle-fill"></i>
                  </a>

                  <a href="https://www.instagram.com/piero_carusso/"  target="_blank"  rel="noopener noreferrer"className="footer__social-link">
                  <i className="ri-instagram-fill"></i>
                  </a>

                  <a href="https://www.instagram.com/piero_carusso?igsh=MXRxbjc5dDM0bXBrYw=="  target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <i className="ri-twitter-x-fill"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/piero-carusso-jauregui-urtecho-894b22232/"  target="_blank"  rel="noopener noreferrer" className="footer__social-link">
                  <i className="ri-linkedin-box-fill"></i>
                  </a>
            </div>
      </div>

<span className="footer__copy">
     Piero Carusso - Desarrollador Full Stack - Todos los derechos reservados. 
     &#169; Copyright 2024
</span>


</div>
<a href="#" className="scrollup" id='scroll-up'>
      <i className="ri-arrow-up-line"></i>
      </a>
            </footer>
      );
}