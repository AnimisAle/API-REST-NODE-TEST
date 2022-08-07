![Frame 2](https://user-images.githubusercontent.com/60360540/157062717-9d511b0c-8604-4021-84cb-09a02e1bc12c.png)

## Sobre o Projeto

<p>
    O projeto aluno apresenta uma API Rest utilizando o CRUD que ordena de forma crescente e decrescente, validando os atributos de cada objeto. Utilizando o padrão de projeto Singleton e no banco de dados previne o sql injection.
</p><br>

## Sistema Operacional

<br/>

<img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"/>

<br/>

## Back-End

<div style="display: inline_block"><br/>
    <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
    <img align="center" alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img align="center" alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB    " />
    <img align="center" alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
    <hr>
    <h3>Bibliotecas</h3>
    <ul type="square">
        <li><a href="https://expressjs.com/pt-br/">express</a></li>
        <li><a href="https://www.npmjs.com/package/express-async-errors">express-async-errors</a></li>
        <li><a href="https://www.npmjs.com/package/pg">pg</a></li>
        <li><a href="https://www.npmjs.com/package/nodemon">nodemon</a></li>
        <li><a href="https://www.npmjs.com/package/uuid#uuidvalidatestr">uuid</a></li>
    </ul>
</div><br/>

## Banco de dados

<div style="display: inline_block"><br/>
    <img align="center" alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <hr>
    <h3>Biblioteca</h3>
    <ul type="square">
        <li><a href="https://www.postgresqltutorial.com/postgresql-uuid/">uuid</a></li>
    </ul>
</div><br/>

### Modelagem conceitual

![tabelaBD](https://user-images.githubusercontent.com/60360540/161615950-1db894c3-a46e-4dd6-a336-a54c934cca9f.png)


## Plataforma

<br/>

<img alt="Insomnia" src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"/>

<br/>

## IDE

<br/>

<img alt="Visual Studio CODE" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>

<br/>

## Pré-requisitos
Você deve ter algumas dependências para executar o programa:
- `npm` ou `yarn` com `node`.
- `PostgreSQL`.

## Instalação
### Siga estas etapas (dentro de um terminal):
1. Clone o repositório:
    ```shell
    SSH -> $ git clone 
    ```
    | |
    ```shell
    HTTPS -> $ git clone 
    ```
2. Entrar na pasta do projeto:
    ```shell
    $ cd crud-node
    ```
3. Instale às dependências:
    ```shell
    $ npm install
    ```
    | |

    ```shell
    $ yarn install
    ```
## Configuração do Banco de dados
A configuração do bancco de dados acompanhado pelo projeto:

- Criar um banco de cados no PostgreSQL: `CREATE DATABASE crud_node;`
- Nome do banco de dados: `crud_node`
- Usuário do PostgreSQL para se conectar aos bancos de dados: `root`
- Senha do usuário: `Opa_SuaSenha`

<br>

---
<details>
<summary>🐳 DOCKER</summary>

<br>

<ul type="square">
    <li>Sem o Docker, usamos bibliotecas, servidores e bancos de dados no host.</li>
    <li>Podemos definir com Imagens o que queremos usar com o Docker.</li>
    <li>Em Containers, uma aplicação roda isolada, utilizando o mesmo Kernel da máquina, sendo leve e eficiente em relação às VM's (Virtual Machines) e possui portabilidade.</li>
</ul>

<br>

1. Criar um Container:
* --name ⇒ O nome que você quer dar para esse Container;
* -e ⇒ É para definir variáveis de ambientes dentro do Container;
* -p ⇒ A porta do Container. A 5432 é a porta padrão do Postgres;
* -d → executa o Container em background.

    ```shell
    $ sudo docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=Opa_SuaSenha -p 5432:5432 -d postgres
    ```

2. Listar todos os Container criados
    ```shell
    $ sudo docker ps -a
    ```

3. Iniciar o Container criado

    ```shell
    $ sudo docker start pg
    ```

4. Executar o Container
* exec ⇒ executar o container;
* -it ⇒ executar o container de forma interativa, e faz com que interaja comandos no bash;
* pg ⇒ O nome do container;
* bash ⇒ Abri o bash.

    ```shell
    $ sudo docker exec -it pg bash
    ```

5. Entrando no postgres

    ```shell
    $ psql -U root
    ```

6. Criando o banco de dados

    ```shell
    $ CREATE DATABASE crud_node;
    ```

7. Listando bases de dados

    ```shell
    $ \l
    ```

8. Conectando ao banco - crud_node

    ```shell
    $ \c crud_node;
    ```

9. Criando a tabela de Alunos e habilitando a extensão uuid

    ```shell
    $ CREATE EXTENSION "uuid-ossp";

    $ create table if not exists alunos(
    id uuid not null unique default uuid_generate_v4(),
    matricula integer not null unique,
    nome varchar(255) not null,
    email varchar(255) not null,
    sexo varchar(1) not null,
    telefone varchar(16) not null
    );
    ```

10. Listando as tabelas

    ```shell
    $ \dt
    ```

11. Consultar tabela de alunos

    ```shell
    $ select * from alunos;
    ```
</details>

---
<br>

## Executando o projeto
1. Executar o projeto:
    ```shell
    $ npm run dev
    ```

    | |

    ```shell
    $ yarn dev
    ```
2. Acessar o localhost:
    ```http
    http://localhost:9090
    ```
## Autor

| [<img src="https://user-images.githubusercontent.com/60360540/147608621-232512b1-363f-4812-8f69-95c189e1cbc7.jpg" width=115><br><sub>@felipe-fe</sub>](https://www.linkedin.com/in/felipe-fe/) |
| :---: |

| [<img src="https://user-images.githubusercontent.com/54589831/183227097-ea84f2f2-a610-48d2-bad9-54b73376c33d.jpg" width=115><br><sub>@Lucas Lima</sub>](hwww.linkedin.com/in/lucas-de-lima-IFG) |
| :---: |
