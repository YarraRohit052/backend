const express=require('express');

const router=express.Router();

const expdataController=require("../controllers/experimentdataController");

router.post("/postdata",expdataController.expdataHandler);

router.post("/getexpdata",expdataController.getexpdata);

module.exports=router;