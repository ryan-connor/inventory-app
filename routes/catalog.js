let express = require('express');
let router = express.Router();

let hatController = require('../controllers/hatController');
let categoryController = require('../controllers/categoryController');
let hatInstanceController = require('../controllers/hatInstanceController');
let hat = require('../models/hat');

//hat routes 

//hat home page
router.get('/', hatController.index);

//get form to create hat
router.get('/hat/create', hatController.hat_create_form);

//post form to create hat
router.get('hat/create', hatController.hat_create);

//get form to update hat
router.get('/hat/:id/update', hatController.hat_update_form);

//post form to update hat
router.post('/hat/:id/update', hatController.hat_update);

//get form to delete hat
router.get('/hat/:id/delete', hatController.hat_delete_form);

//post form to delete hat
router.get('/hat/:id/delete', hatController.hat_delete);

//get list of hats
router.get('/hat/list', hatController.hat_list);

//get detail page of a hat
router.get('/hat/:id', hatController.hat_detail);




//hat instance routes

//get form to create hat instance
router.get('/hatInstance/create', hatInstanceController.hatInstance_create_form);

//post create hat instance
router.post('/hatInstance/create', hatInstanceController.hatInstance_create);

//get form to update hat instance
router.get('/hatInstance/:id/update', hatInstanceController.hatInstance_update_form);

//post update hat instance
router.post('/hatInstance/:id/update', hatInstanceController.hatInstance_update);

//get form to delete hat instance
router.get('/hatInstance/:id/delete', hatInstanceController.hatInstance_delete_form);

//post delete hat instance
router.get('/hatInstance/:id/delete', hatInstanceController.hatInstance_delete);

//list all hat instances
router.get('/hatInstance/list', hatInstanceController.hatInstance_list);

//get hat instance detail
router.get('/hatInstance/:id', hatInstanceController.hatInstance_detail);


//category routes

//get form to create category
router.get('/category/create', categoryController.category_create_form);

//post create category
router.post('/category/create', categoryController.category_create);

//get form to update category
router.get('/category/:id/update', categoryController.category_update_form);

//post update category
router.post('/category/:id/update', categoryController.category_update);

//get form to delete category
router.get('/category/:id/delete', categoryController.category_delete_form);

//post delete category
router.post('/category/:id/delete', categoryController.category_delete);

//list all categories
router.get('/category/list', categoryController.category_list);

//get category detail
router.get('/category/:id', categoryController.category_detail);



module.exports = router;