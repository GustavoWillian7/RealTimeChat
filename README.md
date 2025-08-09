# Real Time Chat

Este é um projeto de chat em tempo real desenvolvido com Node.js, Express.js, Socket.IO e MongoDB.

## Visão geral

O Real Time Chat é uma aplicação web que permite aos usuários se comunicarem em tempo real. Ele oferece uma interface simples e intuitiva para enviar e receber mensagens instantaneamente.

## Funcionalidades

- **Envio de Mensagens em Tempo Real**: Os usuários podem enviar mensagens que são exibidas instantaneamente para todos os participantes do chat.
- **Histórico de Mensagens**: As mensagens enviadas anteriormente são carregadas quando um usuário se conecta, permitindo que eles vejam o histórico das conversas.
- **Sanitização de Entrada**: As mensagens são sanitizadas para evitar ataques XSS (Cross-Site Scripting).
- **Armazenamento no Banco de Dados**: Todas as mensagens são armazenadas em um banco de dados MongoDB para persistência.

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório em sua máquina local:

    ```
    https://github.com/GustavoWillian7/RealTimeChat.git
    ```

2. Instale as dependências do projeto:

    ```
    cd real-time-chat
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```
    MONGO_URI=URL_do_seu_banco_de_dados_MongoDB
    PORT=3000
    ```

4. Inicie o servidor:

    ```
    npm start
    ```

5. Acesse o chat no seu navegador em `http://localhost:3000`.
