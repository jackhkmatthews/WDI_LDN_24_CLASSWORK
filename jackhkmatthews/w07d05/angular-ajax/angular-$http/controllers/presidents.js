const President = require('../models/president');

function presidentsIndex(req, res) {
  President.find({}, (err, presidents) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(200).json(presidents);
  });
}

function presidentsShow(req, res) {
  President.findById(req.params.id, (err, president) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!president) return res.status(404).json({message: 'No president was found.'});
    return res.status(200).json(president);
  });
}

function presidentsCreate(req, res) {
  const president = new President(req.body);
  president.save(err => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(201).json(president);
  });
}

function presidentsUpdate(req, res) {
  President.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, president) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!president) return res.status(404).json({message: 'No president was found.'});
    return res.status(200).json(president);
  });
}

function presidentsDelete(req, res) {
  President.findByIdAndRemove(req.params.id, (err, president) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!president) return res.status(404).json({message: 'No president was found.'});
    return res.status(200).json({message: 'President successfully deleted'});
  });
}

module.exports = {
  index: presidentsIndex,
  create: presidentsCreate,
  show: presidentsShow,
  update: presidentsUpdate,
  delete: presidentsDelete
};
