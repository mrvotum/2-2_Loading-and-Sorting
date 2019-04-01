export default function creatTable(dataJSON) {
  for (var i = 0; i < dataJSON.length; i++) {
    const trEl = document.createElement('tr');
    trEl.className = 'infMovie';
    trEl.setAttribute('data-id', dataJSON[i].id);
    trEl.setAttribute('data-title', dataJSON[i].title);
    trEl.setAttribute('data-year', dataJSON[i].year);
    trEl.setAttribute('data-imdb', dataJSON[i].imdb);

    const table = document.querySelector('[data-table=tableWithMovies]');
    const emptyTr = table.children[0];
    emptyTr.appendChild(trEl);

    let tdEl = document.createElement('td');
    tdEl.innerHTML = dataJSON[i].id;
    emptyTr.lastChild.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.innerHTML = dataJSON[i].title;
    emptyTr.lastChild.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.innerHTML = `(${dataJSON[i].year})`;
    emptyTr.lastChild.appendChild(tdEl);
    
    tdEl = document.createElement('td');
    tdEl.innerHTML = `imdb: ${dataJSON[i].imdb.toFixed(2)}`;
    emptyTr.lastChild.appendChild(tdEl);
  };
};
