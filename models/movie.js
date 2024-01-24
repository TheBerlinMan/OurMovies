import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  releaseDate: Date,
  plot: String,
  genres: [String],
  directors: [String],
  performers: [String],
  posterSmall: String,
  posterLarge: String,
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}
