
function searchMovie(req,res){
  console.log('🚨searchMovie Invoked');
  fetch(`https://api.themoviedb.org/3/search/movie?query=${req.body.movieTitle}&api_key=${process.env.TMDB_API_KEY}`)
  .then(apiResponse => {
    apiResponse.json()
    .then(movieData => {
      console.log(movieData);
      res.render('movies/new', {
        results: movieData.results,
        title: 'Search Results',
      })
    })
  })
}


// async function searchMovie(req,res){
//   const apiResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${req.body.movieTitle}&api_key=${process.env.TMDB_API_KEY}`)
//   const movieData = await apiResponse.json()
//   const newMovieDoc =

// }


export{
  searchMovie
}