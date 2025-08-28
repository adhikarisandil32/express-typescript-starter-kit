import { Router } from "express";

const usersRoute = Router({ mergeParams: true });

usersRoute.get("/", (req, res) => {
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

export { usersRoute };
