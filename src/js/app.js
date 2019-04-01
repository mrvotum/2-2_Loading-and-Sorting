import * as sortLike from './sort';
import creatTable from './creatingTable';
import creatSortTable from './creatSortTable';

const sortArr = [
  sortLike.byId, sortLike.byIdInvert, sortLike.byTitle, sortLike.byTitleInvert,
  sortLike.byYear, sortLike.byYearInvert, sortLike.byImdb, sortLike.byImdbInvert
]
const dataJSON = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
];

creatTable(dataJSON);


let elements = document.getElementsByClassName('infMovie'); 
// let elements = document.querySelectorAll("[data-id]"); // все tr
var dataAttrsArr = [] 

// создадим массив из tr
for (var i = elements.length - 1; i >= 0; i--) {
  dataAttrsArr.push(elements[i]);
}


let sortFunc = sortArr[0];

const timer = setInterval(function() {
  if (i < 7) {
    sortFunc = sortArr[i];
    dataAttrsArr.sort(sortFunc);
    creatSortTable(dataAttrsArr);
    i = i + 1;
  } else {
    i = 0;
    sortFunc = sortArr[i];
    dataAttrsArr.sort(sortFunc);
    creatSortTable(dataAttrsArr);
  }
}, 3000);
