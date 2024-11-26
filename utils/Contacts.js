class Contacts {
  constructor(props = {}) {
    const { address_name, address_link, telephone, email, maps } = props;
    this.address_name = address_name;
    this.address_link = address_link;
    this.telephone = telephone;
    this.email = email;
    this.maps = maps;

    this.telephone_link = this.set_telephone_link();
    this.email_link = this.set_email_link();
  }

  set_telephone_link() {
    return `tel:${this.telephone}`;
  }

  set_email_link() {
    return `mail:${this.email}`;
  }
}

module.exports = { Contacts };
