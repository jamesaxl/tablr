import Column from './Column';
import render from './render';


class Tablr {

  constructor(element, props) {
    this.element = resolveElement(element);
    this.columns = props.columns.map(a => new Column(a));
    this.rows = props.rows;
    this.render();
  }


  render() {
    this.element.appendChild(render.header(this.columns));
    this.element.appendChild(render.body(tabularRows(this.rows, this.columns)));
  }
}


function resolveElement(element) {
  const resolvedElement = typeof element === 'string' ? document.querySelector(element) : element;
  if (resolvedElement.tagName !== 'TABLE') throw new Error('Element must be a table');
  return resolvedElement;
}


function tabularRows(rows, columns) {
  return rows.map(row => Object.keys(row)
    .map(id => row[id]));
}


export default Tablr;
