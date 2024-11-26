class Service {
  constructor(props = {}) {
    const { id, name, description, img } = props;
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;

    this.link = this.get_link();
    this.short_description = this.get_short_description();
  }

  get_link() {
    const url = new URLSearchParams();
    url.set("id", this.id);
    return "/service?" + url.toString();
  }

  get_short_description() {
    const len = this.description.length;
    const short_descript = this.description.slice(0, len > 55 ? 55 : len - 1);
    return short_descript + "...";
  }
}

const products = [
  new Service({
    id: 0,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
  }),
  new Service({
    id: 1,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-2.svg",
  }),
  new Service({
    id: 2,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
  }),
  new Service({
    id: 0,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
  }),
  new Service({
    id: 1,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-2.svg",
  }),
  new Service({
    id: 2,
    name: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    img: "../../img/placeholder-1.svg",
  }),
];

module.exports = { products };
