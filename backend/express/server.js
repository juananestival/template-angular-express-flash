import express from "express";
import dotenv from "dotenv";
import sampleRoutes from './routes/sampleRoutes.js'
import colors from "colors";
import bodyParser from "body-parser";

//config
dotenv.config();
const PORT = process.env.PORTNODE || 8080;
const app = express();

// To be able to see the request. Otherwise it will be empty brackets
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
    res.send("API is runing");
});

app.use('/api/sample', sampleRoutes)

//execute
app.listen(
    PORT,
    console.log(
      `server runing in ${process.env.NODE_ENV}mode on port ${PORT}.`.yellow.bold
    )
);

console.log('Server...')
