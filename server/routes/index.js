const router = require('express').Router()

//import under-routers
const categoryRouter = require('./CategoryRouter')
const subcategoryRouter = require('./SubcategoryRouter')
const brandRouter = require('./BrandRouter')
const modelRouter = require('./ModelRouter')
const colorRouter = require('./ColorRouter')
const materialRouter = require('./MaterialRouter')
const sizeRouter = require('./SizeRouter')
const availabilityRouter = require('./AvailabilityRouter')

//under-routers
router.use('/category', categoryRouter)
router.use('/subcategory', subcategoryRouter)
router.use('/brand', brandRouter)
router.use('/model', modelRouter)
router.use('/color', colorRouter)
router.use('/material', materialRouter)
router.use('/size', sizeRouter)
router.use('/availability', availabilityRouter)

module.exports = router