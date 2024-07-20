const asyncHandler = require("express-async-handler"); 
const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler( async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
} )

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler( async (req, res) => {
    // console.log(req.body);
    if(!req.body.text){
        // res.status(400).json(
        //     {
        //         message:"Please add a text field"
        //     }
        // );
        res.status(400) // client error or bad request
        throw new Error("Please add a text field");
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(201).json(goal)

    // res.status(201).json(
    //     {
    //         message:"Set goal"
    //     }
    // );
})


// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler( async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })

    // res.status(200).json(
    //     {
    //         message:`Update goal ${req.params.id}`
    //     }
    // );

    res.status(200).json(updatedGoal)
})


// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler( async (req, res) => {

    try {
        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400);
            throw new Error("Invalid goal ID format");
        }

        const goal = await Goal.findById(req.params.id)

        if(!goal){
            res.status(400)
            throw new Error("Goal not found")
        }

        await goal.deleteOne({_id:req.params.id})
        res.status(200).json({id: req.params.id})
    } catch (error) {
        // Proper error handling
        res.status(500).json({ message: error.message });
    }

    // res.status(200).json(
    //     {
    //         message:`Delete goal ${req.params.id}`
    //     }
    // );
})

module.exports = { getGoals, setGoal, updateGoal, deleteGoal }