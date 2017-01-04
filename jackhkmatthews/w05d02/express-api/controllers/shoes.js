const Shoe = require('../models/shoe');

//index
function shoesIndex(req, res) {
  Shoe.find({}, (err, shoes) => {
    if (err) res.status(500).json({mesage: err});
    if (!shoes) return res.status(500).json({ message: 'No shoes found' });
    return res.status(200).json({ data: shoes });
  });
}

//Create
function shoesCreate(req, res) {
  Shoe.create(req.body.shoe, (err, shoe) => {
    if (err) res.status(500).json({mesage: err});
    if (!shoe) return res.status(404).json({ message: 'please send correct info' });
    return res.status(201).json({ shoe });
  });
}

//delete
function shoesDelete(req, res) {
  const id = req.params.id;
  Shoe.findByIdAndRemove(id, (err) => {
    if (err) res.status(500).json({mesage: err});
    return res.redirect('/api/shoes');
  });
}

//show
function shoesShow(req, res) {
  const id = req.params.id;
  Shoe.findById(id, (err, shoe) => {
    if (err) res.status(500).json({mesage: err});
    if (!shoe) return res.status(404).json({ message: 'no shoe found' });
    return res.status(200).json({ shoe });
  });
}

//update
function shoesUpdate(req, res) {
  const id = req.params.id;
  Shoe.findByIdAndUpdate(id, req.body.shoe, (err, shoe) => {
    if (err) res.status(500).json({mesage: err});
    if (!shoe) return res.status(404).json({ message: 'no shoe found' });
    return res.status(200).json({ message: 'successfully updated', shoe });
  });
}


// function projectsEdit(req, res) {
//   const id = req.params.id;
//   Project
//   .findById(id)
//   .populate(['creator'])
//   .exec((err, project) => {
//     if (err) return console.log(err);
//     Creator.find({}, (err, creators) => {
//       if (err) console.log(err);
//       return res.render('projects/edit', { project, creators });
//     });
//   });
// }

module.exports = {
  index: shoesIndex,
  create: shoesCreate,
  delete: shoesDelete,
  show: shoesShow,
  update: shoesUpdate
};
