"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _connection = _interopRequireDefault(require("./database/connection.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use(_express["default"].json());
var port = process.env.PORT || 3000;
(0, _connection["default"])().then(function () {
  app.listen(port, function () {
    console.log("Server is Running at http://localhost:".concat(port));
  });
})["catch"](function (err) {
  return console.log("Error occured:", err);
});
//# sourceMappingURL=index.js.map