var btnCadastro = document.querySelector("#cadastro");
var btnLogin = document.querySelector("#login");

var main = document.querySelector("main");

btnCadastro.addEventListener("click", function () {
    main.className = "cadastro-js";
});

btnLogin.addEventListener("click", function () {
    main.className = "login-js";
});

