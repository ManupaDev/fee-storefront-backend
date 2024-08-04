import express from "express";
import {
    postOrder
} from "../application/orders.js";


const ordersRouter = express.Router();

ordersRouter.route("/").post(postOrder);

export default ordersRouter;