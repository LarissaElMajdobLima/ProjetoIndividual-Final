// Funções de verificacao, validação, logoff e redirecionamento 


let id_usuario;

// Redireciona para a página de login/cadastro
function redirecionar_login() {
    window.location.href = 'Login-Cadastro.html';
}

// Verifica a sessao pelo id. 
// SE o id_usuario for indefinido, vai ativar a função redirecionar que, por sua vez, vai voltar à pagina de login/cadastro
// SE NÃO, vai ativar a função validar 
function verificar_autenticacao() {
   
    console.log('verificar_autenticacao')
    id_usuario = sessionStorage.id_usuario_meuapp;
    console.log(id_usuario)
    if (id_usuario == undefined) {
        redirecionar_login();
        console.log('if')
        
    } else {
        b_usuario.innerHTML = id_usuario;
        validar_sessao();
    }

}

// Função logoff
// Limpa o valor de id_usuario ,encerra a sessao e ativa a função que redireciona para o Login/Cadastro

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

// Valida a sessao pelos dados do Banco
// SE : chama uma rota de validação(funcao) no arquivo usuarios.js que, por sua vez, traz na variável resposta a validação feita com o banco
// SE NÃO chama a função logoff que limpa e encerra a sessão pelo id
function validar_sessao() {
    fetch(`/usuarios/sessao/${id_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${id_usuario}`, { cache: 'no-store' });
}