const crypto = require('crypto')

const products = [
    {
        id: "2dded904-b724-493b-b5b9-817d310fe301",
        name: "Labtop",
        price: 400.00,
        quantity: 4,
        active: true,
    },
    {
        id: "2dded904-b724-493b-b5b9-817d310fe302",
        name: "Keyboard",
        price: 29.99,
        quantity: 10,
        active: true,
    }
]

// router.get('/', (request, response) => {
//     response.send("Hello World!")
// })

exports.getAllProducts = (request, response) => {
    response.status(200).json(products)
}

// router.get('/', (request, response)=>{
//     response.status(200).json(products)
// })

exports.createProduct = (request, response) => {
    const {name, price, quantity, active} = request.body

    if(!name){
        return response.status(422).json({message: `Name is require`})
    }

    const id = crypto.randomUUID()

    products.push({
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        active: active
    })

    response.status(201).json({message: `Product created successfully`, id})
}

// router.post('/',(request, response)=>{
//     // console.log(request.body)
//     const {name, price, quantity, active} = request.body

//     if(!name){
//         return response.status(422).json({message: `Name is require`})
//     }

//     const id = crypto.randomUUID()

//     products.push({
//         id: id,
//         name: name,
//         price: price,
//         quantity: quantity,
//         active: active
//     })

//     response.status(201).json({message: `Product created successfully`, id})
// })

exports.getProductById = (request, response) => {
    const product = products.find(product => product.id == request.params.id)

    if(!product){
        return response.status(404).json({messsage: 'Product not found'})
    }

    // response.send(`OK`)
    response.status(200).json(product)
}

// router.get('/:id', (request, response) =>{
//     // console.log(request.params)
//     const product = products.find(product => product.id == request.params.id)

//     if(!product){
//         return response.status(404).json({messsage: 'Product not found'})
//     }

//     // response.send(`OK`)
//     response.status(200).json(product)
// })

exports.updateProduct = (request, response) => {
    const product = products.find(product => product.id == request.params.id)

    if(!product){
        return response.status(404).json({messsage: 'Product not found'})
    }


    const {name, price, quantity, active} = request.body

    if(name){
        product.name = name
    }
    if(price){
        product.price = price
    }
    if(quantity){
        product.quantity = quantity
    }

    console.log(active)

    if('active' in request.body){
        product.active = active
    }

    response.status(200).json({message : 'Product updated successfully'})
}

// router.put('/:id', (request, response) => {
//     const product = products.find(product => product.id == request.params.id)

//     if(!product){
//         return response.status(404).json({messsage: 'Product not found'})
//     }


//     const {name, price, quantity, active} = request.body

//     if(name){
//         product.name = name
//     }
//     if(price){
//         product.price = price
//     }
//     if(quantity){
//         product.quantity = quantity
//     }

//     console.log(active)

//     if('active' in request.body){
//         product.active = active
//     }

//     response.status(200).json({message : 'Product updated successfully'})
// })

exports.deleteProduct = (request, response) => {
    const productIndex = products.findIndex(product => product.id == request.params.id)

    // console.log(productIndex)
    if(productIndex == -1){
        return response.status(404).json({messsage: 'Product not found'})
    }

    products.splice(productIndex, 1)

    response.status(200).json({message: 'Product deleted successfully'})
}

// router.delete('/:id',(request, response) => {
//     const productIndex = products.findIndex(product => product.id == request.params.id)

//     // console.log(productIndex)
//     if(productIndex == -1){
//         return response.status(404).json({messsage: 'Product not found'})
//     }

//     products.splice(productIndex, 1)

//     response.status(200).json({message: 'Product deleted successfully'})
// })