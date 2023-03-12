import { type JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  username: string;
  id: string;
}

export interface StatusCodesStructure {
  clientError: {
    notFound: number;
    badRequest: number;
    unauthorized: number;
  };

  serverError: {
    internalServer: number;
  };

  success: {
    okCode: number;
  };
}
