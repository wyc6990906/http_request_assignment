var https = require("https");

function getAndPrintHTML() {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    let str = "";
    response.setEncoding("utf8");
    response.on("data", function(chunk) {
      str += chunk;
    });
    response.on("end", function() {
      console.log(str);
    });
  });
}

getAndPrintHTML();
