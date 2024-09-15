import express from "express";
import {
  getCategories,
  getCategoryById,
  createCategory,
} from "../application/categories.js";
import AuthorizationMiddleware from "./../api/middleware/authorization-middleware.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const categoriesRouter = express.Router();

categoriesRouter
  .route("/")
  .get(getCategories)
  .post(ClerkExpressRequireAuth({}), AuthorizationMiddleware, createCategory);

categoriesRouter.route("/:id").get(getCategoryById);

export default categoriesRouter;
