const express = require('express')
const router = express.Router()
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)
  
// POST a new workout
router.post('/', createWorkout)
  
// DELETE a workout
router.delete('/:id', deleteWorkout)
  
// UPDATE a workout
router.patch('/:id', updateWorkout)
  

module.exports = router