const express = require('express')
const appRoute = require('./app.route')

const router = express.Router()

router.use("/app", appRoute)

module.exports = router
