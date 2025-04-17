const express = require("express")
const multer = require("multer")
const path = require("path")
const app = express()
const port = 8080;


//      Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage})


//      File upload Endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded")
    }
    res.status(200).send({
        meassage : "File uploaded successfull",
        file : req.file
    })
})

app.use('/uploads', express.static('uploads'))



app.listen(port, () => {
    console.log("server is running...");
})