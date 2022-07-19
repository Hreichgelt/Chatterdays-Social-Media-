const router = require('express').Router();

const {getThoughts} = require('../../controllers/thoughtControll');
const {getOneThought} = require('../../controllers/thoughtControll');
const {createThought} = require('../../controllers/thoughtControll');
const {editThought} = require('../../controllers/thoughtControll');
const {deleteThought} = require('../../controllers/thoughtControll');
const {addReaction} = require('../../controllers/thoughtControll');
const {deleteReaction} = require('../../controllers/thoughtControll');

// routes for use with all thoughts 
router.route('/').get(getThoughts).post(createThought);

// routes for use with thoughtid
router.route('/:thoughtId').get(getOneThought).put(editThought).delete(deleteThought);

// route for use of reactions via thoughts
// thoughts are like posts in blog and reactions are comments 
router.route('/:thoughtId/reactions').post(addReaction);

// delete reaction 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;