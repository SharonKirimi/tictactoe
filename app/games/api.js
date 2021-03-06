const config = require("../config");
const store = require("../store");

const startGame = function () {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
  });
};

module.exports = {
  startGame,
};
