// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   profilePic: {
//     type: String,
//     default: ""
//   },
//   groupId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Group',
//     default: null
//   },
//   role: {
//     type: String,
//     enum: ['Admin', 'Member'],
//     default: 'Member'
//   },
//   lastLocation: {
//     lat: { type: Number },
//     lng: { type: Number },
//     updated: { type: Date, default: Date.now }
//   }
// }, { timestamps: true });

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// UserSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model("User", UserSchema);
// export default User;


import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    profilePic: {
      type: String,
      default: ""
    },

  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(
    this.password,
    10
  );

  next();
});

UserSchema.methods.comparePassword =
async function (enteredPassword) {

  return bcrypt.compare(
    enteredPassword,
    this.password
  );
};

const User = mongoose.model(
  "User",
  UserSchema
);

export default User;