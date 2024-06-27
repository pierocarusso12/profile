import { motion } from "framer-motion";
import { saveAs } from 'file-saver';

export function Home() {

  const descargarCV = () => {
    saveAs('CV-PIERO-CARUSSO.pdf', 'CV-PIERO-CARUSSO.pdf');
  };

  const bgHeader = () => {
    const header = document.getElementById("header");

    // Utiliza window.scrollY en lugar de this.scrollY
    window.scrollY >= 50
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  };

  window.addEventListener("scroll", bgHeader);

  const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 0.7 }}
    >
      <section className="home section">
        <div className="home__rectangle"> </div>

        <div className="home__container container grid">
          <div className="home__perfil perfil">
            <div className="perfil__content">
              <img src="dev.png" alt="image" className="perfil__img" />
            </div>
          </div>

          <div className="home__content grid">
            <div className="home__data grid">
              <h1 className="home__name">Piero Carusso</h1>
              <h2 className="home__profession">Desarrollador Full Stack</h2>

              <div className="home__social">
                <a
                  href="https://github.com/pierocarusso12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/piero-carusso-jauregui-urtecho-894b22232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/piero_carusso?igsh=MXRxbjc5dDM0bXBrYw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>
            <a href="#" onClick={descargarCV} className="home__button button">
  Descargar CV
</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
