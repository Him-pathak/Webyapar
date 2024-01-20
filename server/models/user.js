const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    password : {
        type : String,
        required : true,
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    name : {
        type : String,
        required : true,
        default : "-",
    },
    verified : {
        type : String,
        required : true,
        default : "notYet"
    },
    userImage : {
        type : String,
        default : "data:image/png;base64,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"
    }

},
    { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;