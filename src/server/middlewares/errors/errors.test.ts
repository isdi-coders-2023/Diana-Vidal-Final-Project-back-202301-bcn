import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import { generalError, notFoundError } from "./errors";
import statusCodes from "../../../utils/statusCodes";

const {
  clientError: { notFound },
  serverError: { internalServer },
} = statusCodes;

beforeEach(() => {
  jest.clearAllMocks();
});

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const req: Partial<Request> = {};

const next: NextFunction = jest.fn();

describe("Given a generalError middlware", () => {
  describe("When it receives a custom error with the message `There was a problem` and status code 404 and the public message `Something is wrong`", () => {
    test("Then it should response with the status code 404 and json method with the public message received", () => {
      const expectedError = new CustomError(
        "There was a problem",
        404,
        "Something is wrong"
      );

      generalError(expectedError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(notFound);
      expect(res.json).toHaveBeenCalledWith({
        error: expectedError.publicMessage,
      });
    });
  });

  describe("When it receives a new error that is not a custom error", () => {
    test("Then it should response with the status code 500 and the public message `Something went wrong`", () => {
      const expectedError = new Error();
      const expectedPublicMessage = "Something went wrong";

      generalError(
        expectedError as CustomError,
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(internalServer);
      expect(res.json).toHaveBeenCalledWith({ error: expectedPublicMessage });
    });
  });
});

describe("Given a notFoundError middlewate", () => {
  describe("When it receives a request", () => {
    test("Then it should call the next methor with the status code 404 and the message `Endpoint not found`", () => {
      const expectedCustomError = new CustomError(
        "Endpoint not found",
        404,
        "Endpoint not found"
      );

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedCustomError);
    });
  });
});
