const sanitizeHtml = require('sanitize-html')
const Message = require('../models/Message')

const chatController = (io) => {
    io.on('connection', (socket) => {
        console.log(`Socket conectado: ${socket.id}`)

        // Enviar mensagens anteriores do banco
        Message.find().then((messages) => {
            socket.emit('previousMessages', messages);
        })

        socket.on('sendMessage', (data) => {
            // Sanitização
            const sanitizedData = {
                author: sanitizeHtml(data.author),
                message: sanitizeHtml(data.message)
            }

            // Salvar a mensagem no banco de dados
            const message = new Message(sanitizedData)
            message.save().then(() => {
                socket.broadcast.emit('receivedMessage', sanitizedData)
            }).catch(err => {
                console.error('Erro ao salvar a mensagem no banco de dados:', err)
            })
        })
    })
}

module.exports = chatController
