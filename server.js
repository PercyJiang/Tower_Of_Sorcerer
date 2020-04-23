// const users = require('./mongo')

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
app.use(favicon(__dirname + '/public/img/favicon_io/favicon.ico'))

// config
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

// mongo
const mongodb = require('mongodb')
const client = new mongodb.MongoClient(
    'mongodb+srv://percy:percy@percy0-a4fle.mongodb.net/admin?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
let collection = null
let users = []
client.connect().then(() => {
    return client.db('tower_of_sorcerer').createCollection('users')
}).then(__collection => {
    collection = __collection
    return collection.find({}).toArray()
}).then(result => {
    users = result
    // console.log(users)
})

// get users
app.get('/getUsers', (request, response) => {
    collection.find({}).toArray().then(result => response.json(result))
})

// login
app.post('/login', (request, response) => {
    let match = false
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === request.body.username
            && users[i].password === request.body.password) {
            match = true
            response.json({ status: true })
        }
    }
    if (!match) {
        response.json({ status: false })
    }
})

// register
app.post('/add', (request, response) => {
    collection.insertOne(request.body).then(result => {
        users.push(request.body)
        response.json(result)
    })
})

// listen
const PORT = process.env.PORT || 3000
const server_log = `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
app.listen(PORT, console.log(server_log))