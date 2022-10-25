const Router = require('express')
const router = new Router()
const materialController = require('../controllers/MaterialController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',materialController.create) //router.post('/',checkRole('ADMIN'),CategoryController.create)
router.get('/',materialController.getAll)
router.delete('/:id', materialController.delete);
module.exports = router