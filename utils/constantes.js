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
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit? 0",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit? 1",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit? 2",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit? 3",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
  ],
  team: [
    {
      image: "../../img/icon-placeholder.svg",
      name: "Lorem ipsum",
      occupation: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia voluptatem id eveniet aperiam saepe dolorem dignissimos iste mollitia et. ",
    },
    {
      image: "../../img/icon-placeholder.svg",
      name: "Lorem ipsum",
      occupation: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia voluptatem id eveniet aperiam saepe dolorem dignissimos iste mollitia et. ",
    },
    {
      image: "../../img/icon-placeholder.svg",
      name: "Lorem ipsum",
      occupation: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia voluptatem id eveniet aperiam saepe dolorem dignissimos iste mollitia et. ",
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
