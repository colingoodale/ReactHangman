const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const letterSchema = new Schema({
    name: { type: String },
});

const Letters = mongoose.model("Letters", letterSchema);

module.exports = Letters;