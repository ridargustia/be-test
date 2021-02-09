const axios = require("axios");
const { config } = require("../config");

function getUserInfo(token, success) {
  axios({
        method: "get",
        url: `${config.apiUrl}/user`,
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((response) => {
        success(response.data);
      });
}

module.exports = {
  getUserInfo : getUserInfo
};


