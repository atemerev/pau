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
    let attributes = exports.loadAttributes(nodeId)
    if (attributes.length === 0) {
        return null;
    }
    let childrenAttr = sql.LOAD_CHILDREN.all(nodeId)
    let cc = {}
    for (let attr of childrenAttr) {
        if (!cc.hasOwnProperty(attr['id'])) {
            cc[attr['id']] = {'id': attr['id'], 'attributes': []}
        }
        cc[attr['id']]['attributes'].push(attr)
    }
    let node = {
        'id': nodeId,
        'attributes': attributes,
        'children': cc
    }
    return node
}