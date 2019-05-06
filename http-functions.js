var https = require("https");
module.exports = function getHTML(options, callback) {
  /* Your code here */
  https.get(options, function(response) {
    let str = "";

    response.setEncoding("utf8");

    response.on("data", function(data) {
      str += data;
    });

    response.on("end", function() {
      callback(str);
    });
  });
};
