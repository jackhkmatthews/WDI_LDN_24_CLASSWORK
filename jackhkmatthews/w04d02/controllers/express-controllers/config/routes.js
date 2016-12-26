const express = require('express');
const router  = express.Router();

const foodsController = require('../controllers/foodsController');

// root path
router.get('/', (req, res) => {
  res.redirect(302, '/foods');
});

// Food Restful routes

// router.get('/foods', foodsController.index);
// router.get('/foods/new', foodsController.new);
// router.post('/foods', foodsController.create);
// router.get('/foods/:id', foodsController.show);
// router.get('/foods/:id/edit', foodsController.edit);
// router.put('/foods/:id', foodsController.update);
// router.delete('/foods/:id', foodsController.delete);

//drying up the above
router.route('/foods')
  .get(foodsController.index)
  .post(foodsController.create);

router.route('/foods/new')
  .get(foodsController.new);

router.route('/foods/:id')
  .get(foodsController.show)
  .put(foodsController.update)
  .delete(foodsController.delete);

router.route('/foods/:id/edit')
  .get(foodsController.edit);

module.exports = router;
