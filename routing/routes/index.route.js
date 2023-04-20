const express = require('express');
const router = express.Router();

const WorkoutController = require('../controllers/workout.controller');
const ExerciseController = require('../controllers/exercise.controller');
const DocumentController = require('../controllers/document.controller');
const UserController = require('../controllers/user.controller');
const CompletedSetController = require('../controllers/completed_set.controller');
const CompletedExerciseController = require('../controllers/completed_exercise.controller');
const CompletedWorkoutController = require('../controllers/completed_workout.controller');

const workout_controller = new WorkoutController;
const exercise_controller = new ExerciseController;
const document_controller = new DocumentController;
const user_controller = new UserController;
const completed_set_controller = new CompletedSetController;
const completed_exercise_controller = new CompletedExerciseController;
const completed_workout_controller = new CompletedWorkoutController;

/*     Guest     */
router.post('/login', user_controller.login); /* Auth - Logged In */
router.post('/register', user_controller.register); /* Auth - Logged In */

/*      Workout       */
router.get('/workout/:id/*', workout_controller.show);
router.get('/workout', workout_controller.index);
router.post('/workout', workout_controller.store); /* Auth - Logged In */
router.update('/workout/:id/*', workout_controller.update); /* Auth - Owner */
router.delete('/workout/:id/*', workout_controller.destroy); /* Auth - Owner  */

/*      Exercise       */
router.get('/exercise/:id/*', exercise_controller.show);
router.get('/exercise', exercise_controller.index);
router.post('/exercise', exercise_controller.store); /* Auth - Logged In */
router.update('/exercise/:id/*', exercise_controller.update); /* Auth - Owner */
router.delete('/exercise/:id/*', exercise_controller.destroy); /* Auth - Owner  */

/*      Document       */
router.get('/document/:id/*', document_controller.show);
router.get('/document', document_controller.index);
router.post('/document', document_controller.store); /* Auth - Logged In */
router.update('/document/:id/*', document_controller.update); /* Auth - Owner */
router.delete('/document/:id/*', document_controller.destroy); /* Auth - Owner  */

/*      User       */
router.get('/user/:id/*', user_controller.show);
router.get('/user', user_controller.index); /* Auth - Admin */
router.update('/user/:id/*', user_controller.update); /* Auth - Owner */
router.delete('/user/:id/*', user_controller.destroy); /* Auth - Admin */

/*      Completed Set       */
router.get('/completed_set/:id/*', completed_set_controller.show); /* Auth - Logged In */
router.get('/completed_set', completed_set_controller.index); /* Auth - Logged In */
router.post('/completed_set', completed_set_controller.store); /* Auth - Logged In */
router.update('/completed_set/:id/*', completed_set_controller.update); /* Auth - Owner */

/*      Completed Exercise       */
router.get('/completed_exercise/:id/*', completed_exercise_controller.show); /* Auth - Logged In */
router.get('/completed_exercise', completed_exercise_controller.index); /* Auth - Logged In */
router.post('/completed_exercise', completed_exercise_controller.store); /* Auth - Logged In */
router.update('/completed_exercise/:id/*', completed_exercise_controller.update); /* Auth - Owner */

/*      Completed Workout       */
router.get('/completed_workout/:id/*', completed_workout_controller.show); /* Auth - Logged In */
router.get('/completed_workout', completed_workout_controller.index); /* Auth - Logged In */
router.post('/completed_workout', completed_workout_controller.store); /* Auth - Logged In */
router.update('/completed_workout/:id/*', completed_workout_controller.update); /* Auth - Owner */

module.exports = router;