//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'fok'
    });
});

var userController = require('./userController');

router.route('/leaderboard')
    .get(userController.get)
    .post(userController.add);

module.exports = router;