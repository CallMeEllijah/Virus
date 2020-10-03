User = require('./user');

exports.add = function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.score = req.body.score;

    user.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: "New player and score Added!",
            data: user
        });
    });
};

exports.get = function (req, res) {
    User.find({ }).then(users => {
        if (!User.length) {
          return res.status(400).json({user: "users no exist"});
        } else {
          return res.status(200).json(users);
        }
      })
};