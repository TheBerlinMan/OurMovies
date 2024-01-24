import mongoose from 'mongoose'
import { Movie } from '../models/movie.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  watchedMovies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
