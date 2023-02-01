const mongoose = require("mongoose");

const productSchema = new mongoose.schema({
  userId: {
    type: String,
  },

  name: {
    type: String,
    required: [true, "Please provide name"],
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  products: [
    {
      category: {
        type: String,
        required: [true, "Please provide title"],
        trim: true,
        minlength: 3,
        maxlength: 20,
      },

      title: {
        type: String,
        required: [true, "Please provide title"],
        trim: true,
        minlength: 3,
        maxlength: 20,
      },

      description: {
        type: String,
        required: [true, "Please provide description"],
        trim: true,
        minlength: 10,
        maxlength: 200,
      },

      brand: {
        type: String,
        trim: true,
      },

      price: {
        type: Number,
        required: [true, "Please enter price "],
      },

      state : {
        type : String ,
        required : [true ,"Please mention your state"],
      },
      city : {
        type : String ,
        required : [true , "Please enter your city"],
      },
      lnadmark : {
        type : String,
        trim : true ,
      }
    },
  ],
});
