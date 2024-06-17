const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
let usuarioLogado = null;

(()=>{
    usuarioLogado = localStorage.getItem("usuario");
    if(usuarioLogado){
        window.location.href = "/tmp/guest-o3xyuc/Downloads/g243i2t-main/index.html";
    }
})();

btnLogin.onclick = (e) =>{

    e.preventDefault();

    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario){
        if(usuario === "ezequiel"){
            if(senha === "oinsi"){
                localStorage.setItem("usuario",usuario);
                window.location.href = "/tmp/guest-o3xyuc/Downloads/g243i2t-main/logado.html";
            }
        }else{
            inputUsuario.focus();
        }
    }
}