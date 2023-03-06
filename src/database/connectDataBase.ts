import createDebug from "debug";
import mongoose from "mongoose";

const debug = createDebug("users:database");

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
