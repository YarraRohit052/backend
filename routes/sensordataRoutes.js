const express=require('express');

const router=express.Router();

const Authorization=require("../middlewares/check-auth");

const sensorDataController=require('../controllers/sensordataController1');

router.post("/sensordata",sensorDataController.sensordataHandler);

router.get("/sensordata",Authorization,sensorDataController.getdataHandler);

module.exports=router;