import express from 'express'

const app = express()


app.get('/users', (request, response) => {
    return response.json(['user1', 'user2'])
})


app.post('/users', (request, response) => {
    return response.json({message: 'Craeting user'})
})


app.put('/users', (request, response) => {
    return response.json({message: 'Updating user'})
})


app.delete('/users', (request, response) => {
    return response.json({message: 'Deleting user'})
})


app.listen('3333', () => {console.log('started')})