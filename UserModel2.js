import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const UserModelStructure = new Schema({
    Name: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
        unique: true,
    },
    Password: {
        type: String,
        require: true,
    },

}, { timestamps: true });

export const UserModelTwo = models.Usertwo || model("Usertwo", UserModelStructure);