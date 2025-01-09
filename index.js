const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb+srv://swainkunal164:swa123@cluster0.17cfh.mongodb.net/wondertext');
}

const initDB = async() =>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) =>({
        ...obj,owner: '67738e60e28660f46ef81372'}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};
initDB();