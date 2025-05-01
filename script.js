document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const title = document.createElement("h1");
  title.textContent = "¡Te damos la bienvenida a DeliPlan!";
  app.appendChild(title);

  const intro = document.createElement("p");
  intro.textContent = "DeliPlan es una aplicación móvil yopaleña que te permite encontrar, de forma fácil, rápida y segura, una amplia variedad de establecimientos de gastronomía y comercio en general. Gracias al patrocinio de nuestros comerciantes afiliados, ofrecemos beneficios exclusivos para nuestros usuarios.";
  app.appendChild(intro);

  const sections = [
    {
      heading: "🎁 Premios, descuentos y domicilios gratuitos",
      content: "Podrás acceder a premios sorpresa, descuentos especiales en establecimientos afiliados y un servicio de domicilio gratuito a partir de tu quinto pedido con nuestro aliado “DomiDani”."
    },
    {
      heading: "🔍 ¿Cómo funciona?",
      content: "Para acceder a estos beneficios, solicita tu tarjeta virtual gratuita. Preséntala al momento de pagar en los establecimientos afiliados y comienza a disfrutar de las ventajas que DeliPlan tiene para ti."
    },
    {
      heading: "📜 Términos y condiciones",
      content: "Los beneficios ofrecidos son gratuitos y están sujetos a cambios. Cualquier modificación será publicada en este espacio."
    }
  ];

  sections.forEach(({ heading, content }) => {
    const h2 = document.createElement("h2");
    h2.textContent = heading;
    app.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = content;
    app.appendChild(p);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.style.marginTop = "30px";
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.alignItems = "center";
  buttonContainer.style.gap = "12px";

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
    button.style.display = "inline-block";
    button.style.padding = "12px 20px";
    button.style.backgroundColor = "#1e90ff";
    button.style.color = "#fff";
    button.style.textDecoration = "none";
    button.style.borderRadius = "4px";
    button.style.fontSize = "16px";
    button.style.width = "220px";
    button.style.textAlign = "center";
    button.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    button.onmouseover = () => button.style.backgroundColor = "#0f6bcf";
    button.onmouseout = () => button.style.backgroundColor = "#1e90ff";

    buttonContainer.appendChild(button);
  });

  app.appendChild(buttonContainer);
});
