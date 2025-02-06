import express from "express"
import cors from "cors"
import dotenv from "dotenv"
const app = express();
dotenv.config({
    path: "./.env"
})


console.log("anha");

app.use(cors())





export default app;