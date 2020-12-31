const io = require("socket.io")();
const { protectSocketIo } = require("../utils/middlewares");

// check if the access token is passed in headers
io.use(protectSocketIo);

io.on("connection", (socket) => {
  console.log("SocketIO Client Connected !");
  socket.on("disconnect", () => {
    console.log("SocketIO Client Disconnected !");
    console.log(socket.id);
  });
});

io.on("error", (error) => {
  console.error(error);
});

module.exports = io;
