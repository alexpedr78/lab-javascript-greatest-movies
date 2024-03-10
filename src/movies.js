// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const arrOfDirectors = moviesArray.map((film) => film.director);
  return arrOfDirectors;
}

function getDirectorsUnified() {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const arrSpielbergDrama = moviesArray.filter((film) => {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });
  return arrSpielbergDrama.length;
}
// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumOfNotes = moviesArray.reduce((acc, movie) => {
    if (movie.score !== undefined) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  // console.log(sumOfNotes);

  const average = sumOfNotes / moviesArray.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const arrOnlyDrama = moviesArray.filter((elem) =>
    elem.genre.includes("Drama")
  );
  const averageDramaScore = scoresAverage(arrOnlyDrama);
  return averageDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMovieArray = structuredClone(moviesArray);

  newMovieArray.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    return a.title.localeCompare(b.title);
  });

  return newMovieArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabet = structuredClone(moviesArray);

  const newArr = alphabet.map((elem) => {
    return elem.title;
  });

  newArr.sort((a, b) => a.localeCompare(b));

  const result = newArr.slice(0, 20);
  //   const alphabet = newArray.slice(0, 21);

  //   alphabet.sort((a, b) => a.localeCompare(b));
  //   //
  //   //   const newArray2 = newArray.filter((elem) => elem.title);
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
//   const newArr = JSON.parse(JSON.stringify(moviesArray));

//   const hello = newArr.forEachs((movie) => {
//     let holla = [];
//     holla = movie.duration.split("h");
//     movie.duration = parseInt(holla[0]) * 60 + parseInt(holla[1]);
//     console.log(movie.duration);
//   });

//   return hello;
// }
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((movie) => {
    const newMovie = { ...movie };

    const [hoursStr, minutesStr] = movie.duration.split("h ");

    const hours = parseInt(hoursStr) || 0;
    const minutes = parseInt(minutesStr) || 0;

    newMovie.duration = hours * 60 + minutes;

    return newMovie;
  });

  return newArray;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  return `The best year was <YEAR> with an average score of <RATE>`;
}
