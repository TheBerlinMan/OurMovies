import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  originalViewing: Date,
  rating: {type: Number, min: 1, max: 5, default: 0},
  postedBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}]
},{
  timestamps:true
})


const movieSchema = new Schema({
  title: String,
  releaseDate: Date,
  plot: String,
  genres: [String],
  directors: [String],
  performers: [String],
  posterSmall: String,
  posterLarge: String,
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}
