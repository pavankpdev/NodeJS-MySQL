import dotenv from "dotenv"
import express from "express"
import {mysqlConnection} from './database/connectDB'

dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("Hello KPPPP")
})

// Establishing DB connection
mysqlConnection.connect((error) => {
    if (error) console.log(error);
    else {
        console.log(`DB connection established`)
        app.listen(4000, () => {
            console.log(`app is listening to port 4000`)
        })
    }
});
