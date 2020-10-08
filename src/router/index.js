let express = require('express')
let app = express()
const port = 3000

app.get('/', function (req, resp) {
  resp.send('hello world')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})