import { Movie } from "../models/movie.js";
import { Profile } from "../models/profile.js";


function index(req, res){
  Movie.find({})
  .then(movies => {
    res.render('movies/index', {
      movies: movies,
      title: 'Movies List'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newForm(req, res){
  fetch(`https://api.themoviedb.org/3/movie/${req.params.apiId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`)
  .then(apiResponse => {
    apiResponse.json()
    .then(selectedMovieData => {
      res.render(`movies/new`, {
        selectedMovieData: selectedMovieData,
        title: `${selectedMovieData['original_title']}`
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

async function create(req,res){
  // have to implement a check to see if data already exists in database
  const apiResponse = await fetch(`https://api.themoviedb.org/3/movie/${req.params.apiId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`)
  const movieData = await apiResponse.json()
  const performers = []
  movieData.credits.cast.forEach(element => {
    performers.push(element.name)
  })
  const directors = []
  movieData.credits.crew.forEach(element => {
    if(element.job === 'Director'){
      directors.push(element.name)
    } 
  })
  const genres = []
  movieData.genres.forEach(element => {
    genres.push(element.name)
  })
  const newMovie = await Movie.create({
    title: movieData['original_title'],
    releaseDate: movieData['release_date'],
    plot: movieData.overview,
    genres: genres,
    directors: directors,
    performers: performers,
    posterSmall: `https://image.tmdb.org/t/p/w154/${movieData['poster_path']}`,
    posterLarge: `https://image.tmdb.org/t/p/w342/${movieData['poster_path']}`,
    postedBy: req.user.profile._id
  })
  const loggedInUsersProfile = await Profile.findById(req.user.profile._id)
  loggedInUsersProfile.watchedMovies.push(newMovie)
  await loggedInUsersProfile.save()
  res.redirect('/movies')
}

function search(req,res){
  res.render('movies/search', {
    title: 'Search Movie',
  })
}

function searchMovie(req,res){
  fetch(`https://api.themoviedb.org/3/search/movie?query=${req.body.movieTitle}&api_key=${process.env.TMDB_API_KEY}`)
  .then(apiResponse => {
    apiResponse.json()
    .then(movieData => {
      res.render('movies/searchResults', {
        results: movieData.results,
        title: 'Movies'
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteMovie(req, res){
  Movie.findByIdAndDelete(req.params.movieId)
  .then(movie => {
    res.redirect('/movies')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

function show(req, res){
  Movie.findById(req.params.movieId)
  .then(movie => {
    res.render('movies/show', {
      movie: movie,
      title: 'Movie Details'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })

}

function createReview(req, res){
  Movie.findById(req.params.movieId)
  .then(movie => {
    movie.reviews.push(req.body)
    movie.save()
    .then(() => {
      res.redirect(`/movies/${req.params.movieId}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/movies')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

export{
  index,
  search,
  searchMovie,
  newForm as new,
  create,
  deleteMovie as delete,
  show,
  createReview
}



