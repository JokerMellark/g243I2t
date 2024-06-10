const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLogado = null;

(()=>{
    usuarioLogado = localStorage.getItem("usuario");
    if(usuarioLogado){
        window.location.href = "file:///tmp/guest-0gmzlr/Downloads/g243I2t-main/capsula_tempo//logado.html";
    }
})();

btnLogin.onclick = (e) =>{
    e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario){
        if(usuario === "izalinda"){
            if(senha === "123"){
                localStorage.setItem('usuario', usuario);
                window.location.href = "file:///tmp/guest-0gmzlr/Downloads/g243I2t-main/capsula_tempo//logado.html"
            }
        }else{
            inputUsuario.focus();
        }
    }
}