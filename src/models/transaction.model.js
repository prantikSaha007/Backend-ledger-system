const mongoose=require('mongoose');
const MimeNode = require('nodemailer/lib/mime-node');

const transactionSchema=new mongoose.Schema({
    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"account",
        required: [true, "From account is required"],
        index:true,
    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"account",
        required: [true, "To account is required"],
        index:true,
    },
    status: {
        type: String,
        enum: {
            values: ["PENDING","COMPLETED","FAILED","REVERSED"],
            message: "Status must be either PENDING, COMPLETED, FAILED, or REVERSED",
        },
        default: "PENDING",
    },
    ammount: {
        type: Number,
        required: [true,"Ammount is required"],
        Min: [0, "Ammount must be a positive number"],
    },
    idempotencyKey: {
        type: String,
        required: [true, "Idempotency key is required"],
        index: true,
        unique: true,
    },

},{
    timestamps: true,
});

const transactionModel=mongoose.model("transaction",transactionSchema);

module.exports=transactionModel;