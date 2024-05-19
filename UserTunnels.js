import express from "express";
import { CreateUser, DeleteUser, GetSingleUser, ReadUsers, UpdateUser,  } from "./UserControll.js";
import { ReadUsersTwo, addsomenew, removeone } from "./UserModeltwoctrl.js";

export const UserRouter = express.Router();
export const UserRoutertwo = express.Router();


UserRouter.get("/ReadUsers", ReadUsers); //done
UserRouter.post("/CreateUser", CreateUser); //done
UserRouter.put("/UpdateUser/:ID", UpdateUser); //done
UserRouter.delete("/DeleteUser/:ID", DeleteUser); //done
UserRouter.get("/GetSingleUser/:ID", GetSingleUser); //done
UserRoutertwo.get("/usermodeltwo", ReadUsersTwo);
UserRoutertwo.post("/addsomenew", addsomenew);
UserRoutertwo.delete("/removeone/:ID", removeone);
