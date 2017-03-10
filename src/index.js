import Column from './Column';
import render from './render';


class Tablr {

  constructor(element, props) {
    this.element = resolveElement(element);
    this.columns = props.columns.map(a => new Column(a));
    this.rows = [];
    this.render();
  }


  render() {
    this.element.appendChild(render.header(this.columns));
    this.element.appendChild(render.body(this.rows));
  }
}


function resolveElement(element) {
  const resolvedElement = typeof element === 'string' ? document.querySelector(element) : element;
  if (resolvedElement.tagName !== 'TABLE') throw new Error('Element must be a table');
  return resolvedElement;
}


const tablr = new Tablr('#has-schema', {
  columns: [
    {
      label: 'UserID',
      dataType: 'number',
    },
    {
      label: 'First Name',
      dataType: 'string',
    },
    {
      label: 'Last Name',
      dataType: 'string',
    },
    {
      label: 'Age',
      dataType: 'number',
    },
  ],
});
console.log(tablr);


export default Tablr;
