import express from "express";
import {
  createOrder,
  getOrderById,
  handlePayment,
} from "../application/orders.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import AuthorizationMiddleware from "./../api/middleware/authorization-middleware.js";

const ordersRouter = express.Router();

ordersRouter.route("/").post(ClerkExpressRequireAuth({}), createOrder);
ordersRouter.route("/:id").get(ClerkExpressRequireAuth({}), getOrderById);
ordersRouter
  .route("/webhook/payment")
  .post(ClerkExpressRequireAuth({}), handlePayment);

export default ordersRouter;
