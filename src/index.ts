import "./loadEnvironment.js";
import connectDataBase from "./database/connectDataBase.js";
import startServer from "./server/startServer.js";

const mongoUrl = process.env.MONGODB_CONNECTION_URL!;
const port = process.env.PORT ?? 4000;

await connectDataBase(mongoUrl);
await startServer(+port);
