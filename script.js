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
  intro.textContent = "DeliPlan es una aplicación móvil yopaleña que te permite encontrar, de forma fácil, rápida y segura, una amplia variedad de establecimientos de gastronomía y comercio en general. Gracias al patrocinio de nuestros comerciantes afiliados, ofrecemos beneficios exclusivos para nuestros usuarios.";
  app.appendChild(intro);

  const sections = [
    {
      heading: "💰 Devolución de dinero",
      content: "Recibe $5.000 pesos que DeliPlan te reembolsa una vez al mes en cada establecimiento afiliado. Este beneficio aplica para compras superiores a $10.000. Solo debes presentar tu tarjeta gratuita. El dinero acumulado será entregado al finalizar cada mes."
    },
    {
      heading: "🎁 Premios, descuentos y domicilios gratuitos",
      content: "Podrás acceder a premios sorpresa, descuentos especiales en establecimientos afiliados y un servicio de domicilio gratuito a partir de tu quinto pedido con nuestro aliado “DomiDani”."
    },
    {
      heading: "🔍 ¿Cómo funciona?",
      content: "Para acceder a estos beneficios, solicita tu tarjeta virtual gratuita. Esta funciona como un sistema de puntos: preséntala al momento de pagar en los establecimientos afiliados y comienza a disfrutar de las ventajas que DeliPlan tiene para ti."
    },
    {
      heading: "📜 Términos y condiciones",
      content: "Los beneficios ofrecidos son gratuitos y están sujetos a cambios. Cualquier modificación será publicada en este espacio."
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
      text: "Solicitar Tarjeta",
      link: "https://forms.gle/dVgsnikiGkgRo2kD6"
    },
    {
      text: "Contactar Soporte",
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
