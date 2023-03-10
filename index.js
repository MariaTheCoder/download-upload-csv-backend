const express = require("express");
const cors = require("cors");
const port = 9000;

/**
 * Add the data from the frontend to the document
 */
let data = {
  headers: ["Id", "Name", "isSmart"],
  data: [
    [1, "Maria", true],
    [2, "Kerim", true],
    [3, "Ms. DumbDumb", false],
  ],
};

/**
 * Create Express application by calling the Express function.
 * The Express function returns an object which we want to store into a variable constant for later use
 */
const app = express();

/**
 * In order to allow a client application to request restricted ressources hosted on a server from a different origin, we can make use of the cors module.
 * Below we add cors as middleware to our Express application.
 */
app.use(cors());
app.use(express.json());

/**
 * The server should be running now which means that the client should be able to connect to the backend.
 * We can get this by creating a http get request that sends back a message to the client that the server is running when the route 'http://localhost:9000/' is visited.
 * Go ahead and test this in the browser. The message should appear. I will wait...
 */
app.get("/", (req, res) => {
  res.send("The server is running");
});

/**
 * When the client connects to route 'http://localhost:9000/posts', return the content of the data variable to the frontend in json format
 */
app.get("/posts", (req, res) => {
  res.json(data);
});

/**
 * When a get request is sent from the client side to the backend asking for a specific post with a given id, return that post only to the client
 */
app.get("/posts/:id", (req, res) => {
  res.json(data.data.find((post) => post[0] === Number(req.params.id)));
});

/**
 * Create a delete method that deletes all current posts and headers
 */
app.delete("/posts", (req, res) => {
  data = {
    headers: [],
    data: [],
  };

  res.json(data);
});

/**
 * When a csv file with new data is being uploaded in the front-end, we want to be able to receive the sent data and save it to the backend.
 * Ideally, we want the backend to be the single source of truth.
 * In order to do this, we want an http request of the method post that .
 */
app.post("/posts", (req, res) => {
  console.log(req.body);
  //   console.log("New posts receieved. Data sent to frontend: ", data);
  res.sendStatus(200);
});

/**
 * We have created an Express application.
 * Now we can call a method of app called listen and make the Express application listen to a specific port and execute a specific line of code once a user connects.
 * Let us print a console.log message in our case.
 */
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
