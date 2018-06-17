var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/le-petite-shopping-cart').then(() => {
    console.log("Connected to database...")
});
