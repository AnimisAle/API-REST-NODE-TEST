let supertest = require('supertest')
let request = supertest('http://localhost:9090')
let IDs = []

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
            IDs[0] = res.body.id

            expect(res.statusCode).toEqual(200)
            expect(parseInt(matricula)).toEqual(parseInt("20191069"))
            expect(nome).toEqual("Lucas")
            expect(email).toEqual("lucas@email.com")
            expect(sexo).toEqual("M")
            expect(telefone).toEqual("(62) 9 xxxx-xxxx")
        });
    });

    test("Testa a mensagem de erro esperada e se a matricula do aluno não é numerica .", () => {

        let aluno = {
            matricula: "20191011",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        expect(typeof(aluno.matricula)).toEqual("string")

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.body).toEqual({"error": "ERROR: matricula já cadastrada!"})
        });
    });

    test("Testa a mensagem de erro esperada e se a nome do aluno não é numerica .", () => {

        let aluno = {
            matricula: "20191011",
            nome: 99999,
            email: "felipe@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        expect(typeof(aluno.nome)).toEqual("number")

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.body).toEqual({"error": "ERROR: O nome deve ser uma string!"})
        });
    });

    test("Testa a mensagem de erro esperada e se o email do aluno não é numerica .", () => {

        let aluno = {
            matricula: "20191011",
            nome: "Felipe",
            email: 99999,
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        expect(typeof(aluno.nome)).toEqual("string")

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.body).toEqual({"error": "ERROR: O email deve ser uma string!"})
        });
    });

    test("Testa a mensagem de erro esperada e se o sexo do aluno não é numerico.", () => {

        let aluno = {
            matricula: "20191011",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: 99,
            telefone: "(62) 9 xxxx-xxxx"
        }

        expect(typeof(aluno.nome)).toEqual("string")

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.body).toEqual({"error": "ERROR: O sexo deve ser uma string!"})
        });
    });

    test("Testa a mensagem de erro esperada e se o telefone do aluno não é numerico.", () => {

        let aluno = {
            matricula: "20191011",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "M",
            telefone: 556
        }

        expect(typeof(aluno.nome)).toEqual("string")

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.body).toEqual({"error": "ERROR: O telefone deve ser uma string!"})
        });
    });

    test("Deve cadastrar quando o nome for uma string", () => {

        let aluno = {
            matricula: "20191091",
            nome: "Lucass",
            email: "lucass@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            const { nome } = res.body
            IDs[1] = res.body.id

            expect(nome).toEqual(expect.any(String))
        });
    });

    test("Deve cadastrar quando a matricula for um numero", () => {

        let aluno = {
            matricula: "20191011",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            const { matricula } = res.body
            IDs[2] = res.body.id

            expect(Number(matricula)).toEqual(Number(matricula))
        });
    });

    test("Deve cadastrar quando o email for uma String", () => {

        let aluno = {
            matricula: "20191012",
            nome: "Felipee",
            email: "felipee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            const { email } = res.body
            IDs[3] = res.body.id

            expect(email).toEqual("felipee@email.com")
        });
    });

    test("Deve cadastrar quando o sexo for uma String", () => {

        let aluno = {
            matricula: "20191013",
            nome: "Felipeee",
            email: "felipeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            const { sexo } = res.body
            IDs[4] = res.body.id

            expect(sexo).toEqual("M")
        });
    });

    test("Deve cadastrar quando o telefone for uma String", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipeeee",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            const { telefone } = res.body
            IDs[5] = res.body.id

            expect(telefone).toEqual("(62) 9 xxxx-xxxx")
        });
    });

    test("Não deve cadastrar quando a matricula for maior 8  (ERRO 404)", () => {

        let aluno = {
            matricula: "2019101455",
            nome: "Felipeeee",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o nome for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "999999",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o nome for naior do que 255 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o email for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "felipe",
            email: "69845",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o email for naior do que 255 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipe",
            email: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o sexo for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "felipe",
            email: "felipe@email.com",
            sexo: "999",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o sexo for naior do que 1 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "MM",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o telefone for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "felipe",
            email: "felipe@email.com",
            sexo: "M",
            telefone: "999999"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve cadastrar quando o telefone for naior do que 16 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "MM",
            telefone: "(62) 9 xxxxx-xxxxx"
        }

        return request.post('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });
});

describe("PUT /aluno", () => {

    test("Deve atualizar todos os dados", () => {

        let aluno = {
            matricula: 2015500,
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put(`/aluno/${IDs[1]}`)
        .send(aluno)
        .then(res => {

            const { nome, email, sexo, telefone, matricula } = res.body

            expect(res.statusCode).toEqual(200)
            expect(parseInt(matricula)).toEqual(parseInt("2015500"))
            expect(nome).toEqual("Felipe")
            expect(email).toEqual("felipe@email.com")
            expect(sexo).toEqual("M")
            expect(telefone).toEqual("(62) 9 xxxx-xxxx")
        });
    });

    test("Não deve atualizar quando a matricula for maior 8  (ERRO 404)", () => {

        let aluno = {
            matricula: "2019101455",
            nome: "Felipeeee",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o nome for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "999999",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o nome for naior do que 255 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            email: "felipeeee@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o email for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "felipe",
            email: "69845",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o email for naior do que 255 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipe",
            email: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@email.com",
            sexo: "M",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o sexo for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "felipe",
            email: "felipe@email.com",
            sexo: "999",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o sexo for naior do que 1 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "MM",
            telefone: "(62) 9 xxxx-xxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o telefone for numerico (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "felipe",
            email: "felipe@email.com",
            sexo: "M",
            telefone: "999999"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });

    test("Não deve atualizar quando o telefone for naior do que 16 (ERRO 404)", () => {

        let aluno = {
            matricula: "20191014",
            nome: "Felipe",
            email: "felipe@email.com",
            sexo: "MM",
            telefone: "(62) 9 xxxxx-xxxxx"
        }

        return request.put('/aluno')
        .send(aluno)
        .then(res => {

            expect(res.statusCode).toEqual(404)
        });
    });
});

describe("DELETE /aluno ", () => {

    test("Deve deletar um usuário com status 200", () => {

        return request.delete(`/aluno/${IDs[0]}`)

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

    test("Deve deletar um usuário com status 200", () => {

        return request.delete(`/aluno/${IDs[1]}`)

        .then(res => {
            expect(res.statusCode).toEqual(204)
        });
    });

    test("Deve deletar um usuário com status 200", () => {

        return request.delete(`/aluno/${IDs[3]}`)

        .then(res => {
            expect(res.statusCode).toEqual(204)
        });
    });

    test("Deve deletar um usuário com status 200", () => {

        return request.delete(`/aluno/${IDs[4]}`)

        .then(res => {
            expect(res.statusCode).toEqual(204)
        });
    });

    test("Deve deletar um usuário com status 200", () => {

        return request.delete(`/aluno/${IDs[5]}`)

        .then(res => {
            expect(res.statusCode).toEqual(204)
        });
    });
});

describe("GET /aluno", () => {

    test("Deve retornar 2 alunos", () => {

        return request.get(`/aluno`)

        .then(res => {

            expect(parseInt(res.body.length)).toEqual(2)
        });
    });
});

