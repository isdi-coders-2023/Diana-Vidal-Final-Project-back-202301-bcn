import { type StatusCodesStructure } from "../types/users/types";

const statusCodes: StatusCodesStructure = {
  clientError: { notFound: 404, badRequest: 400, unauthorized: 401 },
  serverError: {
    internalServer: 500,
  },

  success: { okCode: 200 },
};

export default statusCodes;
