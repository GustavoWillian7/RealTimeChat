require('dotenv').config()
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')
const connectDB = require('./db/db')
const chatController = require('./controllers/chatController')
const indexRouter = require('./routes/index')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

// Conexão do banco
connectDB()

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// Rotas
app.use('/', indexRouter)

// Controllers
chatController(io)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})