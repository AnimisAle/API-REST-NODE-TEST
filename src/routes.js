const { Router } = require('express')
const AlunoController = require('./app/controllers/AlunoController')

const router = Router()

router.get('/aluno', AlunoController.consultar)
router.get('/aluno/:id', AlunoController.consultarUmRegistro)
router.post('/aluno', AlunoController.criar)
router.put('/aluno/:id', AlunoController.atualizar)
router.delete('/aluno/:id', AlunoController.excluir)


module.exports = router
