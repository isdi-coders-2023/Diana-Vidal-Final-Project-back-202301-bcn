import { type JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  username: string;
  id: string;
}

export default CustomJwtPayload;
