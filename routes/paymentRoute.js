import express from "express";

//const express = require("express");
const router = express.Router();
import  { mpesaWebhook, token, stkPush } from "../controllers/mpesaController.js";

//Endpoint Route
router.post("/stk/push", token, stkPush);

//callBack Route
router.post("/hooks/mpesa", mpesaWebhook);
//module.exports = router;
export default router;