function submit_by_id() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (validation()) // Calling validation function
    {
        document.getElementById("formulario").submit(); //form submission
        alert(" Usuário : " + usuario + " Senha : " + senha + " " + " Entrada permitida");
    }
}
// Name and Email validation Function.
function validation() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (usuario === '' || senha === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else {
        return true;
    }
}
//let usuario = document.getElementById(usuario).value;
//let senha = document.getElementById(senha).value;

//app.post('/add', function(req, res)) {
//    res.send('formulario enviado');
//    console.log('Sucesso');
//}

function login() {

    if (usuario == 'admin' && senha == 'admin') {
        console.log('Sucesso');

    } else {
        console.log("Acesso negado");

    }

    newFunction();

    return;
}

function newFunction() {
    localStorage.setItem(login, JSON.stringify(senha));
}