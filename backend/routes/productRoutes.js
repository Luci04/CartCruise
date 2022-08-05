import express from "express";
const router = express.Router();

import {
  getProducts,
  getProductById,
} from "../controllers/productContoller.js";

//@desc Fetch All Product
//@route GET /api/product
//@access Public
router.route("/").get(getProducts);

//@desc Fetch Single Product
//@route GET /api/product/:id
//@access Public

router.route("/:id").get(getProductById);

export default router;
