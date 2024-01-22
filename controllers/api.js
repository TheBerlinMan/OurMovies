
function searchMovie(req,res){
  console.log('🚨searchMovie Invoked');
  res.redirect('/movies/new')
}


// async function searchMovie(req,res){
//   const apiResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${req.body.movieTitle}&api_key=${process.env.TMDB_API_KEY}`)
//   const movieData = await apiResponse.json()
//   const newMovieDoc =

// }


export{
  searchMovie
}