'use strict'

const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:admin@db:27017/mydb?authSource=admin',{useMongoClient: true})

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'))
database.once('open', () => {
console.log('Connected to MongoDB')
})
// Teste
server.get('/', (req, res, next) => res.send('Backend'))

// Start Server
server.listen(3000)
