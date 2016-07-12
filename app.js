// Setup
var knexConfig = require('./knex-config.js')
var knex = require('knex')(knexConfig)
var express = require('express')
var app = express()
var port = process.env.PORT || 8000

// Express GET route goes here...
app.get('/api/v1', function(req, res) {
    knex.select().from('w5d2').orderBy('id')
    .then(function(data) {
        res.json(data)
    });
});
// API endpoint should be setup at /api/v1

// Start the server
app.use(express.static('public'))
app.listen(port)
console.log('Public server: http://localhost:' + port)
console.log('API server: http://localhost:' + port + '/api/v1')
console.log('Press CTRL+C to exit.')