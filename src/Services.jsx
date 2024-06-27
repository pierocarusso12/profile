export function Services() {
  const modal = document.querySelectorAll(".services__modal"),
    modalButton = document.querySelectorAll(".services__button"),
    modalClose = document.querySelectorAll(".services__modal-close");

  let activeModal = (modalClick) => {
    modal[modalClick].classList.add("active-modal");
  };

  modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener("click", () => {
      activeModal(i);
    });
  });

  modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modal.forEach((modalRemove) => {
        modalRemove.classList.remove("active-modal");
      });
    });
  });
  console.log("Modal cargado");

  return (
    <main className="main">
      <section className="services section">
        <h2 className="section__title">Servicios que puedes obtener conmigo</h2>

        <div className="services__container container grid">
          <article className="services__card">
            <i className="ri-code-s-slash-fill services__icon"></i>
            <h2 className="services__title">Páginas Web</h2>

            <p className="services__description">
              Te ayudo a realizar Páginas web interactivas , amigables y
              modernas para el usuario
            </p>

            {/*<button className="services__button button">
                              Ver más
      </button>*/}

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="ri-close-fill services__modal-close"></i>
                <h2 className="services__modal-title">Paginas web</h2>
                <ul className="services__modal-list-grid">
                  <li className="services__modal-item">
                    Crear sitios web profesionales y de calidad a petición del
                    cliente.
                  </li>

                  <li className="services__modal-item">
                    Hago diseño web en prototipos.
                  </li>

                  <li className="services__modal-item">
                    Posiciono tu sitio web con SEO avanzado
                  </li>

                  <li className="services__modal-item">
                    Resuelvo problemas de rendimiento en páginas web
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="services__card">
            <i className="ri-instance-line services__icon"></i>
            <h2 className="services__title">Aplicativos Web</h2>
            <p className="services__description">
              Te ayudo a diseñar aplicativos web , interactivos , con velocidad
              de carga y con amplios manejos de servicios
            </p>

            {/* <button className="services__button button">
                              Ver más
                        </button>*/}
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="ri-close-fill services__modal-close"></i>
                <h2 className="services__modal-title">Aplicativos web</h2>
                <ul className="services__modal-list-grid">
                  <li className="services__modal-item">
                    Crear sitios web profesionales y de calidad a petición del
                    cliente.
                  </li>

                  <li className="services__modal-item">
                    Hago diseño web en prototipos.
                  </li>

                  <li className="services__modal-item">
                    Posiciono tu sitio web con SEO avanzado
                  </li>

                  <li className="services__modal-item">
                    Resuelvo problemas de rendimiento en páginas web
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="services__card">
            <i className="ri-terminal-window-fill services__icon"></i>
            <h2 className="services__title">Aplicativos de Escritorio</h2>
            <p className="services__description">
              Te ayudo a construir un aplicativo web escalable , interactivo y
              de forma profesional
            </p>

            {/*<button className="services__button button">
                              Ver más
                  </button>*/}
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="ri-close-fill services__modal-close"></i>
                <h2 className="services__modal-title">
                  Aplicativos de Escritorio
                </h2>
                <ul className="services__modal-list-grid">
                  <li className="services__modal-item">
                    Crear sitios web profesionales y de calidad a petición del
                    cliente.
                  </li>

                  <li className="services__modal-item">
                    Hago diseño web en prototipos.
                  </li>

                  <li className="services__modal-item">
                    Posiciono tu sitio web con SEO avanzado
                  </li>

                  <li className="services__modal-item">
                    Resuelvo problemas de rendimiento en páginas web
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
