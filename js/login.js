// VARIÁVEIS

var usuario = document.getElementById("usuario").value;
var senha = document.getElementById("senha").value;
var login = 'admin';
var psw = 'admin';

// FUNÇAO SUBMIT

function submit_by_id() {

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (validation()) // CHAMADA DE VALIDAÇAO
    {
        document.getElementById("formulario").submit();
        alert(" Usuário : " + usuario + " Senha : " + senha + " " + " ENTRADA AUTORIZADA");
    }
}

// VALIDAÇÃO DE USUARIO E SENHA 

function validation() {

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === '' || senha === '') {
        alert("ACESSO NEGADO");
        return false;
    } else {
        return true;
    }
}
