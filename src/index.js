import Schema from './Schema';


function Tablr(element) {
  this.element = resolveElement(element);
}


function resolveElement(element) {
  if (element instanceof Element) return element;
  return document.querySelector(element);
}


export default Tablr;
