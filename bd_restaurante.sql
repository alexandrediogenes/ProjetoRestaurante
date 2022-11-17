
CREATE DATABASE  bd_restaurante
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	
	CREATE SCHEMA IF NOT EXISTS sys
    AUTHORIZATION postgres;
	

	
	CREATE TABLE IF NOT EXISTS  sys.restaurante_tb(
		id serial not null primary key,
		nome varchar(300) not null,
		endereco varchar not null,
		horario_inicio varchar,
		horario_fim varchar
	);
	
	
	CREATE TABLE IF NOT EXISTS sys.produto_tb(
		id serial not null primary key,
		nome_produto varchar not null,
		descricao varchar not null,
		preco decimal not null
	);
	
	
	