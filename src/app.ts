import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "@src/swagger-doc/swagger.json";
import { config } from "@src/config/config";

// Visit https://editor.swagger.io/ and/or https://swagger.io/docs/specification/v3_0/api-host-and-base-path/ for more details on api docs practice and learning

const app = express();
const API_PREFIX = config.API_PREFIX?.startsWith("/")
  ? config.API_PREFIX
  : `/${config.API_PREFIX}`;

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  `/${config.API_DOCS_ENDPOINT}`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs),
);

app.get(`${API_PREFIX}`, (req, res) => {
  res.json({ Test: "success" });
  return;
});

app.post(`${API_PREFIX}/products`, (req, res) => {
  res.json({
    status: 200,
    message: "Operation Successful",
    data: {
      id: 1,
      name: req.body?.name,
      description: req.body?.description,
    },
  });

  return;
});

app.patch(`${API_PREFIX}/products/:id`, (req, res) => {
  const productId = req.params.id;

  res.json({
    status: 200,
    message: "Operation Successful",
    data: {
      id: productId,
      name: req.body?.name,
      description: req.body?.description,
    },
  });

  return;
});

export { app };
