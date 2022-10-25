const Router = require('express')
const router = new Router()
const modelController = require('../controllers/ModelController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',modelController.create) //router.post('/',checkRole('ADMIN'),CategoryController.create)
router.get('/',modelController.getAll)
router.delete('/:id', modelController.delete);
module.exports = router