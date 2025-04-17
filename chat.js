const express = require("express")
const app = express()
const fs = require("fs")

const movies = JSON.parse(fs.readFileSync('./data/movies.json'))

app.use(express.json())

app.get('/api/v1/movies', (req, res) => {
    res.status(200).json({
        status : "success",
        count : movies.length,
        data : {
            movies : movies
        }
    })
})
app.get('/api/v1/movies/:id', (req, res) => {
    const userId = req.params.id
    res.send(`User id is${userId}`)
    })


app.post('/api/v1/movies', (req, res) => {
    console.log(req.body);
    
    res.send(req.body)
})

app.listen(8080, () => {
    console.log("Server is running");
})