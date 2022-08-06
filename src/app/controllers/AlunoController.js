const AlunoRepository = require('../repositories/AlunoRepository')

class AlunoController {

    getAlunos(alunos) {
        let arrayResuultado = []

        arrayResuultado.push(alunos)

        return arrayResuultado
    }

    async consultar(request, response) {
        const { orderBy } = request.query
        const alunos = await AlunoRepository.buscarTodos(orderBy)

        response.json(alunos)
    }

    async consultarUmRegistro(request, response) {
        const { id } = request.params

        const aluno = await AlunoRepository.buscarPorId(id)

        if (!aluno) {
            return response.status(404).json({ error: 'ERROR: aluno invalido.' })
        }

        response.json(aluno)
    }

    async criar(request, response) {
        const { matricula, nome, email, sexo, telefone } = request.body

        if (matricula.isInteger) {
            return response.status(404).json({ error: 'ERROR: A matricula deve ser um número intero!'})
        }
        else if (matricula.length > 8) {
            return response.status(404).json({ error: 'ERROR: A maricula não pode ter mais que 8 número intero!'})
        }
        else if (!matricula) {
            return response.status(404).json({ error: 'ERROR: a matrícula é obrigatória.' })
        }


        else if (!isNaN(nome)) {
            return response.status(404).json({ error: 'ERROR: O nome deve ser uma string!'})
        }
        else if (nome.length > 255) {
            return response.status(404).json({ error: 'ERROR: O nome não pode ter mais que 255 caracteres!'})
        }
        else if (!nome) {
            return response.status(404).json({ error: 'ERROR: o nome é obrigatório.' })
        }
        

        else if (!isNaN(email)) {
            return response.status(404).json({ error: 'ERROR: O email deve ser uma string!'})
        }
        else if(email.length > 255) {
            return response.status(404).json({ error: 'ERROR: O email não pode ter mais que 255 caracteres!'})
        }
        else if (!email) {
            return response.status(404).json({ error: 'ERROR: o email é obrigatório.' })
        }
        
        else if (!isNaN(sexo)) {
            return response.status(404).json({ error: 'ERROR: O sexo deve ser uma string!'})
        }
        else if(sexo.length > 1) {
            return response.status(404).json({ error: 'ERROR: O sexo não pode ter mais que 1 caractere!'})
        }
        else if (!sexo) {
            return response.status(404).json({ error: 'ERROR: o sexo é obrigatório.' })
        }

        else if (!isNaN(telefone)) {
            return response.status(404).json({ error: 'ERROR: O telefone deve ser uma string!'})
        }
        else if(telefone.length > 16) {
            return response.status(404).json({ error: 'ERROR: O telefone não pode ter mais que 16 caractere!'})
        }
        else if (!telefone) {
            return response.status(404).json({ error: 'ERROR: o telefone é obrigatório.' })
        }

         

        const alunoExiste = await AlunoRepository.buscarPorMatricula(matricula)

        if (alunoExiste) {
            return response.status(404).json({ error: 'ERROR: matricula já cadastrada!' })
        }

        const aluno = await AlunoRepository.criar({
            matricula, nome, email, sexo, telefone
        })

        response.json(aluno)
    }

    async atualizar(request, response) {
        const { id } = request.params
        const { matricula, nome, email, sexo, telefone } = request.body

        

        const alunoExiste = await AlunoRepository.buscarPorId(id)

        if (!alunoExiste) {
            return response.status(404).json({ error: 'ERROR: aluno invalido' })
        }

        if (!isNaN(nome)) {
            return response.status(404).json({ error: 'ERROR: O nome deve ser uma string!'})
        }
        else if (nome.length > 255) {
            return response.status(404).json({ error: 'ERROR: O nome não pode ter mais que 255 caracteres!'})
        }
        else if (!nome) {
            return response.status(404).json({ error: 'ERROR: o nome é obrigatório.' })
        }
        

        else if (!isNaN(email)) {
            return response.status(404).json({ error: 'ERROR: O email deve ser uma string!'})
        }
        else if(email.length > 255) {
            return response.status(404).json({ error: 'ERROR: O email não pode ter mais que 255 caracteres!'})
        }
        else if (!email) {
            return response.status(404).json({ error: 'ERROR: o email é obrigatório.' })
        }
        
        else if (!isNaN(sexo)) {
            return response.status(404).json({ error: 'ERROR: O sexo deve ser uma string!'})
        }
        else if(sexo.length > 1) {
            return response.status(404).json({ error: 'ERROR: O sexo não pode ter mais que 1 caractere!'})
        }
        else if (!sexo) {
            return response.status(404).json({ error: 'ERROR: o sexo é obrigatório.' })
        }

        else if (!isNaN(telefone)) {
            return response.status(404).json({ error: 'ERROR: O telefone deve ser uma string!'})
        }
        else if(telefone.length > 16) {
            return response.status(404).json({ error: 'ERROR: O telefone não pode ter mais que 16 caractere!'})
        }
        else if (!telefone) {
            return response.status(404).json({ error: 'ERROR: o telefone é obrigatório.' })
        }

        const alunoPorMatricula = await AlunoRepository.buscarPorMatricula(matricula)

        if (alunoPorMatricula && alunoPorMatricula.id !== id) {
            return response.status(404).json({ error: 'ERROR: Essa matrícula já está em uso.' })
        }

        const aluno = await AlunoRepository.atualizar(id, {
            matricula, nome, email, sexo, telefone
        })

        response.json(aluno)
    }

    async excluir(request, response) {
        const { id } = request.params

        const aluno = await AlunoRepository.buscarPorId(id)

        if (!aluno) {
            return response.status(404).json({ error: 'ERROR: aluno invalido.' })
        }

        await AlunoRepository.deletar(id)

        response.sendStatus(204)
    }
}

module.exports = new AlunoController
