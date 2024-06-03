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
nomeQuiz varchar(45),
qtdQuestoes int
);

select * from quiz;

insert into quiz values
(1, 'Quiz Yunk Vino', 8);

create table pontuacao (
idPontuacao int auto_increment,
fkQuiz int,
fkUsuario int,
dataHora datetime,
qtdAcertos int,
primary key (idPontuacao, fkQuiz, fkUsuario),
foreign key (fkQuiz) references quiz(idQuiz),
foreign key (fkUsuario) references usuario(idUsuario)
);

select u.nome, MAX(p.qtdAcertos) AS maxAcertos
FROM usuario u
JOIN pontuacao p ON u.idUsuario = p.fkUsuario
where u.idUsuario = 1
GROUP BY u.idUsuario, u.nome;

select * from pontuacao;
select * from usuario;