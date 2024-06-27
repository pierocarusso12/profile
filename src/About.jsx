import { motion } from 'framer-motion';
export function About() {

    
      const fadeInVariants = {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          };
        
     
       return (
        <main className="main">
             <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 1 }}
    >
            <section className="about section" id="acerca">
                  <h2 className="section__title">
                        Acerca  de
                        Mi
                  </h2>

                  <div className="about__container about__page container grid">
                        <div className="about__perfil perfil">
                              <div className="perfil__content">
                                    <img src="dev.png" alt="image" className="perfil__img" />
                              </div>
                        </div>

                        <div className="about__content grid">
                              <div className="about__data grid">
                                    <div className="about__info grid">
                                          <h1 className="about__name">Piero Carusso</h1>
                                          <h2 className="about__profession">Desarrollador Full Stack</h2>
                                          <p className="about__description">
                                                Apasionado por el desarrollo de <b>Páginas y Aplicativos web</b> utilizando <b>Diseño UX y UIX.</b> Tengo más de 3 años de experiencia en la creación de proyectos innovadores que
                                                contribuyen al mundo
                                          </p>
                                    </div>

                                    <a href="https://wa.link/hwe3g1" target='_blank'  rel="noopener noreferrer"  className="about__button button">Contáctame</a>
                              </div>

                              <div className="about__skilss">
                        
                                    <h2 className="section__title">Tecnologías que domino</h2>
                                    <div className="about__skills-content grid">

                                          <img src="html.png" alt="image" className="about__skills-img" />
                                          <img src="css.png" alt="image" className="about__skills-img" />
                                          <img src="javascript.png" alt="image" className="about__skills-img" />
                                          <img src="php.png" alt="image" className="about__skills-img" />
                                          <img src="nodejs.png" alt="image" className="about__skills-img" />
                                          <img src="react.png" alt="image" className="about__skills-img" />
                                          <img src="python.png" alt="image" className="about__skills-img" />
                                          <img src="mysql.png" alt="image" className="about__skills-img" />
                                          <img src="s.png" alt="image" className="about__skills-img" />
                                          <img src="typescript.png" alt="image" className="about__skills-img" />
                                          <img src="git.png" alt="image" className="about__skills-img" />
                                          <img src="github.png" alt="image" className="about__skills-img" />
                                          <img src="figma.png" alt="image" className="about__skills-img" />
                                          <img src="wordpress.png" alt="image" className="about__skills-img" />

                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
            </motion.div>
        </main>
       );
     }
     