const ds = require('nedb')
const express = require('express')
const app = express()
const port = 3000

db = new ds({ filename: 'data.db', autoload: true })

app.use(express.static('static'))
app.use(express.urlencoded({ extended: true }))

app.post('/post', (req, res) => {
    sz = Number(req.body.x) + 1
    db.insert({sz, ts: new Date().toJSON()})
    db.find({}, (err, docs) => {
        res.send(docs)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})