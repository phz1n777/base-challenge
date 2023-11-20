const button = document.querySelector("button");
const inputEmail = document.querySelector("#email");



const pMensagem = document.createElement('p');

const clearForm = () => {
  inputEmail.value = '';
}

button.addEventListener(("click"), function(event) {
  event.preventDefault();

  // validações
  if (inputEmail.value.trim() === '') {
    alert("Campo obrigatório");
    return false;
  }

  clearForm();
});


// const box = document.querySelector(".container");
// const imagens = document.querySelectorAll(".container img");

// let contador = 0;

// function slider() {
//     contador++;

//     if (contador > imagens.length - 1) {
//         contador = 0;
//     }

//     box.style.transform = ` translateX(${-contador * 1250}px)`
// }
// setInterval(slider , 2000);