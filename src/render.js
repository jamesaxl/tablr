function header(columns) {
  return document.createElement('thead').appendChild(columns
    .map(column => column.label)
    .reduce(th, document.createElement('tr')));
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
