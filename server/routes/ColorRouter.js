const Router = require('express')
const router = new Router()
const colorController = require('../controllers/ColorController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',colorController.create) //router.post('/',checkRole('ADMIN'),CategoryController.create)
router.get('/',colorController.getAll)
router.delete('/:id', colorController.delete);
module.exports = router