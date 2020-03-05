const express = require('express')
require('../db/mongoose')

const app = express()
const port = 3000

app.use(express.json())
const api = require('./../routes/api')

app.use('/api', api)
app.listen(port, function() {
    console.log(`app is listening on port ${port}`)
})