# API de consulta de Cep

> Essa api foi construida com base nos exercicio da trybe.

## Arquitetura utilizada

Essa api foi feita utilizando a arquitetura MSC, que tem como foco separa funçoes bem especificas atraves da camada **MODEL**, **SERVICE**  e **CONTROLLERS**.

Onde o **MODEL**  cuida da parte da interação com o banco de dados,
o **SERVICE**  é o intermediario do **MODEL** e **CONTROLLERS**, utilizado para aplicar regras de negoicios.

## O que é ?

uma api simple de consulta a cep, caso o cep pesquisado não se encontre no banco de dados, caso o cep não se encontre no banco de dados será feita uma requisição para uma api externa [api viaCep](https://viacep.com.br/ws/[numero-do-cep]/json/) .
