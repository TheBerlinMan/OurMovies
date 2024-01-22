import { Movie } from "../models/movie.js";


function newMovie(req,res){
  res.render('movies/new', {
    title: 'Search Movie',
    movieData: null,
  })
}

export{
  newMovie as new,
}