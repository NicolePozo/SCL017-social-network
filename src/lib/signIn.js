import { loginUser } from './signInLogic.js';
import { googleAccess } from './googleSignIn.js';

export const signInView = () => {
  const containerIn = document.createElement('div');
  containerIn.setAttribute('id', 'containerIn');
  const headerIn = document.createElement('header');
  const titleIn = document.createElement('h1');
  titleIn.innerHTML = 'Tejer & Punto';
  titleIn.setAttribute('id', 'titleIn');
  headerIn.appendChild(titleIn);
  containerIn.appendChild(headerIn);
  const mainIn = document.createElement('main');
  const formIn = document.createElement('form');
  const inputEmailIn = document.createElement('input');
  inputEmailIn.setAttribute('id', 'emailIn');
  inputEmailIn.setAttribute('type', 'email');
  inputEmailIn.setAttribute('placeholder', 'Correo electrónico');
  inputEmailIn.addEventListener('input', () => {
    if (inputEmailIn.validity.typeMismatch) {
      inputEmailIn.setCustomValidity('Debes ingresar un email válido');
      inputEmailIn.style.border = '2px dashed #FF0000';
    } else {
      inputEmailIn.setCustomValidity('');
    }
  });
  formIn.appendChild(inputEmailIn);
  const inputPasswordIn = document.createElement('input');
  inputPasswordIn.setAttribute('id', 'passwordIn');
  inputPasswordIn.setAttribute('type', 'password');
  inputPasswordIn.setAttribute('placeholder', 'Contraseña');
  formIn.appendChild(inputPasswordIn);
  const buttonLoginUser = document.createElement('button');
  buttonLoginUser.innerHTML = 'Inicia sesión';
  buttonLoginUser.setAttribute('id', 'buttonLoginUser');
  buttonLoginUser.addEventListener('click', loginUser);
  formIn.appendChild(buttonLoginUser);
  mainIn.appendChild(formIn);
  const separationTextIn = document.createElement('p');
  separationTextIn.innerHTML = '- o -';
  separationTextIn.setAttribute('id', 'separationTextIn');
  mainIn.appendChild(separationTextIn);
  const buttonToGoogleIn = document.createElement('button');
  buttonToGoogleIn.innerHTML = 'Ingresa con Google';
  buttonToGoogleIn.setAttribute('id', 'buttonToGoogleIn');
  buttonToGoogleIn.addEventListener('click', googleAccess);
  mainIn.appendChild(buttonToGoogleIn);
  const sendToSignUpText = document.createElement('p');
  sendToSignUpText.innerHTML = '¿No tienes una cuenta? <a href="#/signup">Regístrate</a>.';
  sendToSignUpText.setAttribute('id', 'sendToSignUpText');
  mainIn.appendChild(sendToSignUpText);
  containerIn.appendChild(mainIn);
  const footerIn = document.createElement('footer');
  footerIn.setAttribute('id', 'footerIn');
  footerIn.innerHTML = 'Derechos reservados @Tejer&Punto';
  containerIn.appendChild(footerIn);
  return containerIn;
};
