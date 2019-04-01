function byId(a,b) {
  const table = document.getElementById('id');
  table.textContent = `id ↓`;
  return a.getAttribute("data-id") - b.getAttribute("data-id");
}
function byIdInvert(a,b) {
  const table = document.getElementById('id');
  table.textContent = `id ↑`;
  //console.log('&darr');
  return b.getAttribute("data-id") - a.getAttribute("data-id");
}

function byTitle(a,b) {
  const table = document.getElementById('title');
  table.textContent = `title ↓`;
  return a.getAttribute("data-title") - b.getAttribute("data-title");
}
function byTitleInvert(a,b) {
  const table = document.getElementById('title');
  table.textContent = `title ↑`;
  return b.getAttribute("data-title") - a.getAttribute("data-title");
}

function byYear(a,b) {
  const table = document.getElementById('year');
  table.textContent = `year ↓`;
  return a.getAttribute("data-year") - b.getAttribute("data-year");
}
function byYearInvert(a,b) {
  const table = document.getElementById('year');
  table.textContent = `year ↑`;
  return b.getAttribute("data-year") - a.getAttribute("data-year");
}

function byImdb(a,b) {
  const table = document.getElementById('imdb');
  table.textContent = `imdb ↓`;
  return a.getAttribute("data-imdb") - b.getAttribute("data-imdb");
}
function byImdbInvert(a,b) {
  const table = document.getElementById('imdb');
  table.textContent = `imdb ↑`;
  return b.getAttribute("data-imdb") - a.getAttribute("data-imdb");
}


// function byId(a,b) {
//   const table = document.getElementById('id');
//   table.textContent = `id ↓`;
//   if (a.id < b.id)
//     return -1;
//   if (a.id > b.id)
//     return 1;
//   return 0;
// }
// function byIdInvert(a,b) {
//   const table = document.getElementById('id');
//   table.textContent = `id ↑`;
//   //console.log('&darr');
//   if (b.id < a.id)
//     return -1;
//   if (b.id > a.id)
//     return 1;
//   return 0;
// }

// function byTitle(a,b) {
//   const table = document.getElementById('title');
//   table.textContent = `title ↓`;
//   if (a.title < b.title)
//     return -1;
//   if (a.title > b.title)
//     return 1;
//   return 0;
// }
// function byTitleInvert(a,b) {
//   const table = document.getElementById('title');
//   table.textContent = `title ↑`;
//   if (b.title < a.title)
//     return -1;
//   if (b.title > a.title)
//     return 1;
//   return 0;
// }

// function byYear(a,b) {
//   const table = document.getElementById('year');
//   table.textContent = `year ↓`;
//   if (a.year < b.year)
//     return -1;
//   if (a.year > b.year)
//     return 1;
//   return 0;
// }
// function byYearInvert(a,b) {
//   const table = document.getElementById('year');
//   table.textContent = `year ↑`;
//   if (b.year < a.year)
//     return -1;
//   if (b.year > a.year)
//     return 1;
//   return 0;
// }

// function byImdb(a,b) {
//   const table = document.getElementById('imdb');
//   table.textContent = `imdb ↓`;
//   if (a.imdb < b.imdb)
//     return -1;
//   if (a.imdb > b.imdb)
//     return 1;
//   return 0;
// }
// function byImdbInvert(a,b) {
//   const table = document.getElementById('imdb');
//   table.textContent = `imdb ↑`;
//   if (b.imdb < a.imdb)
//     return -1;
//   if (b.imdb > a.imdb)
//     return 1;
//   return 0;
// }

export { byId, byTitle, byYear, byImdb, byIdInvert, byTitleInvert, byYearInvert, byImdbInvert };
