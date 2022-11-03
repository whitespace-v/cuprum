const router = require('express').Router()

//import under-routers
const categoryRouter = require('./CategoryRouter')
const subcategoryRouter = require('./SubcategoryRouter')
const availabilityRouter = require('./AvailabilityRouter')
const brandRouter = require('./BrandRouter')
const itemRouter = require('./ItemRouter')
const userRouter = require('./UserRouter')
//under-routers
router.use('/category', categoryRouter)
router.use('/subcategory', subcategoryRouter)
router.use('/availability', availabilityRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)
router.use('/user', userRouter)

module.exports = router