import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
        title: {type:String,unique:true,required:true},
        description:{type:String,required:true},
        donationType:{type:String,required:true},
        donationImg:{type:String},
        statusDonor:{type:String, enum:['pending', 'approved', 'rejected','delivered'], default:'pending'},
        statusVol:{type:String, enum:['pending', 'approved', 'rejected','collected'], default:'pending'},
        deliveryPic:{type:String},
        bio:{type:String},
        userId:{type:mongoose.Schema.Types.ObjectId},

    },
    {timestamps:true,versionKey:false,}
);
const DonationModel = mongoose.model('donations', DonationSchema);
export default DonationModel;