const express = require('express')
const app = express()

// respon/ with "hello world" when a GET request is made to the homepage
app.use(express.static('./test'))

app.listen(3000)
