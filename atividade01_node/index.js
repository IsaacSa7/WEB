const express = require('express')
const app = express()
const path = require('path')

const port = 3000
const basePath = path.join(__dirname, 'templates')

// Configurar os middlewares para analisar o corpo da requisição
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// Função get
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/login.html`)
})

// Função post
app.post('/home', (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

app.listen(port, () => {
  console.log('Servidor Iniciado')
})