import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Home Page' })
// })

router.get('/new', moviesCtrl.new)

export {
  router
}
