'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов ?'),
    b = prompt('На сколько оцените его?');

  if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    personalMoviesDB.movies[a] = b;
  } else {
    alert('Error');
    i--;
  }
}

if (personalMoviesDB.count < 10) {
  console.log('Мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
  console.log('Нормально так');
} else if (personalMoviesDB.count >= 30) {
  console.log('Вообще красава!');
} else {
  console.log('Ну значит в другой раз');
}

console.log(personalMoviesDB);

