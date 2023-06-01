// Iteration #1
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  // TODO: write the schema
    title: String,
    director: String, 
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const Movies = mongoose.model('MovieS', MovieSchema);

module.exports = Movies;