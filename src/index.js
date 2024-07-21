"use strict";

import express from "express";
import productsRouter from "./api/products.js";
import categoriesRouter from "./api/categories.js";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
