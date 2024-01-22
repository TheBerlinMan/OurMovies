import { Movie } from "../models/movie.js";


function newMovie(req,res){
  res.render('movies/new', {
    title: 'Search Movie'
  })
}

export{
  newMovie as new,
}