const mongoose=require('mongoose');

const tokenBlacklistSchema=new mongoose.Schema({
    token: {
        type:String,
        required:[true,"Token is required"],
        unique:[true,"token must be unique"],
    },
},{timestamps:true})

tokenBlacklistSchema.index({token:1},{expireAfterSeconds:60*60*24*3});

const tokenBlacklistModel=mongoose.model('TokenBlacklist',tokenBlacklistSchema);

module.exports=tokenBlacklistModel;