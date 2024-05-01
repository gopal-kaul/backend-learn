import express from "express";

const server = express();

server.get("/", function (request, response) {
  response.send("hi");
});

server.listen(4000);
