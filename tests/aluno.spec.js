let supertest = require('supertest')
let request = supertest('http://localhost:9090')
var responseID = ""

describe("POST /aluno ", () => {

    test("Deve cadastrar um usuário com status 200", () => {

        let aluno = {
            matricula: "20191069",
            nome: "Lucas",
            email: "lucas@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            const { nome, email, sexo, telefone, matricula } = res.body
            responseID = res.body.id

            expect(res.statusCode).toEqual(200)
            expect(parseInt(matricula)).toEqual(parseInt("20191069"))
            expect(nome).toEqual("Lucas")
            expect(email).toEqual("lucas@email.com")
            expect(sexo).toEqual("M")
            expect(telefone).toEqual("(62) 9 xxxx-xxxx")
        });
    });
});

describe("DELETE /aluno ", () => {

    test("Deve deletar um usuário com status 200", () => {

        return request.delete(`/aluno/${responseID}`)

        .then(res => {
            expect(res.statusCode).toEqual(204)
        });
    });

    test("Não passa nenhum ID com status 400", () => {

        return request.delete(`/aluno/`)

        .then(res => {
            expect(res.statusCode).toEqual(404)
        });
    });
});

describe("GET /aluno", () => {

    test("Deve retornar 0 alunos", () => {

        return request.get(`/aluno`)

        .then(res => {

            expect(parseInt(res.body.length)).toEqual(0)
        });
    });
});
