import createDebug from "debug";
import { app } from "./app.js";

const debug = createDebug("users:startServer");

const startServer = async (port: number) =>
  new Promise((resolve) => {
    const server = app.listen(port, () => {
      debug(`Server listening on port http://localhost:${port}`);
    });
    resolve(server);
  });

export default startServer;
