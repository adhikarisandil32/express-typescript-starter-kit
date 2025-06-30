import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  NODE_ENV: "prod" | "dev";
  API_PREFIX: string | undefined;
  API_DOCS_ENDPOINT: string;
}

export const config: Config = {
  NODE_ENV: (process.env.NODE_ENV as Config["NODE_ENV"]) || "dev",
  PORT: Number(process.env.PORT) || 3000,
  API_PREFIX: process.env.API_PREFIX,
  API_DOCS_ENDPOINT: process.env.API_DOCS_ENDPOINT!,
};
