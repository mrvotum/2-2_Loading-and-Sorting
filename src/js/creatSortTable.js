function removeChildren(elem) {
  elem.lastChild.removeChild(elem.lastChild.children[1]);
}

export default function creatSortTable(dataJSON) {
  const table = document.querySelector('[data-table=tableWithMovies]');

  for (let i = 0; i < dataJSON.length; i++) {

    const trEl = document.createElement('tr');
    trEl.className = 'infMovie';
    trEl.setAttribute('data-id', dataJSON[i].getAttribute('data-id'));
    trEl.setAttribute('data-title', dataJSON[i].getAttribute('data-title'));
    trEl.setAttribute('data-year', dataJSON[i].getAttribute('data-year'));
    trEl.setAttribute('data-imdb', dataJSON[i].getAttribute('data-imdb'));

    const emptyTr = table.children[0];
    emptyTr.appendChild(trEl);

    let tdEl = document.createElement('td');
    tdEl.innerHTML = dataJSON[i].getAttribute('data-id');
    emptyTr.lastChild.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.innerHTML = dataJSON[i].getAttribute('data-title');
    emptyTr.lastChild.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.innerHTML = `(${dataJSON[i].getAttribute('data-year')})`;
    emptyTr.lastChild.appendChild(tdEl);
    
    tdEl = document.createElement('td');
    tdEl.innerHTML = `imdb: ${dataJSON[i].getAttribute('data-imdb')}`;
    emptyTr.lastChild.appendChild(tdEl);

    removeChildren(table);
  };
};
