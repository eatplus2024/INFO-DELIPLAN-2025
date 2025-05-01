document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.style.fontFamily = "Arial, sans-serif";
  app.style.padding = "20px";
  app.style.maxWidth = "600px";
  app.style.margin = "auto";
  app.style.color = "#333";

  const title = document.createElement("h1");
  title.textContent = "TE DAMOS LA BIENVENIDA";
  title.style.fontSize = "24px";
  title.style.textAlign = "center";
  title.style.color = "#004aad";
  app.appendChild(title);

  const sections = [
    "DeliPlan es la aplicación móvil yopaleña que te permite encontrar de manera fácil, rápida y segura, una amplia variedad de establecimientos comerciales de gastronomía y comercio en general. Gracias al patrocinio de nuestros comerciantes afiliados, ofrecemos una serie de beneficios exclusivos para nuestros usuarios.",
    "\n\nDevolución de dinero:\nRecibe $5.000 pesos que te devuelve DeliPlan una vez al mes en cada establecimiento, en compras superiores a $10.000, presentando tu Tarjeta/carnet gratuita, el dinero acumulado será entregado a fin de cada mes.",
    "\n\nPremios sorpresa, descuentos especiales y domicilios gratis:\npodrás recibir premios sorpresa, descuentos especiales en algunos de los establecimientos afiliados, y disfruta de un servicio a domicilio gratis a partir de tu quinto pedido con “DomiDani”.",
    "\n\nCómo Funciona:\nPara acceder a estos increíbles beneficios, solo necesitas solicitar tu Tarjeta/carnet de Beneficios totalmente gratuita. Esta tarjeta virtual funciona de manera similar a los sistemas de puntos de grandes almacenes y estaciones de servicio. Presenta tu tarjeta virtual al momento de pagar tus compras en los establecimientos afiliados y comienza a disfrutar de todas las ventajas que DeliPlan tiene para ti. Si tienes preguntas, no dudes en contactarnos. ¡Estamos aquí para ayudarte!",
    "\n\nTérminos y Condiciones:\nEstos beneficios son gratuitos y están sujetos a modificaciones que se publicarán en este apartado."
  ];

  sections.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    p.style.marginBottom = "20px";
    app.appendChild(p);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.gap = "15px";
  buttonContainer.style.marginTop = "30px";

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
    const btn = document.createElement("a");
    btn.textContent = text;
    btn.href = link;
    btn.target = "_blank";
    btn.style.textAlign = "center";
    btn.style.padding = "15px";
    btn.style.borderRadius = "10px";
    btn.style.background = "#007BFF";
    btn.style.color = "white";
    btn.style.textDecoration = "none";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "16px";
    buttonContainer.appendChild(btn);
  });

  app.appendChild(buttonContainer);
});
