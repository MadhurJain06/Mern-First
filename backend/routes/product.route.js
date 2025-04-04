import express from "express"
const router  = express.Router();
import { createProducts, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";


router.get("/",getProducts);
router.post("/",createProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);


export default router