const mongodb = require('mongodb')
const client = new mongodb.MongoClient(
    'mongodb+srv://percy:percy@percy0-a4fle.mongodb.net/admin?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

/**
 * Accesses the 'floor_data' collection in the database.
 * @return { object } The mongodb collection object and the corresponding list.
 */
async function get_floor_data() {
    let collection_floor_data = null, floor_data = []
    await client.connect().then(() => {
        return client.db('tower_of_sorcerer').createCollection('floor_data')
    }).then(__collection => {
        collection_floor_data = __collection
        return collection_floor_data.find({}).toArray()
    }).then(result => {
        floor_data = result
    })
    return { collection_floor_data, floor_data }
}

module.exports = { get_floor_data }