import { Movie } from "../models/movie.js";


function newForm(req, res){
  console.log(req.params.apiId);
  fetch(`https://api.themoviedb.org/3/movie/${req.params.apiId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits`)
  .then(apiResponse => {
    apiResponse.json()
    .then(selectedMovieData => {
      res.render(`movies/new`, {
        selectedMovieData: selectedMovieData,
        title: `${selectedMovieData['original_title']}`
      })
    })
  })
}


function search(req,res){
  res.render('movies/search', {
    title: 'Search Movie',
  })
}



function searchMovie(req,res){
  console.log('🚨searchMovie Invoked');
  console.log(req.body.movieTitle);
  fetch(`https://api.themoviedb.org/3/search/movie?query=${req.body.movieTitle}&api_key=${process.env.TMDB_API_KEY}`)
  .then(apiResponse => {
    apiResponse.json()
    .then(movieData => {
      console.log(movieData);
      res.render('movies/searchResults', {
        results: movieData.results,
        title: 'Search Results',
      })
    })
  })
}





export{
  search,
  searchMovie,
  newForm
}



//// now that i have the search results page:
//// i want to render a new form view     
//// then display the selected movie details from previous selection
////    to do that I have to pass the movie Id (from the API) to run a new query
////    new query: https://api.themoviedb.org/3/movie/${req.params.apiId}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits

// ---

// have the results from the new query already populated 
// have a button to add a rating/score
// save information to database & Movie's List 