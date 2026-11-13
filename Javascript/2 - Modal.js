
let modal = document.getElementById("myModal");
let btn = document.getElementById("openmodalBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "flex";

}

span.onclick = function(){
    modal.style.display = "none";
}

// quando o usuario clicar fora do modal. fecha-o//
window.onclick = function (event){
    if (event.target == modal ) {
        modal.style.display = "none";
    }
}