const express = require('express')
const helmet = require('helmet')
const xss = require('xss-clean')
const bodyParser = require('body-parser')

const morgan = require('./config/morgan')
const routesV1 = require('./routes/v1')

const app = express()

app.use(morgan.successHandler)
app.use(morgan.errorHandler)

app.use(bodyParser.json())
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(xss())

app.use('/v1', routesV1)

module.exports = app
