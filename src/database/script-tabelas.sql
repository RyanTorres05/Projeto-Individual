create database projetoIndividual;
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table quiz (
idQuiz int primary key,
nomeQuiz varchar(45)
);

create table pontuacao (
idPontuacao int auto_increment,
fkIdQuiz int,
fkidUsuario int,
dataPontos date,
pontuacao int,
primary key (idPontuacao, fkIdQuiz, fkIdUsuario),
foreign key (fkIdQuiz) references quiz(idQuiz),
foreign key (fkIdUsuario) references usuario(idUsuario)
);

create table pergunta (
idPergunta int primary key auto_increment,
descricao varchar(45),
resposta varchar(45),
fkIdQuiz int,
foreign key (fkIdQuiz) references quiz(idQuiz)
);

create table alternativa (
idAlternativa int,
descricao varchar(45),
fkPergunta int,
foreign key (fkPergunta) references pergunta(idPergunta)
);

select * from usuario;