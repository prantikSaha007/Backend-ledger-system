const mongoose=require('mongoose');

const ledgerSchema= new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: [true,"accociated with account"],
        index: true,
        immutable: true,
    },
    amount: {
        type: Number,
        required: [true,"amount is required"],
        immutable: true,
    },
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
        required: [true,"associated with transaction"],
        index: true,
        immutable: true,
    },
    type: {
        type: String,
        enum: {
            values: ["DEBIT","CREDIT"],
            message: "Type must be either DEBIT or CREDIT",
        },
        required: [true,"ledger type is required"],
        immutable: true,
    }
});

function ledgerPreventModifications() {
    throw new Error("Ledger entries cannot be modified or deleted");
}

ledgerSchema.pre("findOneAndUpdate", ledgerPreventModifications);
ledgerSchema.pre("updateOne", ledgerPreventModifications);
ledgerSchema.pre("deleteOne", ledgerPreventModifications);
ledgerSchema.pre("findOneAndDelete", ledgerPreventModifications);
ledgerSchema.pre("findOneAndRemove", ledgerPreventModifications);
ledgerSchema.pre("remove", ledgerPreventModifications);
ledgerSchema.pre("updateMany", ledgerPreventModifications);
ledgerSchema.pre("deleteMany", ledgerPreventModifications);
ledgerSchema.pre("findOneAndReplace", ledgerPreventModifications);

const ledgerModel=mongoose.model("ledger",ledgerSchema);

module.exports=ledgerModel;
