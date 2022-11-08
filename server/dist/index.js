"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Database Connection 
// import ConnectDB from "./database/connection";

_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get('/', (req, res) => {
  res.json({
    message: "Server is running"
  });
});
const PORT = 4003;
zomato.listen(PORT, () => {
  //  ConnectDB()
  //  .then(() =>{
  //     console.log("Server is running !!!");
  //  })
  //  .catch((error) => {
  // console.log("Server is running but database connection failled...");
  // console.log(error); 
  // });

  console.log("Server is running !!!");
});