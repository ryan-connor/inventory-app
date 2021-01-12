#! /usr/bin/env node

//script to populate the mongo db with sample data
//rewrote from a mdn tutorial script that used the old async module so that it now uses promises/js built in async/await

console.log('This script populates some test data to your database. Specified database as argument - e.g.: node populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
let userArgs = process.argv.slice(2);

let Hat = require('./models/hat');
let HatInstance = require('./models/hatInstance');
let Category = require('./models/category');

let mongoose = require('mongoose');
let mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let hats = [];
let hatInstances = [];
let categories = [];

//function to create a single category
async function categoryCreate(obj) {
        let category = new Category({name:obj.name, description: obj.description});
        let savedCat = category.save();
        //console.log('New Category' + savedCat);
        categories.push(savedCat);
};

//function to create a single hat
async function hatCreate(obj) {
    // console.log("is it a promise:", obj.category[0]);
    // console.log("try to log value:", obj.category[0].value);
    let catValue = obj.category[0].value;
    // console.log("is it still a promise", catValue);
    let hat = new Hat({name:obj.name, price: obj.price, category: catValue});
    let savedHat = hat.save();
    //console.log('New Category' + savedCat);
    hats.push(savedHat);
};

//function to create a single hat instance
async function hatInstanceCreate(obj) {
    // console.log("hat promise:", obj.hat);
    let hatValue = obj.hat.value;
    // console.log("hat value:", hatValue);
    let hatInstance = new HatInstance({serial: obj.serial, hat: hatValue});
    let savedHatInstance = hatInstance.save();
    hatInstances.push(savedHatInstance);
};

//function to create categories
function createCategories () {
    let catArray = [{name: "Formal", description:"For wearing at formal occasions."}, {name: "Sport", description: "For wearing when playing sports or for sport related purposes"}, {name: "Cold Weather", description: "For wearing during cold weather or in cold climates."}];

    catArray.forEach(async function (item) {
        categoryCreate(item).catch( function (err){
            console.log("error creating category:" + err)
        });
    });
};

//function to create hats
function createHats (catSettled) {
    // console.log("create hats running");
    let hatArray = [{name: 'Top Hat', price: '100', category: [catSettled[0],]}, {name: "Baseball Cap", price: 20, category: [catSettled[1],]}, {name: "Bucket Hat", price: 30, category: [catSettled[1],]}, {name: "Beanie", price: 25, category: [catSettled[2],]}];

    hatArray.forEach( async function (item) {
        hatCreate( item).catch( function (err) {
            console.log("error creating hat:" + err);
        });
    });
};

//function to create hat instances
function createHatInstances (hatSettled) {
    // console.log("create hat instances running");
    let hatInstanceArray = [{serial: '1234ABCD', hat:hatSettled[0]}, {serial: '5678EFGH', hat:hatSettled[1]}, {serial:'8901IJKL', hat:hatSettled[1]},{serial:'8901IJKM', hat:hatSettled[2]}, {serial:'8901IJZL', hat:hatSettled[3]}];
    hatInstanceArray.forEach( async function (item) {
        hatInstanceCreate( item).catch( function (err) {
            console.log('error creating hat instance:' + err);
        });
    });
};

//function to create everything in order of dependency
async function createAll () {
    createCategories();
    let catSettled = await Promise.allSettled(categories);
    // console.log("categories:",catSettled);
    createHats(catSettled);
    let hatSettled = await Promise.allSettled(hats);
    // console.log("hats:", hatSettled);
    createHatInstances(hatSettled);
    let instancesSettled = await Promise.allSettled(hatInstances);
    // console.log("hat instances:", instancesSettled);
    // console.log("went through all awaits, disconnecting")
    mongoose.connection.close();
};

createAll().catch( function (err) {
    console.log("Error at end:" + err);
});


