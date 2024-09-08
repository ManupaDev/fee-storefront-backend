import express from "express";
import {
    createOrder,
    getOrderById,
    handlePayment
} from "../application/orders.js";

const ordersRouter = express.Router();

ordersRouter.route("/").post(createOrder);
ordersRouter.route("/:id").get(getOrderById);
ordersRouter.route("/webhook/payment").post(handlePayment);

export default ordersRouter;
