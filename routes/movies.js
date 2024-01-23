import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()


router.get('/new/:apiId', moviesCtrl.newForm)

router.get('/search', moviesCtrl.search)

router.post('/searchResults', moviesCtrl.searchMovie)





export {
  router
}
