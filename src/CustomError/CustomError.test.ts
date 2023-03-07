import CustomError from "./CustomError";

describe("Given a CustomError class", () => {
  describe("When catch an error with the status 404", () => {
    const expectedCustomError = {
      message: "Endpoint not found",
      statusCode: 404,
      publicMessage: "Endpoint not found",
    };

    const customError = new CustomError(
      expectedCustomError.message,
      expectedCustomError.statusCode,
      expectedCustomError.publicMessage
    );
    test("Then it should get the status 404", () => {
      expect(customError).toHaveProperty(
        "statusCode",
        expectedCustomError.statusCode
      );
    });
    test("The it should show the message `Endpoint not found`", () => {
      expect(customError).toHaveProperty(
        "message",
        expectedCustomError.message
      );
    });
    test("Then it should show the public message `Endpoint not found`", () => {
      expect(customError).toHaveProperty(
        "publicMessage",
        expectedCustomError.publicMessage
      );
    });
  });
});
