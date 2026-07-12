
import mongoose from 'mongoose';
const FamilySchema = new mongoose.Schema({
  familyName: {
    type: String,
    required: true,
    trim: true
  },
  inviteCode: {
    type: String,
    unique: true,
    required: true
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});







const Family = mongoose.model("Family", FamilySchema);
export default Family;
