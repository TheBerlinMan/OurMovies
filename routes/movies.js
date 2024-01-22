import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Home Page' })
// })

router.get('/new', moviesCtrl.new)

router.post('/', apiCtrl.searchMovie)



export {
  router
}
