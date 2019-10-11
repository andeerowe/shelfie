require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT,CONNECTION_STRING} = process.env
const ctrl = require('./controller')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('db connected')
})

//endpoints

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addItem)
app.delete('/api/product/:id', ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))