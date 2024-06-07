const router = require('express').Router()

const productController = require('../controllers/productsController')

// router.get('/', (request, response) => {
//     response.send("Hello World!")
// })

// exports.getAllProducts = (request, response) => {
//     response.status(200).json(products)
// }

router.get('/', productController.getAllProducts)

router.post('/',productController.createProduct)

router.get('/:id', productController.getProductById)

router.put('/:id', productController.updateProduct)

router.delete('/:id',productController.deleteProduct)

module.exports = router