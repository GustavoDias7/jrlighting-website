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
        "Aceitamos pagamentos via transferência bancária, cartão de crédito, PIX ou boleto. Parcelamos conforme a negociação do contrato, de acordo com o valor total do serviço.",
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
      image: "../../img/jorge-gomes.png",
      name: "Jorge Gomes",
      description:
        "Técnico de som com vasta experiência em configurar, operar e manter equipamentos de áudio, garantindo som perfeito e sem falhas em eventos, shows e produções audiovisuais.",
    },
  ],
  social_links: {
    whatsapp: "https://wa.me/21979114806",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
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
    name: "Lorem ipsum dolor 0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 1,
    name: "Lorem ipsum dolor 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-2.svg",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 2,
    name: "Lorem ipsum dolor 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 3,
    name: "Lorem ipsum dolor 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 4,
    name: "Lorem ipsum dolor 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-2.svg",
    whatsapp: context.social_links.whatsapp,
  }),
  new Service({
    id: 5,
    name: "Lorem ipsum dolor 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
    whatsapp: context.social_links.whatsapp,
  })
);

module.exports = { context };

// Oferecemos locação de equipamentos, mão de obra qualificada e projetos personalizados de palco e infraestrutura. Também fornecemos soluções completas em som, luz e imagem, garantindo o sucesso do seu evento.

// Trabalhamos com locação de equipamentos, profissionais especializados e desenvolvimento de projetos de palco e infraestrutura. Além disso, oferecemos soluções completas em som, luz e imagem para tornar seu evento inesquecível.

// Disponibilizamos locação de equipamentos, mão de obra qualificada e projetos exclusivos de palco e infraestrutura. Também fornecemos soluções completas em som, luz e imagem, garantindo a excelência do seu evento.
