class Service {
  constructor(props = {}) {
    const { id, name, description, img, whatsapp } = props;
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
    this.whatsapp = whatsapp;

    this.link = this.set_link();
    this.short_description = this.set_short_description();
    this.whatsapp_link = this.set_whatsapp_link();
  }

  set_link() {
    const url = new URLSearchParams();
    url.set("id", this.id);
    return "/service?" + url.toString();
  }

  set_short_description() {
    const len = this.description.length;
    const short_descript = this.description.slice(0, len > 55 ? 55 : len - 1);
    return short_descript + "...";
  }

  set_whatsapp_link() {
    const url = new URLSearchParams();
    url.set(
      "text",
      `Olá, eu gostaria de fazer o pedido do serviço: ${this.name}.`
    );
    return `${this.whatsapp}?${url.toString()}`;
  }
}

module.exports = { Service };
