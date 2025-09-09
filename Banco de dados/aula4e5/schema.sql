CREATE DATABASE clima_alerta;
-- Tabela de Tipos de Evento
CREATE TABLE tipo_evento (
id_tipo_evento SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
descricao TEXT);

select * from tipo_evento;
-- Tabela de Estados
CREATE TABLE estado (
sigla_estado CHAR(2) PRIMARY KEY,
nome_estado VARCHAR(100) NOT NULL);

CREATE TABLE localizacao (
id_localizacao SERIAL PRIMARY KEY,
latitude NUMERIC(9,6) NOT NULL,
longitude NUMERIC(9,6) NOT NULL,
cidade VARCHAR(100) NOT NULL,
sigla_estado CHAR(2) NOT NULL REFERENCES
estado(sigla_estado));

CREATE TABLE usuario (
id_usuario SERIAL PRIMARY KEY,
nome VARCHAR(150) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
senha_hash VARCHAR(255) NOT NULL);

CREATE TABLE telefone (
id_telefone SERIAL PRIMARY KEY,
numero VARCHAR(20) NOT NULL,
id_usuario INT NOT NULL REFERENCES usuario(id_usuario));

CREATE TABLE evento (
id_evento SERIAL PRIMARY KEY,
titulo VARCHAR(150) NOT NULL,
descricao TEXT,
data_hora TIMESTAMP NOT NULL,
status VARCHAR(30) CHECK (status IN ('Ativo','Em Monitoramento','Resolvido')),
id_tipo_evento INT NOT NULL REFERENCES tipo_evento(id_tipo_evento),
id_localizacao INT NOT NULL REFERENCES localizacao(id_localizacao));

CREATE TABLE Usuario (
  idUsuario SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senhaHash VARCHAR(255) NOTNULL

CREATE TABLE relato (
id_relato SERIAL PRIMARY KEY,
texto TEXT NOT NULL,
data_hora TIMESTAMP NOT NULL,
id_evento INT NOT NULL REFERENCES
evento(id_evento),
id_usuario INT NOT NULL REFERENCES
usuario(id_usuario));

CREATE TABLE Alerta (
  idAlerta SERIAL PRIMARY KEY,
  mensagem TEX NOT NULL,
  nivel VARCHAR(50),
  dataHora TIMESTAMP NOT NULL,
  idEvento INT NOT NULL,
  FOREIGN KEY (idEvento) REFERENCES Evento(idEvento)
  );
