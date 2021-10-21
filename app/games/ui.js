const onCreateSuccess = function (responseData) {
  $("#games-display").text("Game successfully created");

  $("#games-display").removeClass();
  $("#games-display").addClass("text-success");

  // extract the move from the response's data
  // update the div with the id `games-display` to have html for our game
  const game = responseData.game;
  $("#games-display").html(`
    <div>
      <h3>${game.title}</h3>
      <p>Directed by: ${game.director}</p>
      <p>ID: ${game._id}</p>
    </div>
  `);

  $("form").trigger("reset");
  console.log("onCreateSuccess ran. responseData is :", responseData);
};

const onCreateFailure = function (error) {
  $("#error-message").text("Error on creating game");
  $("#error-message").removeClass();
  $("#error-message").addClass("text-danger");
  console.error("onCreateFailure ran. Error is :", error);
};

const onIndexSuccess = function (responseData) {
  $("#games-display").text("All Games successfully received");
  $("#games-display").removeClass();
  console.log("onIndexSuccess ran. responseData is :", responseData.games);

  let gamesHtml = "";
  const games = responseData.games;
  games.forEach((game) => {
    gamesHtml += `
    <div>
      <h3>${game.title}</h3>
      <p>Directed by: ${game.director}</p>
      <p>ID: ${game._id}</p>
    </div>
  `;
  });
  $("#games-display").html(gamesHtml);
};

const onIndexFailure = function (error) {
  $("#error-message").text("Error on getting games");
  $("#error-message").removeClass();
  $("#error-message").addClass("text-danger");
  console.error("onIndexFailure ran. Error is :", error);
};

const onShowSuccess = function (responseData) {
  $("#games-display").text("One Game successfully received");
  $("#games-display").removeClass();
  $("#games-display").addClass("text-success");
  console.log("onShowSuccess ran. responseData is :", responseData);
  $("form").trigger("reset");

  const game = responseData.game;
  $("#games-display").html(`
    <div>
      <h3>${game.title}</h3>
      <p>Directed by: ${game.director}</p>
      <p>ID: ${game._id}</p>
    </div>
  `);
};

const onShowFailure = function (error) {
  $("#error-message").text("Error on getting game");
  $("#error-message").removeClass();
  $("#error-message").addClass("text-danger");
  console.error("onShowFailure ran. Error is :", error);
};

const onDestroySuccess = function () {
  $("#games-display").text("Game successfully deleted");
  $("#games-display").removeClass();
  $("#games-display").addClass("text-success");
  $("form").trigger("reset");
  console.log("Game successfully deleted");
};

const onDestroyFailure = function (error) {
  $("#error-message").text("Error on deleting game");
  $("#error-message").removeClass();
  $("#error-message").addClass("text-danger");
  console.error("onDestroyFailure ran. Error is :", error);
};

const onUpdateSuccess = function () {
  $("#games-display").text("Game successfully updated");
  $("#games-display").removeClass();
  $("#games-display").addClass("text-success");
  $("form").trigger("reset");
  console.log("Game successfully updated");
};

const onUpdateFailure = function (error) {
  $("#error-message").text("Error on updating game");
  $("#error-message").removeClass();
  $("#error-message").addClass("text-danger");
  console.error("onUpdateFailure ran. Error is :", error);
};

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure,
};
