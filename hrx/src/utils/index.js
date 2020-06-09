const fs = require('fs')
const { promisify } = require('util')

const catchAsync = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err))
}

const readFileAsync = promisify(fs.readFile)

module.exports = {
    catchAsync,
    readFileAsync
}
