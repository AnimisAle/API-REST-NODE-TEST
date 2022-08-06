//Aqui manipulamos todos os métodos que o Controller vai usar para fazer a manipulação dos data source (Fonte de Dados).
const db = require('../../database')
const uuidValidate = require('uuid')

class AlunoRepository {

    async buscarTodos(orderBy = 'ASC') {
        const ordenacao = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'

        const linhas = await db.query(`
        SELECT *
        FROM alunos
        ORDER BY alunos.nome ${ordenacao}`)

        return linhas
    }

    async buscarPorId(id) {
        if (uuidValidate.validate(id) === true) {

            const [linha] = await db.query(`
            SELECT *
            FROM alunos
            WHERE id = $1`, [id])

            return linha
        }
    }

    async buscarPorMatricula(matricula) {
        const [linha] = await db.query(`
        SELECT *
        FROM alunos
        WHERE matricula = $1`, [matricula])

        return linha
    }

    async criar({
        matricula, nome, email, sexo, telefone
    }) {
        const [linha] = await db.query(`
        INSERT INTO alunos (matricula, nome, email, sexo, telefone)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
        `, [matricula, nome, email, sexo, telefone])

        return linha
    }

    async atualizar(id, {
        matricula, nome, email, sexo, telefone
    }) {
        const [linha] = await db.query(`
        UPDATE alunos
        SET matricula = $1, nome = $2, email = $3, sexo = $4, telefone = $5
        WHERE id = $6
        RETURNING *
        `, [matricula, nome, email, sexo, telefone, id])

        return linha
    }

    async deletar(id) {
        const deletar = await db.query(`DELETE FROM alunos WHERE id = $1`, [id])

        return deletar
    }
}

module.exports = new AlunoRepository()
