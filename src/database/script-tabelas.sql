-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
drop database individual;
CREATE DATABASE individual;
USE individual;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf CHAR(11),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE frequencia(
idFreq int PRIMARY KEY AUTO_INCREMENT,
fkUser int,
	FOREIGN KEY(fkUser)
		REFERENCES usuario(id),
falta int,
presenca int
);

insert into empresa (razao_social, cnpj) values 
('CCB Vila Terezinha', '12345678901234'),
('CCB Bancária', '23456789012345'),
('CCB Freguesia do Ó', '34567890123456'),
('CCB Jardim Guarani', '45678901234567'),
('CCB Guaimin', '56789012345678'),
('CCB Vila Regina', '67890123456789'),
('CCB Brasilândia', '78901234567890'),
('CCB Cruz das Almas', '61782764539827'),
('CCB Vila Piscinin', '91876254356473'),
('CCB Brás', '87370982763543'),
('CCB Jaraguá', '76354678390283');

SELECT * FROM usuario;
SELECT * FROM empresa; 
SELECT usuario.nome as Usuario, frequencia.falta as Falta, frequencia.presenca AS Presenca
FROM frequencia
JOIN usuario
ON frequencia.fkUser = usuario.id;
