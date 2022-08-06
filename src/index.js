const express = require('express')
require('express-async-errors') // Como o Error Handler não funciona com funções async, precisa instalar esse pacote.

const routes = require('./routes')
const errorHandler = require('./app/middleware/errorHandler')

const app = express()

app.use(express.json())
app.use(routes)
app.use(errorHandler)

app.listen('9090', () => console.log('\nServer rodando http://localhost:9090\n'))
