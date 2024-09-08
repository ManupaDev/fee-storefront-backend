import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
} from "../application/products.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get(ClerkExpressRequireAuth({}), getProducts)
  .post(createProduct);
productsRouter.route("/:id").get(getProductById);

export default productsRouter;
