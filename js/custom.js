const loginForm = document.getElementById("login-usuario-form");
const msgAlertErroLogin = document.getElementById("msgAlertErroLogin");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (document.getElementById("email").value === "") {
    msgAlertErroLogin.innerHTML =
      " <div class='alert alert-danger' role='alert'> Erro: Necessario preencher o campo usuário! </div>";
  } else if (document.getElementById("senha").value === "") {
    msgAlertErroLogin.innerHTML =
      " <div class='alert alert-danger' role='alert'> Erro: Necessario preencher o campo usuário! </div>";
  }
});
