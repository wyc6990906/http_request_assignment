var https = require("https");

function getAndPrintHTML(options) {
  https.get(options, function(response) {
    let str = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
      str += data;
    });

    response.on("end", function() {
      console.log(str);
    });
  });
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};

getAndPrintHTML(requestOptions);
