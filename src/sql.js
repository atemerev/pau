const Database = require('better-sqlite3')
const db = new Database('main.db', {verbose: console.log})

exports.LOAD_ATTRIBUTES = db.prepare("SELECT name, type, meta, value FROM attributes WHERE node_id = ?")
exports.LOAD_CHILDREN = db.prepare("SELECT n.id, n.created_at, a.name, a.type, a.meta, a.value FROM nodes n, attributes a WHERE a.node_id = n.id AND n.parent_id = ? AND n.id <> '_root'")
