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
    console.log(users)
})

module.exports = users