const pgp = require('pg-promise')({
    query: e =>{
        
    }
})

const options = {
    host:'localhost',
    database: 'burrito-app'
}

const db = pgp(options);
module.exports = db;