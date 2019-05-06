var https = require("https");

function getHTML(options, callback) {
  /* Add your code here */
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
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};

getHTML(requestOptions, printHTML);
