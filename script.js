const button = document.querySelector("button");
const inputEmail = document.querySelector("#email");



const pMensagem = document.createElement('p');

const clearForm = () => {
  inputEmail.value = '';
}
const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

button.addEventListener(("click"), function(event) {
  event.preventDefault();

  // validações
  if (inputEmail.value.trim() === '') {
    alert("Campo obrigatório");
    return false;
  }

  clearForm();
});

function slider() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = ` translateX(${-contador * 300}px)`
}
setInterval(slider , 3000);



