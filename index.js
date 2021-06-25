const express = require('express')
const data = require('./src/data')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let nodeId = '_root'
    let node = data.loadNode(nodeId)
    console.log(node.attributes)
    let templateName = node.attributes['_template'].value || 'default'
    res.render(templateName, {'node': node})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})