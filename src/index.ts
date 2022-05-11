import "./styles.css";
let btnEnv = document.getElementById("enviar");
let usuario: number = document.getElementById("usu");
let password: number = document.getElementById("pass");
let usua: string = "Juan";
let claveu: string = "claveJuan";

btnEnv.addEventListener("click", () => {
  let usuariof: string = usuario.value;
  let password1: string = password.value;
  if (usuariof === usua && password1 === claveu) {
    console.log("Bienvenido");
  } else {
    console.log("El usuario o la clave son incorrectos");
  }

  //}
});
