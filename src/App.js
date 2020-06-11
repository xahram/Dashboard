const express = require("express")
const app = express()
const path = require('path')
const port = process.env.PORT || 9000

path.join(__dirname, "../front/build")

app.use(express.static(path.join(__dirname, "../front/build")))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../front/build/index.html"))
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})