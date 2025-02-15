export const createUser = () => {
  const emailUp = document.getElementById('emailUp').value;
  const passwordUp = document.getElementById('passwordUp').value;

  firebase.auth().createUserWithEmailAndPassword(emailUp, passwordUp)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = '#/mainmenu';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
