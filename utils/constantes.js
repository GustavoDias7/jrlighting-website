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
    whatsapp: "https://wa.me/552199999999",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
  contacts: new Contacts({
    address_name: "Rio de Janeiro-RJ, Brasil",
    address_link:
      "https://maps.google.com/maps?ll=-22.914131,-43.445982&z=9&t=m&hl=en&gl=BR&mapclient=embed&q=Rio%20de%20Janeiro%20State%20of%20Rio%20de%20Janeiro",
    telephone: "(21) 4002-8922",
    email: "email@email.com",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470400.7386830834!2d-43.77565508292252!3d-22.91315798611381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1725457331794!5m2!1sen!2sbr",
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
