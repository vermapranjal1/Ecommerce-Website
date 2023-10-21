const express= require("express");
const router= express.Router();

const{isAuthenticatedUser,authorizeRoles}=require("../middleware/auth");
const { getSingleOrder, myOrders, getAllOrders,newOrder, updateOrder, deleteOrder } = require("../controllers/order_controller");

router.route("/order/new").post(newOrder,isAuthenticatedUser);
router.route("/order/:id").get(isAuthenticatedUser,getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser,myOrders);
router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"),getAllOrders);
router.route("/admin/order/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateOrder).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteOrder)


module.exports= router;