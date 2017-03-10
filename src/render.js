function header(columns) {
  const thead = document.createElement('thead');
  thead.appendChild(columns
    .reduce(headerCell, document.createElement('tr')));
  return thead;
}


function headerCell(row, column) {
  const cell = document.createElement('th');
  cell.appendChild(document.createTextNode(column.label));
  row.appendChild(cell);
  return row;
}


function body() {

}


export default {
  header,
  body,
};
