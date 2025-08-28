import { Router } from "express";

const productsRoute = Router({ mergeParams: true });

productsRoute.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Operation Successful",
    data: {
      id: undefined,
      name: req.body?.name,
      description: req.body?.description,
    },
  });

  return;
});

productsRoute.get("/:id", (req, res) => {
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

productsRoute.post(`/`, (req, res) => {
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

productsRoute.patch(`/:id`, (req, res) => {
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

export { productsRoute };
