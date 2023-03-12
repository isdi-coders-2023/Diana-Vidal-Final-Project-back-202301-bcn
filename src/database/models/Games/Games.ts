import { model, Schema } from "mongoose";

const gamesSchema = new Schema({
  game: {
    type: String,
  },
});

export const Game = model("Game", gamesSchema, "games");
