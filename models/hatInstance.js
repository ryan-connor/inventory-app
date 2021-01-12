let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let hatInstanceSchema = new Schema({
    serial: String,
    hat: {type: Schema.Types.ObjectId, ref:"hat"},
});

//virtual for url
hatInstanceSchema.virtual('url').get( function () {
    return '/models/hatInstance/' + this._id;
});


module.exports = mongoose.model('hatInstance', hatInstanceSchema);