const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./dbhelpers/queries.js')
//const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

/*app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
*/
export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    app.get('/users', db.getUsers)
}