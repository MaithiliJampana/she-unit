const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../../api/queries')
const port = 3000
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'genesys',
    host: '127.0.0.1',
    database: 'api',
    password: 'genesys',
    port: 5432,
})
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/api/users', (request, response) => {
    const { firstName, lastName, email, role } = request.body

    pool.query('INSERT INTO users (firstname, lastname, email, role) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, role], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
})
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})