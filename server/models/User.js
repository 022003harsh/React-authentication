
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
    
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },

    token: {  
        type: String,
      },



    // active: {  
    //   type: Boolean,
    //   default: true,
    // },
    // approved: {  //dont know
    //   type: Boolean,
    //   default: true,
    // },
    // additionalDetails: { // 1 profile for 1 user so no array
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "Profile",
    // },
    // courses: [  //multiple number of courses a user can purchase so used array of courses 
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Course",
    //   },
    // ],

    // resetPasswordExpires: {  //dont know // this is used in resetpassword inside controllers 
    //   type: Date,
    // },

    // image: {  //make image link using dicebear
    //   type: String,
    // },

    // courseProgress: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "courseProgress",  //how moch progress in multiple courses if user have purchased multiple courses
    //   },
    // ],

    // Add timestamps for when the document is created and last modified
  },
//   { timestamps: true }  // dont know
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)
