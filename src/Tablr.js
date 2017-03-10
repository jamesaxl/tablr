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
    [
      render.header(this.columns),
      render.body(tabularRows(this.rows, this.columns)),
    ].forEach(section => this.element.appendChild(section));
    Array.from(this.element.querySelectorAll('thead > th')).forEach((th, i) => {
      this.columns[i].element = th;
    });
  }
}


function resolveElement(element) {
  const resolvedElement = typeof element === 'string' ? document.querySelector(element) : element;
  if (resolvedElement.tagName !== 'TABLE') throw new Error('Element must be a table');
  return resolvedElement;
}


function tabularRows(rows, columns) {
  const allIds = columns.map(column => column.id);
  return rows.map(row => allIds.map(id => row[id]));
}


export default Tablr;
