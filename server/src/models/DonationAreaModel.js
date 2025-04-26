import mongoose from 'mongoose';

const DonationAreaSchema = new mongoose.Schema({
        AreaName: {type:String,required:true},
        description:{type:String},
        donationImg:{type:String},
        status:{type:String,enum:['comming soon','on going','finished'],default:'comming soon'},
        donationId:{type:mongoose.Schema.Types.ObjectId},
        donorId:[{type:mongoose.Schema.Types.ObjectId}],
        volunteerId:[{type:mongoose.Schema.Types.ObjectId}],

    },
    {timestamps:true,versionKey:false,}
);
const DonationAreaModel = mongoose.model('area', DonationAreaSchema);
export default DonationAreaModel;