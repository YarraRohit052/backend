const express=require('express');

const router=express.Router();

const expdataController=require("../controllers/experimentdataController1");

router.post("/postdata",expdataController.expdataHandler);

router.post("/getexpdata",expdataController.getexpdata);

module.exports=router;