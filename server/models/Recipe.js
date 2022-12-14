const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    ingredients: {
        type: Array,
        required: 'This field is required.'
    },
    category: {
        type: String,
        enum: ["Thai", "American", "Chinese", "Maxican", "indian"],
        required: 'This field is required.'
    },
    img: {
        type: String,
        required: 'This field is required.'
    },
});

module.exports = mongoose.model('Recipes', recipeSchema);