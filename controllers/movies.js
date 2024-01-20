import { Movie } from "../models/movie.js";


function newMovie(req,res){
  res.render('movies/new', {
    title: 'Add Movie'
  })
}

export{
  newMovie as new,
}