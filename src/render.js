function header(columns) {
  return document.createElement('thead')
    .appendChild(columns
      .reduce(th, document.createElement('tr')));
}


function body(rows) {
  return document.createElement('tbody')
    .appendChild(rows
      .reduce(td, document.createElement('tr')));
}


function cell(row, column, type) {
  const element = document.createElement(type);
  element.appendChild(document.createTextNode(column.label));
  row.appendChild(element);
  return row;
}


function th(row, column) {
  return cell(row, column, 'th');
}


function td(row, column) {
  return cell(row, column, 'td');
}


export default {
  header,
  body,
};
