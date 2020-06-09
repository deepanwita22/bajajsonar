const appConfig = require('../config/app')

const init = async () => {
    const data = await appConfig.init()
    return {"sections": data}
}

module.exports = {
    init
}
