import express from "express";
import cors from "cors";

export const app = express();
app.disable("x-powered-by");

const allowedOrigins = [
  process.env.CORS_ALLOWED_ORIGIN_LOCAL!,
  process.env.CORS_ALLOWED_ORIGIN_PRODUCTION!,
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
