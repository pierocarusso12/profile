import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';



export function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_yxav1un', 'template_h7vthsm', form.current, 'lUKMBVDgUdOV0uEQc')
    .then(
      (result) => {
        console.log(result.text);
        toast.success('Mensaje Enviado', {
          description: 'Te responderé lo más pronto posible',
          style: {
            background: 'green',
            color: 'white',
          },
          iconTheme: {
            primary: 'white',
            secondary: 'white',
          },
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        toast.error('Error al enviar el mensaje', {
          description: 'Por favor, inténtalo de nuevo más tarde.',
          style: {
            background: 'red',
            color: 'white',
          },
          iconTheme: {
            primary: 'white',
            secondary: 'white',
          },
        });
      }
    );
};
 
  return (
    <main className="main">
      <section className="contact section">
        <div className="contact__container container grid">
          <h2 className="section__title">
            Escríbeme sobre el proyecto que te interesa
          </h2>
          <div className="contact__page container grid">
            <form action="" className="contact__form grid" id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="contact__group grid">
                <div className="contact__box">
                  <input type="text" name="user_name" id="name" required placeholder="Escribe tu nombre" className="contact__input" />
                  <label htmlFor="name" className="contact__label">Nombres </label>
                </div>
                <div className="contact__box">
                  <input type="email" name="user_email" id="email" required placeholder="Escribe tu correo electrónico" className="contact__input" />
                  <label htmlFor="email" className="contact__label">Correo Electrónico</label>
                </div>
              </div>
              <div className="contact__box contact__area">
                <textarea name="message" id="message" required placeholder="Escribe tu Mensaje" className="contact__input"></textarea>
                <label htmlFor="message" className="contact__label">Mensaje</label>
              </div>
              <p className="contact__message" id="contact-message"></p>
              <button type="submit" value="Send" className="contact__send button"
          >Enviar Mensaje</button>
            </form>
            <Toaster />
          </div>
        </div>
      </section>
    </main>

    

  );
}