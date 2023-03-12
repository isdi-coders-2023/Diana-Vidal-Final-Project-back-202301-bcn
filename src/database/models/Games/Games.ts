import { model, Schema } from "mongoose";

const gamesSchema = new Schema({
  game: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  hour: {
    type: Date,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  plazasLibres: {
    type: Number,
    required: true,
  },
});

export const Game = model("Game", gamesSchema, "games");
