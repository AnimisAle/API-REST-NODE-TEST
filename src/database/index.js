const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '3344',
    database: 'crud_node'
})

client
.connect()
    .then(() => {
        console.log("Conexão feita com o banco de dados!\n")
    })
    .catch(async (msgError) => {
        console.error("ERROR ao se conectar com o banco de dados\n")
        console.log(msgError)
    })

exports.query = async (query, valores) => {
    const { rows } = await client.query(query, valores)
    return rows
}
