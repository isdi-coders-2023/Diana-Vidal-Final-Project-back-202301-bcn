import { Router } from "express";
import { getGames } from "../../controllers/gamesControllers.ts/gamesControllers.js";

export const gamesRouteres = Router();

gamesRouteres.get("/games", getGames);

export default gamesRouteres;
