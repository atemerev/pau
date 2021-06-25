const express = require('express')
const data = require('./src/data')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let nodeId = '_root'
    let attributes = data.loadAttributes(nodeId)
    console.log(attributes)
    let templateName = attributes['_template'] || 'default'
    res.render(templateName, {node: attributes})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})