document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.className = "container";

  const title = document.createElement("h1");
  title.textContent = "¡Te damos la bienvenida a DeliPlan!";
  title.style.color = "#1e90ff";
  title.style.textAlign = "center";
  title.style.fontSize = "28px";
  app.appendChild(title);

  const intro = document.createElement("p");
  intro.textContent = "DeliPlan es la aplicación móvil yopaleña que te permite encontrar de manera fácil, rápida y segura una amplia variedad de establecimientos de gastronomía y comercio en general. Gracias al patrocinio de nuestros comercios afiliados, ofrecemos beneficios exclusivos.";
  app.appendChild(intro);

  const sections = [
    {
      heading: "💰 Devolución de dinero",
      content: "Recibe $5.000 pesos que te devuelve DeliPlan una vez al mes en cada establecimiento afiliado, por compras superiores a $10.000. Solo debes presentar tu tarjeta gratuita y acumularás el dinero, que será entregado al final del mes."
    },
    {
      heading: "🎁 Premios, descuentos y domicilios gratis",
      content: "Disfruta de premios sorpresa, descuentos especiales en establecimientos afiliados y un servicio de domicilio gratuito desde tu quinto pedido con 'DomiDani'."
    },
    {
      heading: "🔍 ¿Cómo funciona?",
      content: "Solicita tu tarjeta de beneficios completamente gratuita. Funciona como una tarjeta de puntos. Preséntala al pagar en los establecimientos afiliados y empieza a disfrutar tus ventajas."
    },
    {
      heading: "📜 Términos y condiciones",
      content: "Estos beneficios son totalmente gratuitos y están sujetos a cambios. Las modificaciones serán publicadas en esta página."
    }
  ];

  sections.forEach(({ heading, content }) => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = heading;
    h2.style.color = "#0a558c";
    section.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = content;
    section.appendChild(p);

    app.appendChild(section);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const buttons = [
    {
      text: "📝 Solicitar Tarjeta",
      link: "https://forms.gle/dVgsnikiGkgRo2kD6"
    },
    {
      text: "💬 Contactar Soporte",
      link: "https://forms.gle/aYB4m8Rg87H9SVsk9"
    }
  ];

  buttons.forEach(({ text, link }) => {
    const button = document.createElement("a");
    button.textContent = text;
    button.href = link;
    button.className = "button";
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    buttonContainer.appendChild(button);
  });

  app.appendChild(buttonContainer);
});
