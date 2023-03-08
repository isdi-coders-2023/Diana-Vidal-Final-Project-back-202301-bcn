import "./loadEnvironment.js";
import mongoose from "mongoose";
import connectDataBase from "./database/connectDataBase.js";
import startServer from "./server/startServer.js";

const mongoUrl = process.env.MONGODB_CONNECTION_URL!;
const port = process.env.PORT ?? 4000;

mongoose.set("toJSON", {
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

await connectDataBase(mongoUrl);
await startServer(+port);
