import express from 'express';
import {
createProduct,
getProducts,

getProductById,
updateProduct,
deleteProduct,


} from '../controllers/product.controller.js';
import { ensureAuthenticated } from '../middlewares/auth.middleware.js';
import { uploadSingleImage } from '../middlewares/upload.js';

const router = express.Router();

router.post('/products', uploadSingleImage, createProduct);
router.get('/products', getProducts);
router.get('/products/:id',getProductById);
router.put('/products/:id',updateProduct);
router.delete('/products/:id',deleteProduct);

export default router;
