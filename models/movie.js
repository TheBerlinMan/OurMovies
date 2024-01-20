import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  releaseDate: Date,
  mpaaRating: String,
  score: Number,
  director: String,
  performers: [String],
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}
