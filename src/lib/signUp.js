export const signUpFunction = () => {
  const rootUp = document.getElementById('rootSignUp');
  const headerUp = document.createElement('header');
  const titleUp = document.createElement('h1');
  titleUp.innerHTML = 'Tejer & Punto';
  headerUp.appendChild(titleUp);
  rootUp.appendChild(headerUp);
  const mainUp = document.createElement('main');
  const inputEmailUp = document.createElement('input');
  inputEmailUp.setAttribute('id', 'emailUp');
  inputEmailUp.setAttribute('type', 'email');
  inputEmailUp.setAttribute('placeholder', 'Correo electrónico');
  mainUp.appendChild(inputEmailUp);
  const inputPasswordUp = document.createElement('input');
  inputPasswordUp.setAttribute('id', 'passwordUp');
  inputPasswordUp.setAttribute('type', 'password');
  inputPasswordUp.setAttribute('placeholder', 'Contraseña');
  mainUp.appendChild(inputPasswordUp);
  const buttonCreateUser = document.createElement('button');
  buttonCreateUser.innerHTML = 'Regístrate';
  buttonCreateUser.setAttribute('id', 'buttonCreateUser');
  buttonCreateUser.addEventListener('click', () => {
    const emailUp = document.getElementById('emailUp').value;
    const passwordUp = document.getElementById('passwordUp').value;

    firebase.auth().createUserWithEmailAndPassword(emailUp, passwordUp)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
  mainUp.appendChild(buttonCreateUser);
  rootUp.appendChild(mainUp);
};
