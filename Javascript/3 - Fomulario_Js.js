const formulario = document.getElementById("formulario");
const nome_usuarioEntrada = document.getElementById("nome_usuario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener ("submit", function (event){
    event.preventDefault();
    const nome_usuario = nome_usuarioEntrada.value;
    let regra = /^[a-zA-Z][a-zA-Z0-9_-]{4-14}$/
    if (nome_usuario){
        if(regra.test(nome_usuario) && nome_usuario.length >=5 && nome_usuario.lenght <= 15) {
            mensagem.textContent = "nome de usuario valido!";
            mensagem.style.color = "green";
        } else {
            mensagem.textContent = "nome de usuario invalido. por favor, siga as regras.";
            mensagem.style.color = "red";
        }
    } else {
        mensagem.textContent = "Por favor, insira um nome de usuario.";
        mensagem.style.color = "red";
    }
});