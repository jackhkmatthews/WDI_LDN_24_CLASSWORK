const express = require('express');
const router  = express.Router();

const presidentsController = require('../controllers/presidents');

router.route('/presidents')
  .get(presidentsController.index)
  .post(presidentsController.create);
router.route('/presidents/:id')
  .get(presidentsController.show)
  .put(presidentsController.update)
  .patch(presidentsController.update)
  .delete(presidentsController.delete);

module.exports = router;
