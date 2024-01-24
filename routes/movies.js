import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()


router.get('/', moviesCtrl.index)

router.get('/search', moviesCtrl.search)

router.get('/:movieId', moviesCtrl.show)

router.get('/new/:apiId', moviesCtrl.new)

router.post('/searchResults', moviesCtrl.searchMovie)

router.post('/:apiId', moviesCtrl.create)

router.delete('/:movieId', moviesCtrl.delete)






export {
  router
}
