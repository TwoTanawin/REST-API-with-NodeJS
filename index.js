const express = require('express')
// const crypto = require('crypto')

const app = express()

app.use(express.json())

app.use('/products', require('./routes/productsRoute'))
// app.use('/users', require('./routes/usersRoute'))


app.listen(3000, ()=> console.log(`Server started on port 3000`))