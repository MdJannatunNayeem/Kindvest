import mongoose from 'mongoose';

const AdminDetailsSchema = new mongoose.Schema({
        volunteerId:{type:mongoose.Schema.Types.ObjectId},
        AdminRemark:{type:String},
        donationAreaId:{type:mongoose.Schema.Types.ObjectId},
        donorId:{type:mongoose.Schema.Types.ObjectId},
        quantity:{type:Number},
        donationType:{type:String},
        receivedPic:{type:String},
        donationPic:{type:String},

    },
    {timestamps:true,versionKey:false,}
);
const AdminToVolunteerToDonorModel = mongoose.model('admin', AdminDetailsSchema);
export default AdminToVolunteerToDonorModel;