const onStartGame = function (event) {
  event.preventDefault();
  const gameStart = event.target;

  api.startGame(gameStart).then(ui.startGameSuccess).catch(ui.startGameFailure);
};

const onResetGame = function (event) {
  event.preventDefault();

  const reset = event;

  ui.resetGame(reset);
};

module.exports = {
  onStartGame,
  onResetGame,
};
