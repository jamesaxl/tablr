function header(columns) {
  const thead = document.createElement('thead');
  thead.appendChild(columns
    .map(column => column.label)
    .reduce(th, document.createElement('tr')));
  return thead;
}


function body(rows) {
  const tbody = document.createElement('tbody');
  rows.forEach(row => tbody.appendChild(row
    .reduce(td, document.createElement('tr'))));
  return tbody;
}


const th = cell('th');
const td = cell('td');

function cell(type) {
  return (row, text) => {
    const element = document.createElement(type);
    element.appendChild(document.createTextNode(text));
    row.appendChild(element);
    return row;
  };
}


export default {
  header,
  body,
};
