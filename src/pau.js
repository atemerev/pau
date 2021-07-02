const sql = require("./sql")

function createNode(id, parentId) {
    let prevNode = sql.LOAD_NODE_SHALLOW.get(id)
    if (!prevNode) {
        console.error(`Node exists: ${id}`)
        return undefined;
    }
    let createdAt = new Date().toISOString()
    let info = sql.CREATE_NODE.run(id, parentId, createdAt)
    return id
}