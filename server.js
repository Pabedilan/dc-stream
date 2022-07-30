const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://loghkoo.demasxi.repl.co/"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server already")
  })
}

module.exports = keepAlive
