import { Router } from "express";
import { productsRoute } from "./products/products.route";
import { usersRoute } from "./users/users.route";

const rootRoute = Router({ mergeParams: true }); // merge child's and parent's params

rootRoute.use("/products", productsRoute);
rootRoute.use("/users", usersRoute);

export { rootRoute };
