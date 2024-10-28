const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res) => {
  res.json({ message: "Hello World!" })  
})

app.listen(port, () => {
  console.log(`Here is first express server running on port: ${port}`)
})
