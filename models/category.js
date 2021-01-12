let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categorySchema = new Schema({
    name: String,
    description: String
});

//virtual for category url
categorySchema.virtual('url').get(function () { 
    return '/models/category/' + this._id;
});

module.exports= mongoose.model('category', categorySchema);