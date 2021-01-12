let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//define hat schema with relationship to category
let hatSchema = new Schema( {
    name: String,
    price: Number,
    category: [{type: Schema.Types.ObjectId, ref:"category"}]
});

//virtual for url
hatSchema.virtual('url').get( function () {
    return '/models/hat/' + this._id;
});

module.exports= mongoose.model('hat', hatSchema);