function resolveElement(element) {
  if (element instanceof Element) return element;
  return document.querySelector(element);
}


class Tablr {

  constructor(element) {
    this.element = resolveElement(element);
  }
}


export default Tablr;
