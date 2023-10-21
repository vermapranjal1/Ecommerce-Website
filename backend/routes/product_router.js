const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/product_controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/products").get( getAllProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, createProduct, authorizeRoles("admin"));

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser,updateProduct, authorizeRoles("admin"))
  .delete(isAuthenticatedUser,deleteProduct, authorizeRoles("admin"))

router.route("/product/:id").get(getProductDetails);
router.route("/review").get(isAuthenticatedUser,createProductReview)

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)


module.exports = router;
