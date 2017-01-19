const Gym = require('../models/gym');

function gymsIndex(req, res) {
  Gym.find((err, gyms) => {
    if (err) return res.status(500).send();
    return res.status(200).json(gyms);
  });
}

module.exports = {
  index: gymsIndex
};
