import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  releaseDate: Date,
  genres: [String],
  directors: [String],
  performers: [String],
  poster: String,
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}
