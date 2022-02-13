'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

// start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();


function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log('Мало фильмов');
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Нормально так');
  } else if (personalMoviesDB.count >= 30) {
    console.log('Вообще красава!');
  } else {
    console.log('Ну значит в другой раз');
  }

}

// detectPersonalLevel();

function test(hiden) {
  if (!hiden) {
    console.log(personalMoviesDB);
  }
}

test(personalMoviesDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMoviesDB.genres[i - 1] = genre;
  }
}

writeYourGenres();


