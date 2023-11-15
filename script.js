const button = document.querySelector("button");
const inputEmail = document.querySelector("#email");


// criando um elemento p
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
