const sql = require('./sql')

exports.loadAttributes = function(nodeId) {
    let attributes = sql.LOAD_ATTRIBUTES.all(nodeId)
    let result = {}
    for (let e of attributes) {
        console.log(e)
        result[e['name']] = e
    }
    return result
}

exports.loadNode = function (nodeId) {
    let attributes = loadAttributes(nodeId)

}