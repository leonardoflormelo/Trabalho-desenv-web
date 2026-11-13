
function fazerLogin(){
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;
    if(username==="usuario" && password==="senha"){
        console.log("login bem-sucedido!");
        document.getElementById("resultado").innerHTML = "login bem sucedido!";
    } else {
        console.log("Credenciais incorretas, tente novamente.");
        document.getElementById("resultado").innerHTML="Credenciais incorretas, tente novamente.";
    }
}