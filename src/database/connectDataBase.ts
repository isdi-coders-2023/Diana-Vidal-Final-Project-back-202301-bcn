import createDebug from "debug";
import mongoose from "mongoose";
import "../loadEnvironment.js";

const debug = createDebug("openboards:database");

const connectDataBase = async (mongoUrl: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(mongoUrl);
    debug("Connected to database");
  } catch (error: unknown) {
    debug("Impossible to connect to database", (error as Error).message);
  }
};

export default connectDataBase;
