import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "@src/swagger-doc/swagger.json" with { type: "json" }; // assertion required for ecmascript json imports
import { config } from "@src/config/config.js";
import { rootRoute } from "./routes/root.route";

// Visit https://editor.swagger.io/ and/or https://swagger.io/docs/specification/v3_0/api-host-and-base-path/ for more details on api docs practice and learning

// api docs endpoint
const API_DOCS_ENDPOINT = !config.appConfig.API_DOCS_ENDPOINT
  ? "/"
  : config.appConfig.API_DOCS_ENDPOINT.startsWith("/")
    ? config.appConfig.API_DOCS_ENDPOINT
    : `/${config.appConfig.API_DOCS_ENDPOINT}`;

//api prefix
const API_PREFIX = !config.appConfig.API_PREFIX
  ? "/"
  : config.appConfig.API_PREFIX.startsWith("/")
    ? config.appConfig.API_PREFIX
    : `/${config.appConfig.API_PREFIX}`;

const app = express();

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(API_DOCS_ENDPOINT, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(API_PREFIX, rootRoute);

export { app };
