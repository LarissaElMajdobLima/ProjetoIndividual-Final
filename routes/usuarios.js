var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function (req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var nickname = req.body.lg_nickname; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.lg_senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from usuario where nickname='${nickname}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		// Se o resultado da instrução for encontrado, execute as funções
		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.id_usuario);
			console.log('sessoes: ', sessoes);
			res.json(resultado[0]);
			// SE não achar resultado, significa que não está cadastrado
		} else if (resultado.length == 0) {
			res.status(403).send('Nickname e/ou senha inválido(s)');
			// SE achar 1 resultado, significa que já existe esse cadastro
		} else {
			res.status(403).send('Mais de um usuário com o mesmo nickname e/ou senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function (req, res, next) {
	console.log('Criando um usuário');

	// Pegando as variáveis com o valor dos campos na minha tabela
	Usuario.create({
		nickname: req.body.nickname,
		data_nasc: req.body.data_nasc,
		senha: req.body.senha

	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* Verificação de usuário */
// Rota ligada com a função validar_sessao do funcoes.js- Verifica os dados com o banco
router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});


/* Logoff de usuário */
// Rota ligada com a função finalizar_sessao do funcoes.js - Encerra a sessao
router.get('/sair/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function (req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

// Exportando as rotas
module.exports = router;
