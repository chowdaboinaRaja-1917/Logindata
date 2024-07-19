const jsonServer = require("json-server"); // Importing json-server library

const server = jsonServer.create(); // Creating a new json-server instance
const router = jsonServer.router("logindata.json"); // Specifying the JSON file to be used as a data source
const middlewares = jsonServer.defaults(); // Using default middlewares (logger, static, cors, no-cache)

const port = process.env.PORT || 8080; // Setting the port to the environment variable PORT or defaulting to 8080

server.use(middlewares); // Applying default middlewares
server.use(router); // Using the router to handle requests

// Starting the server and listening on the specified port
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});