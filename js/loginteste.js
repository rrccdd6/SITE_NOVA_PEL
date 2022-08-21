function logar() {

    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    if (usuario.value == "@admin" && senha.value == "admin") {


        window.localStorage.setItem("acesso", true);
        console.log("entrou")
    } else {
        alert("ACESSO NEGADO");
    }
}