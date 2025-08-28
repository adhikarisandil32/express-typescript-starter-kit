import dotenv from "dotenv";

dotenv.config();

// Config Interfaces

interface Config {
  appConfig: AppConfig;
  dbConfig: DbConfig;
}

interface AppConfig {
  PORT: number;
  NODE_ENV: "prod" | "dev";
  API_PREFIX: string | undefined;
  API_DOCS_ENDPOINT: string;
}

interface DbConfig {
  url: string | undefined;
}

// Config Variables

const appConfig: AppConfig = {
  NODE_ENV: (process.env.NODE_ENV as AppConfig["NODE_ENV"]) || "dev",
  PORT: Number(process.env.PORT) || 3000,
  API_PREFIX: process.env.API_PREFIX,
  API_DOCS_ENDPOINT: process.env.API_DOCS_ENDPOINT!,
};

const dbConfig: DbConfig = {
  url: process.env.DATABASE_URL,
};

export const config: Config = {
  appConfig,
  dbConfig,
};
