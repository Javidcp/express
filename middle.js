const express = require("express")
const app = express()


app.get('/',logger, (req, res) => {
    res.send("<h1>Home Page</h1>")
    
})

app.get('/users', (req, res) => {
    res.send("<h1>Users Page</h1>")
})


function logger(req, res, next) {
    console.log("Logged");
    next()
}

app.listen(8080, () => {
    console.log("Running...");
})