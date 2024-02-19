
const botao = document.querySelector(".btn-plataform");
const elementoPlataforms = document.querySelector(".btn-plataform .plataforms");

botao.addEventListener("click", () => {
const botaoEstaAberto = elementoPlataforms.classList.contains("active");

    elementoPlataforms.classList.add("active");

    if(botaoEstaAberto){
        elementoPlataforms.classList.remove("active");
    }else{
        elementoPlataforms.classList.add("active");
    }
});