import { type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import { Game } from "../../../database/models/Games/Games";
import { type GameStructure } from "../../../types/games/types";
import statusCodes from "../../../utils/statusCodes";
import { getGames } from "./gamesControllers";

const mockGame: GameStructure = {
  game: "Némesis",
  avatar: "asdfghjkl",
  date: new Date(),
  hour: "sfasfa",
  bio: "sdfasdfas",
  plazasLibres: 3,
};

beforeEach(() => jest.resetAllMocks());

describe("Given a getGames controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the status 200", async () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(mockGame),
      };

      const req: Partial<Request> = {};
      const next = jest.fn();
      const expectedStatusCode = statusCodes.success.okCode;

      Game.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockGame),
      }));

      await getGames(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it receives a bad request", () => {
    test("Then it should call its next function", async () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({}),
      };
      const req: Partial<Request> = {};
      const next = jest.fn();

      const expectedError = new CustomError(
        "Bad Request",
        400,
        "Impossible to find game"
      );

      req.body = {};

      Game.find = jest.fn().mockReturnValue(undefined);

      await getGames(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
