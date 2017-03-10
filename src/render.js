function header(columns) {
  return document.createElement('thead')
    .appendChild(columns
      .reduce(th, document.createElement('tr')));
}


function body(rows) {
  const tbody = document.createElement('tbody');
  rows.forEach((row) => {
    tbody.appendChild(row
      .reduce(td, document.createElement('tr')));
  });
  return tbody;
}


function th(row, column) {
  return cell(row, column.label, 'th');
}


function td(row, rowContent) {
  return cell(row, rowContent, 'td');
}


function cell(row, text, type) {
  const element = document.createElement(type);
  element.appendChild(document.createTextNode(text));
  row.appendChild(element);
  return row;
}


export default {
  header,
  body,
};
