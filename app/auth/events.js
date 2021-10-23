const getFormFields = require("../../lib/get-form-fields");

const api = require("./api");
const ui = require("./ui");

const onPreSignUp = function (event) {
  event.preventDefault();

  const preSignUp = event.target;

  ui.preSignUp(preSignUp);
};

const onBackToSignIn = function (event) {
  event.preventDefault();

  const BackSignIn = event.target;

  ui.BackToSignIn(BackSignIn);
};

const onSignUp = function (event) {
  event.preventDefault();

  const form = event.target;

  const formData = getFormFields(form);

  api
    .signUp(formData)

    .then(ui.signUpSuccess)

    .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();

  const form = event.target;

  const formData = getFormFields(form);

  api
    .signIn(formData)
    .then(ui.signInSuccess)

    .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  const form = event.target;

  const formData = getFormFields(form);

  api
    .changePassword(formData)

    .then(ui.changePasswordSuccess)

    .catch(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();

  api
    .signOut()

    .then(ui.signOutSuccess)

    .catch(ui.signOutError);
};

module.exports = {
  onPreSignUp,
  onBackToSignIn,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
};
