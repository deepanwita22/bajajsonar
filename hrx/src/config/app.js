const path = require('path')
const { readFileAsync } = require('../utils')

const init = async () => {
    const data = await readFileAsync(path.join(__dirname, "../../static_files/app_init.json"))
    return JSON.parse(data.toString("utf8"))
}

module.exports = {
    init
}
