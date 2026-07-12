import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
      trim: true
    },

    profileGroupImage: {
      type: String,
      default: null
    },

    inviteCode: {
      type: String,
      unique: true,
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true
        },

        role: {
          type: String,
          enum: ["admin", "member"],
          default: "member"
        },

        joinedAt: {
          type: Date,
          default: Date.now
        }
      }
    ],

    features: {
      expenses: {
        type: Boolean,
        default: true
      },

      events: {
        type: Boolean,
        default: false
      },

      grocery: {
        type: Boolean,
        default: false
      },

      polls: {
        type: Boolean,
        default: false
      }
    }
  },
  {
    timestamps: true
  }
);


const Group = mongoose.model("Group",GroupSchema);
export default Group;







