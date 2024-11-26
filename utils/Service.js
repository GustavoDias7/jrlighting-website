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

module.exports = { Service };
