const authEvents = require("./auth/events");

const gameEvents = require("./game/events");

$(() => {
  $("#sign-up").on("submit", authEvents.onSignUp);
  $("#sign-in").on("submit", authEvents.onSignIn);
  $("#change-password").on("submit", authEvents.onChangePassword);
  $("#sign-out").on("click", authEvents.onSignOut);
  $("#pre-sign-up").on("click", authEvents.onPreSignUp);
  $("#back-to-sign-in").on("click", authEvents.onBackToSignIn);

  $("#start-game").on("click", gameEvents.onStartGame);
  $("#reset-game").on("click", gameEvents.onResetGame);
});

$(window).on("load", () => $("#tic-tac-toe").off("click"));
