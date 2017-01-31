const http = require('http')
const fs = require('fs')
const through = require('through2')

const server = http.createServer((req,res) => {
  fs.createReadStream('file.jpg').pipe(res)
})

const PORT = 8080

server.listen(PORT, () => {
  console.log(`server lilsting on : http://localhost${PORT}`)
})