import { createUser } from '../logic/signUpLogic.js';
import { googleAccess } from '../logic/googleSignIn.js';
import { checkEmailValidity } from '../logic/checkEmail.js';

export const signUpView = () => {
  const containerUp = document.createElement('div');
  containerUp.setAttribute('id', 'containerUp');
  const headerUp = document.createElement('header');
  const titleUp = document.createElement('h1');
  titleUp.setAttribute('id', 'titleUp');
  titleUp.innerHTML = 'Tejer & Punto';
  headerUp.appendChild(titleUp);
  containerUp.appendChild(headerUp);
  const mainUp = document.createElement('main');
  const formUp = document.createElement('form');
  formUp.setAttribute('id', 'formUp');
  const inputEmailUp = document.createElement('input');
  inputEmailUp.setAttribute('id', 'emailUp');
  inputEmailUp.setAttribute('class', 'emails');
  inputEmailUp.setAttribute('type', 'email');
  inputEmailUp.setAttribute('placeholder', 'Correo electrónico');
  inputEmailUp.addEventListener('input', checkEmailValidity);
  formUp.appendChild(inputEmailUp);
  const inputPasswordUp = document.createElement('input');
  inputPasswordUp.setAttribute('id', 'passwordUp');
  inputPasswordUp.setAttribute('type', 'password');
  inputPasswordUp.setAttribute('placeholder', 'Contraseña');
  formUp.appendChild(inputPasswordUp);
  const buttonCreateUser = document.createElement('button');
  buttonCreateUser.innerHTML = 'Regístrate';
  buttonCreateUser.setAttribute('id', 'buttonCreateUser');
  buttonCreateUser.addEventListener('click', createUser);
  formUp.appendChild(buttonCreateUser);
  mainUp.appendChild(formUp);
  const termsText = document.createElement('p');
  termsText.innerHTML = 'Al registrarte, aceptas las <a href="">Condiciones</a> de Tejer & Punto.';
  termsText.setAttribute('id', 'termsText');
  mainUp.appendChild(termsText);
  const sendToSignInText = document.createElement('p');
  sendToSignInText.setAttribute('id', 'sendToSignInText');
  sendToSignInText.innerHTML = '¿Ya tienes una cuenta? <a href="#/signin">Inicia sesión</a>.';
  mainUp.appendChild(sendToSignInText);
  const separationTextUp = document.createElement('p');
  separationTextUp.setAttribute('id', 'separationTextUp');
  separationTextUp.innerHTML = '- o -';
  mainUp.appendChild(separationTextUp);
  const buttonToGoogleUp = document.createElement('button');
  buttonToGoogleUp.innerHTML = 'Ingresa con Google';
  buttonToGoogleUp.setAttribute('id', 'buttonToGoogleUp');
  buttonToGoogleUp.addEventListener('click', googleAccess);
  mainUp.appendChild(buttonToGoogleUp);
  containerUp.appendChild(mainUp);
  const divImgUp=document.createElement("div"); //slideshow
  divImgUp.setAttribute("id","divImgUp");
  divImgUp.setAttribute("class", "slideshow-container");
  const divCarruselOne=document.createElement("div");
  divCarruselOne.setAttribute("class","mySlides fade") //divs mySliders
  const imgUp=document.createElement("img");
  imgUp.setAttribute("id", "imgUpOne");
  imgUp.setAttribute("src","./lib/assets/palillohombre.jpg");
  divImgUp.appendChild(divCarruselOne);
  divCarruselOne.appendChild(imgUp);
  const divCarruselTwo=document.createElement("div");
  divCarruselTwo.setAttribute("class","mySlides fade");
  const imgUpTwo=document.createElement("img");
  imgUpTwo.setAttribute("src","./lib/assets/img2.jpg");
  imgUpTwo.setAttribute("id","imgUpTwo");
  divImgUp.appendChild(divCarruselTwo);
  divCarruselTwo.appendChild(imgUpTwo);
  const divCarruselThree=document.createElement("div");
  divCarruselThree.setAttribute("class","mySlides fade");
  const imgUpThree=document.createElement("img");
  imgUpThree.setAttribute("src","./lib/assets/crochetmujer.jpg");
  imgUpThree.setAttribute("id","imgUpThree");
  divImgUp.appendChild(divCarruselThree);
  divCarruselThree.appendChild(imgUpThree);
  const divDots=document.createElement("div");  //creando puntos
  divDots.setAttribute("style", "text-align:center");
  divDots.setAttribute("id","divDots");
  const spanDotsOne=document.createElement("span");
  spanDotsOne.setAttribute("class","dots");
  divDots.appendChild(spanDotsOne);
  const spanDotsTwo=document.createElement("span");
  spanDotsTwo.setAttribute("class","dots");
  divDots.appendChild(spanDotsTwo);
  const spanDotsThree=document.createElement("span");
  spanDotsThree.setAttribute("class","dots");
  divDots.appendChild(spanDotsThree);
  containerUp.appendChild(divDots);
  containerUp.appendChild(divImgUp);
  const footerUp = document.createElement('footer');
  footerUp.setAttribute('id', 'footerUp');
  footerUp.innerHTML = 'Derechos reservados @Tejer&Punto';
  containerUp.appendChild(footerUp);

  //carrusel//
var slideIndex = 0;
showSlides();
  return containerUp;




function showSlides() {
  let i;
  let slides = containerUp.getElementsByClassName("mySlides");
  let dots = containerUp.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides)
  console.log(dots)
  console.log(slideIndex)
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds

}

};