let HatInstance = require('../models/hatInstance');

//display list of all hat instances
exports.hatInstance_list = function (req, res, next) {

    HatInstance.find().populate('hat').exec( function(err, list) {
        if (err) {
            return next(err);
        }
        res.render('hatInstance_list', {title: 'Hat Units Available', hatInstance_list: list});
    })


};

//dispaly detail page of hat instance
exports.hatInstance_detail = async function (req, res) {

    let result = await HatInstance.findById(req.params.id).populate('hat').exec();

    res.render('hatInstance_detail', {title: 'Hat Instance', hatInstance: result});

};

//display form to create hat instance on GET
exports.hatInstance_create_form = function (req, res) {
    res.send('hat instance create from not implemented yet');
};

//create hat instance on POST
exports.hatInstance_create = function (req, res) {
    res.send('hat instance create not implented yet');
};

//display form to update hat instance on GET
exports.hatInstance_update_form = function (req, res) {
    res.send('hat instance update form not implemnted yet');
};

//update hat instance on POST
exports.hatInstance_update = function (req, res) {
    res.send('hat instance update not implemented yet');
};

//display form to delete hat instance on GET
exports.hatInstance_delete_form = function (req, res) {
    res.send('hat instance delete form not implemented yet');
};

//delete hat instance on POST
exports.hatInstance_delete = function (req, res) {
    res.send('hat instance delete not implemented yet');
};