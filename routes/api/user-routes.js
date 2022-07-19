const router = require('express').Router();

const {getUsers} = require('../../controllers/userControll');
const {getOneUser} = require('../../controllers/userControll');
const {createUser} = require('../../controllers/userControll');
const {editUser} = require('../../controllers/userControll');
const {deleteUser} = require('../../controllers/userControll');
const {addFriend} = require('../../controllers/userControll');
const {deleteFriend} = require('../../controllers/userControll');


router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(editUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;