import CustomError from "./CustomError";

describe("Given the CustomError class", () => {
  describe("When it's instanciated with catch an error with the status 404", () => {
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

    test("Then it should have the property statusCode with the status 404", () => {
      expect(customError).toHaveProperty(
        "statusCode",
        expectedCustomError.statusCode
      );
    });

    test("Then it should have the property message and it shoudl show the message `Endpoint not found`", () => {
      expect(customError).toHaveProperty(
        "message",
        expectedCustomError.message
      );
    });

    test("Then it should have the property publicMessage and it shoudl show the publicMessage `Endpoint not found", () => {
      expect(customError).toHaveProperty(
        "publicMessage",
        expectedCustomError.publicMessage
      );
    });
  });
});
