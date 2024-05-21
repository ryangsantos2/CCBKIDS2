// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var filho = sessionStorage.FILHO_USUARIO;
    var idade = sessionStorage.IDADE_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_filho = document.getElementById('b_filho');
    var b_idade = document.getElementById('b_idade')

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        b_filho.innerHTML = filho;
        b_idade.innerHTML = idade;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}