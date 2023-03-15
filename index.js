import dotenv from "dotenv"
import express from "express"
import {mysqlConnection} from './database/connectDB'
import {promisifiedQueryWrapper} from './database/queryInstance'

dotenv.config()
const app = express()

app.post("/", async (req, res) => {
    await promisifiedQueryWrapper('INSERT INTO test (id, name) VALUES (1, "Pavan")')
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
