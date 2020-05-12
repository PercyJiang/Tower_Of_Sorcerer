// express
const express = require('express')
const app = express()
app.use(express.json())

// set up body parser
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// favicon
const favicon = require('serve-favicon')
app.use(favicon(__dirname + '/public/images/favicon_io/favicon.ico'))

// mongodb
const { get_floor_data } = require('./mongo')
let collection_floor_data = null, floor_data = []
get_floor_data().then((result) => {
    collection_floor_data = result.collection_floor_data
    floor_data = result.floor_data
})

// save floor count
app.post('/count_floor', (request, response) => {
    let floor_found = false
    for (let i = 0; i < floor_data.length; i++) {
        if (floor_data[i].floor === request.body.floor) {
            collection_floor_data.updateOne(
                { floor: request.body.floor },
                { $inc: { count: 1 } }
            )
            floor_data[i].count += 1
            floor_found = true
            break
        }
    }
    if (!floor_found) {
        collection_floor_data.insertOne({ floor: request.body.floor, count: 1 })
        floor_data.push({ floor: request.body.floor, count: 1 })
    }
})

// listen
const PORT = 3000
app.listen(PORT, console.log(`Server running on port ${PORT}`))