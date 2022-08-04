import express from "express";
import AsyncHandler from "express-async-handler";

const router = express.Router();

import Product from "../models/productModel.js";

//@desc Fetch All Product
//@route GET /api/product
//@access Public
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const product = await Product.find({});

    res.json(product);
  })
);

//@desc Fetch Single Product
//@route GET /api/product/:id
//@access Public

router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
