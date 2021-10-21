const getFormFields = require("../../lib/get-form-fields");

const api = require("../api");
const ui = require("./ui");

const onSignUp = function (event) {
  event.preventDefault();
  console.log("sign up ran!");

  const form = event.target;
  const formData = getFormFields(form);

  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  console.log("sign in ran!");

  const form = event.target;
  const formData = getFormFields(form);

  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  console.log("sign out ran");

  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  console.log("change password ran!");

  const form = event.target;
  const formData = getFormFields(form);

  api
    .changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const addHandlers = () => {
  $("#sign-up").on("submit", onSignUp);
  $("#sign-in").on("submit", onSignIn);
  $("#sign-out").on("submit", onSignOut);
  $("#change-password").on("submit", onChangePassword);
};

module.exports = {
  addHandlers,
};
