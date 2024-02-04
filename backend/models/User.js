const mongoose = require("mongoose")


    // Creating Schema for user
    const UserSchema = new mongoose.Schema(
        {
            username :{type: String, required: true, unique: true},
            email : {type: String, required: true, unique: true},
            password: {type: String, required: true},
            isAdmin:{
                type: Boolean,
                default: false,
            },
        },
        {timestamps: true} //to include createdAt and updatedAt

    );
    module.exports = mongoose.model("User", UserSchema);