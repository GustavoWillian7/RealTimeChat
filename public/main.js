$(document).ready(function () {
    var socket = io()

    function renderMessage(message) {
        $('.messages').append('<div class="message"><strong>' + $('<div>').text(message.author).html() + '</strong>: ' + $('<div>').text(message.message).html() + '</div>')
    }

    socket.on('previousMessages', function (messages) {
        for (let message of messages) {
            renderMessage(message)
        }
    })

    socket.on('receivedMessage', function (message) {
        renderMessage(message)
    })

    $('#chat').submit(function (event) {
        event.preventDefault()

        var author = $('input[name=username]').val().trim()
        var message = $('input[name=message]').val().trim()

        if (author.length && message.length) {
            var messageObject = {
                author: author,
                message: message
            }

            renderMessage(messageObject)

            socket.emit('sendMessage', messageObject)

            $('input[name=message]').val('')
        } else {
            alert('Por favor, preencha todos os campos.')
        }
    })
})
