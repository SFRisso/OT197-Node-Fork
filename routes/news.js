var express = require('express');
var router = express.Router();
const newsController = require('../controllers/news/news');
const newsValidations = require('../middlewares/newsValidations')

/* router.get('/', function (req, res) {
    res.send('Test');
});
 */
/* GET news by id */
router.get('/:id',/*idAmin?  */newsController.detail);

/* POST news create. */
router.post('/',/*idAmin?  */ newsValidations, newsController.create);

/* DELETE news by id */
router.delete('/:id',/*idAmin?  */ newsController.delete);


module.exports = router;
