let Hat = require('../models/hat');
let HatInstance = require('../models/hatInstance');
let Category = require('../models/category');



//display index/home page
exports.index = function (req, res) {

let results = {};

    let hat_count = async function() {
       await Hat.countDocuments({}, function(err, count) {
            if (err) {
                console.log(err);
                return err;
            }
            results.hat_count= count;
        }).exec();
    };

   let hatInstance_count = async function () {
      await HatInstance.countDocuments({}, function (err,count) {
           if (err) {
               console.log(err);
               return err;
           }
           results.hatInstance_count= count;
       }).exec();
   };

   let category_count = async function () {
     await Category.countDocuments({}, function (err,count) {
        if (err) {
            console.log(err);
            return err;
        }
        results.category_count= count;
    }).exec();
};

//function to call all individual counts and then render them
let getCounts = async function () {
    //call all functions
    await Promise.allSettled([hat_count(), hatInstance_count(), category_count()]);
    // console.log('results:', results);
    res.render('index', {title: 'Hat Store Home', data: results});
    //note that still need to add error handling, currently error just gets returned to the results object
};
    getCounts();  
};

//display list of all hats
exports.hat_list = function (req, res, next) {

    Hat.find({}, 'name price category').populate('category').exec( function (err, list_hats) {
        if(err) {
            return next(err);
        }
        res.render('hat_list', {title: 'Hat List', hat_list: list_hats});
    });


    // res.send('Hat List is not implemented yet')
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
