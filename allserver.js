const express = require("express")
const app = express()



app.use(express.static("allFiles"))

app.get('*', (req, res) => {
    res.status(404)
    res.send("<h2>404</h2>")
    // res.send("<h4>Not Found</h4>")
})


app.listen(4040, () => {
    console.log("Server is running....2");
})