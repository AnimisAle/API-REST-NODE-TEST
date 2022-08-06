let supertest = require('supertest')
let request = supertest('http://localhost:9090')

test("A aplicação deve responder na porta 9090", () => {

    return request.get('/aluno').then(res => expect(res.statusCode).toEqual(200))
});
