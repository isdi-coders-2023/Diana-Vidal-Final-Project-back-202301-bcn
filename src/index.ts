import "./loadEnvironment.js";
import mongoose from "mongoose";
import connectDataBase from "./database/connectDataBase.js";

const mongoUrl = process.env.MONGODB_CONNECTION_URL!;

mongoose.set("toJSON", {
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

await connectDataBase(mongoUrl);
