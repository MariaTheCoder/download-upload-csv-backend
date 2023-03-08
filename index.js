const express = require("express");
const port = 9000;

/**
 * Create Express application by calling the Express function.
 * The Express function returns an object which we want to store into a variable constant for later use
 */
const app = express();

/**
 * We have created an Express application.
 * Now we can call a method of app called listen and make the Express application listen to a specific port and execute a specific line of code once a user connects.
 * Let us print a console.log message in our case.
 */
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
