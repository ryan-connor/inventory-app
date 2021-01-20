let Category = require('../models/category');
let Hat = require('../models/hat');

//display list of categories
exports.category_list = function (req, res, next) {

    Category.find().exec( function (err, list) {
        if (err) {

            return next(err);
        }
        res.render('category_list', {title: 'All Categories of hats:', category_list: list});
    });

};

//display page for specific category
exports.category_detail = function (req, res, next) {

let results= {};
//async in parallel

//get category by id first
let getCategory = async function () {
    results.category = await Category.findById(req.params.id).exec();
};

//get all hats associated with that category by the id
let getHats = async function () {
    results.hats = await Hat.find({category: req.params.id}).exec();
};

//function to call both other functions and then render the results
let getResults = async function () {

    await Promise.allSettled([getCategory(), getHats()]);

    if (results.category === null) {
        let err = new Error;
        console.log('category was null error');
        err.status = 404;
        return next(err);
    }

    console.log('results:', results);

    res.render('category_detail', {title: 'Category Detail', category: results.category, category_hats: results.hats })
}

getResults();
    
};

//display form to create category on GET
exports.category_create_form = function (req, res) {
    res.send('category create form not implemented yet');
};

//create category on POST
exports.category_create = function (req, res) {
    res.send('category create not implmented yet');
};

//display form to update category on get
exports.category_update_form = function (req, res) {
    res.send('category update form not implemented yet');
};

//update category on POST
exports.category_update = function (req, res) {
    res.send('category update not implemented yet');
};

//display form to delete category on GET
exports.category_delete_form = function (req, res) {
    res.send('category delete form not implemented yet');
};

//delete category on POST
exports.category_delete = function (req, res) {
    res.send('category delete not implemented yet');
};

