create database crud_node;

create extension if not exists "uuid-ossp";

create table if not exists alunos(
    id uuid not null unique default uuid_generate_v4(),
    matricula integer not null unique,
    nome varchar(255) not null,
    email varchar(255) not null,
    sexo varchar(1) not null,
    telefone varchar(16) not null
);

/*{
    "matricula": "123456789",
    "nome": "test",
    "email": "test@email",
    "sexo": "M",
    "telefone": "(62) 9 xxxx-xxxx",
}*/
