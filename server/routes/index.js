const router = require('express').Router()

//import under-routers
const offersRouter = require('./OffersRouter')
const newsRouter = require('./NewsRouter')

//under-routers
router.use('/news', newsRouter)
router.use('/offers', offersRouter)

module.exports = router