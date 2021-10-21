const getFormFields = require("../../lib/get-form-fields");

const api = require("./api");
const ui = require("./ui");

const onCreateGame = function (event) {
  event.preventDefault();
  console.log("onCreateMGame ran!");

  const form = event.target;
  const formData = getFormFields(form);

  api.create(formData).then(ui.onCreateSuccess).catch(ui.onCreateFailure);
};

const onIndexGames = function (event) {
  event.preventDefault();
  console.log("onIndexGames ran!");

  api.index().then(ui.onIndexSuccess).catch(ui.onIndexFailure);
};

const onShowGame = function (event) {
  event.preventDefault();
  console.log("onShowGame ran!");

  const form = event.target;
  const formData = getFormFields(form);
  const id = formData.game.id;

  api.show(id).then(ui.onShowSuccess).catch(ui.onShowFailure);
};

const onDeleteGame = function (event) {
  event.preventDefault();
  console.log("onDeleteGame ran!");

  const form = event.target;
  const formData = getFormFields(form);
  const id = formData.game.id;

  api.destroy(id).then(ui.onDeleteSuccess).catch(ui.onDeleteFailure);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  console.log("onUpdateGame ran!");

  const form = event.target;
  const formData = getFormFields(form);
  const id = formData.game.id;

  api.update(id, formData).then(ui.onUpdateSuccess).catch(ui.onUpdateFailure);
};

const addHandlers = () => {
  $("#games-create").on("submit", onCreateGame);
  $("#games-index").on("submit", onIndexGames);
  $("#games-show").on("submit", onShowGame);
  $("#games-delete").on("submit", onDeleteGame);
  $("#games-update").on("submit", onUpdateGame);
};

module.exports = {
  addHandlers,
};
