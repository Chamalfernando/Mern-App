const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController');
// const { check, validationResult } = require('express-validator');
// const auth = require('../middleware/auth');

router.route('/').get(getGoals).post(setGoal); // the below commented lines will be replaced by this.

// router.get("/", getGoals); 

// router.post("/",setGoal); 

router.route("/:id").put(updateGoal).delete(deleteGoal); // the below commented lines will be replaced by this.

// router.put("/:id",updateGoal); 

// router.delete("/:id",deleteGoal); 

module.exports = router