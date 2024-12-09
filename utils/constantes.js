const path = require("path");
const { Service } = require("./Service");
const { Contacts } = require("./Contacts");

const context = {
  static(filename) {
    return path.resolve("/", filename);
  },
  faq: [
    {
      id: 0,
      question: "Quais tipos de eventos vocês atendem?",
      response:
        "Atendemos eventos corporativos, shows, festivais, casamentos, conferências, lançamentos de produtos, gravações e muito mais. Adaptamos nossos serviços conforme a necessidade do cliente.",
    },
    {
      id: 1,
      question: "Como posso solicitar um orçamento?",
      response:
        "Você pode solicitar um orçamento entrando em contato conosco pelo telefone, e-mail, WhatsApp ou endereço físico. Nosso time irá analisar suas necessidades e enviar uma proposta personalizada.",
    },
    {
      id: 2,
      question: "Vocês fornecem serviços em outras cidades ou estados?",
      response:
        "Sim, atendemos eventos em todo o Brasil, dependendo da logística e das necessidades do cliente. Entre em contato conosco para mais detalhes.",
    },
    {
      id: 3,
      question: "Quais formas de pagamento vocês aceitam?",
      response:
        "Aceitamos pagamentos via transferência bancária, cartão e PIX. Parcelamos conforme a negociação do contrato, de acordo com o valor total do serviço.",
    },
  ],
  team: [
    {
      image: "../../img/rodrigo-rodrigues.png",
      name: "Rodrigo Rodrigues",
      description:
        "Lighting designer e projetista técnico em iluminação e estrutural. Fundador e proprietário da empresa, com expertise em soluções personalizadas para eventos e projetos.",
    },
    {
      image: "../../img/matheus-monteiro.png",
      name: "Matheus Monteiro",
      description:
        "Produtor técnico especializado em coordenar aspectos técnicos de eventos, incluindo som, luz, imagem e efeitos, gerenciando equipes e resolvendo problemas técnicos durante a produção.",
    },
    {
      image: "../../img/erika-cristiane.png",
      name: "Erika Cristiane",
      description:
        "Responsável pela contabilidade, incluindo as receitas e despesas, gestão de informações, processos e agendas, proprietária da empresa e contribuindo na comunicação interna.",
    },
  ],
  social_links: {
    whatsapp: "https://wa.me/21979114806",
    facebook:
      "https://www.facebook.com/people/JRlighting/61570193494398/?mibextid=LQQJ4d&rdid=jachBKeGa81TAest&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F3jYUWw7gCY6JDCha%2F%3Fmibextid%3DLQQJ4d",
    instagram: "https://www.instagram.com/jrlighting_oficial/",
    linkedin: "https://www.linkedin.com/in/rodrigo-rodrigues-ab5445340/",
    x: "https://x.com/jrlighting_",
  },
  contacts: new Contacts({
    address_name: "Dante Goulart Nº 1, São João de Meriti",
    address_link: "https://maps.app.goo.gl/Y8aBKETDHkB47r6YA",
    telephone: "(21) 2674-3442",
    email: "washington.negroalfa@gmail.com",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.0953411788764!2d-43.339071661875245!3d-22.79877709882353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9964d7246cf4c5%3A0x551734b37ee903dd!2sParque%20Anal%C3%A2ndia%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20State%20of%20Rio%20de%20Janeiro%2C%2025586-090!5e0!3m2!1sen!2sbr!4v1733261949486!5m2!1sen!2sbr",
  }),
  services: [],
  getServices() {
    return JSON.stringify(this.ctx.services);
  },
};
context.services.push(
  new Service({
    id: 0,
    name: "Sonorização",
    description:
      "Caixas de som (line), monitores, amplificadores, sistema de fones, microfones, consoles, pedestais, direct box, man power, cabeamento e array.",
    img: "../../img/sonorizacao.webp",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 1,
    name: "Iluminação",
    description:
      "Moving spot, moving bean, moving wash, moving híbrido, par led, atomic RGBW, atomic white, ribalta P5, ribalta, cob, par #64, mini brute, elipsoidal, consoles, fog, haze, man power, splinter, rack dimmer, canhão seguidor e maquina de fumaça.",
    img: "../../img/iluminacao.webp",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 2,
    name: "Efeitos",
    description:
      "Espárcula, fire machine, CO2, CO2 silencioso, wave, gerb, papel picado, acionadores sem fio, laser, jardineira de fogo, acionador DMX e stadium shot.",
    img: "../../img/effects.webp",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 3,
    name: "Imagem",
    description: "Panel de led P3, projeção, TV e TP.",
    img: "../../img/image.webp",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 4,
    name: "Backline",
    description: "Instrumentos e amplificadores em geral.",
    img: "../../img/backline.webp",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 5,
    name: "Infraestrutura",
    description:
      "Tenda, P50, P30, P25, P15, pisos de palco, praticáveis, grades, passa cabo e caixa d'água.",
    img: "../../img/infrastructure.webp",
    whatsapp: context.social_links.whatsapp,
  })
);

module.exports = { context };
