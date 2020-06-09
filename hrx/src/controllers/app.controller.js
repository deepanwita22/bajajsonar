const { catchAsync } = require('../utils')
const { appService } = require('../services')

const init = catchAsync(async (req, res) => {
    const data = await appService.init()
    res.send({data, is_success: true})
})

module.exports = {
    init
}
