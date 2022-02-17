/**
 * mongodb+srv://medication_rest_api:LZtCJ46PA4nwAKHI@cluster0.eunjr.mongodb.net/dbMedication
 */

/** Packages */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")

/** App Configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
)

app.use(jsonParser);
app.use(urlEncodedParser);

// const ipFn = require("./middleware/getIpAddress");
// app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to medication rest api.");
})

// Drug Routes Loading
const drugRoutes = require("./routes/drug.routes");
drugRoutes(app);

// ------ Middleware

app.listen(port, () => {
    console.log("Server is running...");
})