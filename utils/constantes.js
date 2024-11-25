const path = require("path");
const { products } = require("./product");

const context = {
  static(filename) {
    return path.resolve("/", filename);
  },
  faq: [
    {
      id: 0,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      response:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab veniam qui ducimus nesciunt cupiditate, ullam suscipit autem. Perspiciatis at ipsam velit pariatur quae. Voluptatem sequi quibusdam minima quae laborum.",
    },
  ],
  products: products,
  getProducts() {
    return JSON.stringify(this.ctx.products);
  },
};

module.exports = { context };
