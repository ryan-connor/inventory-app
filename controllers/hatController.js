let hat = require('../models/hat');


//display index/home page
exports.index = function (req, res) {
    res.send('Home index page not implemnted yet');
};

//display list of all hats
exports.hat_list = function (req, res) {
    res.send('Hat List is not implemented yet')
}

//display specific hat page
exports.hat_detail = function (req, res) {
    res.send('Hat detail page not implmented yet');
}

//display form to create new hat on GET
exports.hat_create_form = function (req, res) {
    res.send('Form to create a new hat not implemented yet');
}

//display form to delete hat on GET
exports.hat_delete_form = function (req, res) {
    res.send('Form to delete hat not implemented yet');
}

//display form to update hat on GET
exports.hat_update_form = function (req, res) {
    res.send('Form to update hat not implemented yet');
}

//create hat on POST
exports.hat_create = function (req, res) {
    res.send('Create hat not implemented yet');
}

//delete hat on POST
exports.hat_delete = function (req, res) {
    res.send ('Delete hat not implemented yet');
}

//update hat on POST
exports.hat_update = function (req, res) {
    res.send ('Update hat not implemented yet');
}
