import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter, UserRoutertwo } from "./UserTunnels.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/User", UserRouter);
app.use("/Usertwo", UserRoutertwo);

mongoose.connect(`mongodb+srv://mongodbaccess:mongodbaccess@arockiyaraja.6ottvpg.mongodb.net/CRUD?retryWrites=true&w=majority&appName=arockiyaraja`).then(() => {
    app.listen(5000, () => {
        console.log("Server is Running")
    })
}).catch(err => console.log(err.message))