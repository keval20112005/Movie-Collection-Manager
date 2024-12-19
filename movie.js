
let movieCollection = [];
function addMovie() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const year = parseInt(document.getElementById('year').value);

    if (!title || !genre || isNaN(rating) || isNaN(year)) {
        alert('Please fill in all fields.');
        return;
    }

    const newMovie = {
        title,
        genre,
        rating,
        year
    };

    movieCollection.push(newMovie);
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('year').value = '';

    displayMovies();
    displayActionMovies();
    displayHighestRatedMovie();
    displayMoviesAfter2000();
    displayMovieTitles();
}

function displayMovies() {
    const movieListDiv = document.getElementById('moviesList');
    movieListDiv.innerHTML = '';
    movieCollection.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<p><strong>Title:</strong> ${movie.title} <strong>Genre:</strong> ${movie.genre} <strong>Rating:</strong> ${movie.rating} <strong>Year:</strong> ${movie.year}</p>`;
        movieListDiv.appendChild(movieDiv);
    });
}
function displayActionMovies() {
    const actionMovies = movieCollection.filter(movie => movie.genre.toLowerCase() === 'action');
    const actionMoviesDiv = document.getElementById('actionMovies');
    actionMoviesDiv.innerHTML = '';
    actionMovies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<p>${movie.title} (${movie.year})</p>`;
        actionMoviesDiv.appendChild(movieDiv);
    });
}

function displayHighestRatedMovie() {
    const highestRated = movieCollection.reduce((max, movie) => movie.rating > max.rating ? movie : max, { rating: 0 });
    const highestRatedDiv = document.getElementById('highestRated');
    highestRatedDiv.innerHTML = `<p><strong>Title:</strong> ${highestRated.title} <strong>Rating:</strong> ${highestRated.rating}</p>`;
}

function displayMoviesAfter2000() {
    const after2000Movies = movieCollection.filter(movie => movie.year > 2000);
    const after2000Div = document.getElementById('after2000');
    after2000Div.innerHTML = '';
    after2000Movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<p>${movie.title} (${movie.year})</p>`;
        after2000Div.appendChild(movieDiv);
    });
}

function displayMovieTitles() {
    const movieTitles = movieCollection.map(movie => movie.title);
    const movieTitlesDiv = document.getElementById('movieTitles');
    movieTitlesDiv.innerHTML = `<p>${movieTitles.join(', ')}</p>`;
}
