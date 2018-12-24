const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  dateOfBirth: {
    type: Date,
    default: Date.now()
  },
  gender: {
    type: String,
    default: "Male"
  },
  adress: [
    {
      diachi: {
        type: String
        // required: true
      },
      thanhPho: {
        type: String
        // required: true
      },
      quan: {
        type: String
        // required: true
      }
    }
  ],
  phone: {
    type: String,
    // required: true,
    minlength: 10,
    maxlength: 11
  },
  typeOf: {
    type: String,
    // required: true,
    enum: ["Individual", "Company"],
    default: "Individual"
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
