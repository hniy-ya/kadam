
import Group from "../models/Group.js";
import User from "../models/User.js";
import crypto from "crypto";

// export async function createGroup(req, res) {
//     try {
//         const { groupName, inviteCode } = req.body;
//         const userId = req.user._id;

//         const existingUser = await User.findById(userId);

//         if (existingUser.groupId) {
//             return res.status(400).json({
//                 error: "User already belongs to a group",
//             });
//         }

//         // --- JOIN GROUP ---
//         if (inviteCode) {
//             const group = await Group.findOne({
//                 inviteCode: inviteCode.toUpperCase(),
//             });

//             if (!group) {
//                 return res.status(404).json({
//                     error: "Invalid invite code",
//                 });
//             }

//             if (group.members.some((m) => m.toString() === userId.toString())) {
//                 return res.status(400).json({
//                     error: "Already a member",
//                 });
//             }

//             group.members.push(userId);
//             await group.save();

//             await User.findByIdAndUpdate(userId, {
//                 groupId: group._id,
//                 role: "Member",
//             });

//             return res.status(200).json({
//                 message: "Joined group successfully",
//                 group,
//             });
//         }

//         // --- CREATE GROUP ---
//         if (groupName) {
//             let newInviteCode;
//             let isUnique = false;

//             while (!isUnique) {
//                 newInviteCode = crypto.randomBytes(3).toString("hex").toUpperCase();
//                 const exists = await Family.findOne({ inviteCode: newInviteCode });
//                 if (!exists) isUnique = true;
//             }
//             const profileGroupImage = `https://api.dicebear.com/9.x/initials/svg?seed=${username}`;

//             const newGroup = new Group({
//                 groupName,
//                 profileGroupImage: profileGroupImage,

//                 inviteCode: newInviteCode,
//                 adminId: userId,
//                 members: [userId],
//             });

//             const savedGroup = await newGroup.save();

//             await User.findByIdAndUpdate(userId, {
//                 groupId: savedGroup._id,
//                 role: "Admin",
//             });

//             return res.status(201).json({
//                 message: "Welcome to the group! ",
//                 group: savedGroup,
//             });
//         }

//         return res.status(400).json({
//             error: "Provide groupName or inviteCode",
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

// export async function getGroup(req, res) {
//     try {
//         const userId = req.user._id;

//         const user = await User.findById(userId);

//         // 🟡 If user has NO family
//         if (!user.groupId) {
//             return res.status(200).json({
//                 hasGroup: false,
//             });
//         }

//         // 🟢 Get group data
//         const group = await Group.findById(user.groupId).populate("members", "username email profilePic role");

//         return res.status(200).json({
//             hasGroup: true,
//             group: {
//                 id: group._id,
//                 familyName: group.familyName,
//                 inviteCode: user.role === "Admin" ? group.inviteCode : null,
//             },
//             members: group.members,
//             role: user.role,
//         });
//     } catch (error) {
//         console.log("dashboard error:", error.message);
//         res.status(500).json({ message: "Server error" });
//     }
// }





export async function createGroup(req, res) {
  try {
    const {
      groupName,
      features
    } = req.body;

    const newInviteCode =
      crypto.randomBytes(4)
        .toString("hex")
        .toUpperCase();

          const profileGroupImage = `https://api.dicebear.com/9.x/initials/svg?seed=${groupName}`;


    const group =
      await Group.create({
        groupName,
        profileGroupImage:profileGroupImage,

        inviteCode:newInviteCode,

        createdBy: req.user._id,

        members: [
          {
            userId: req.user._id,
            role: "admin"
          }
        ],

        features
      });

    res.status(201).json(group);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}



export async function joinGroup(
  req,
  res
) {
  try {

    const { inviteCode } =
      req.body;

    const group =
      await Group.findOne({
        inviteCode:
          inviteCode.toUpperCase()
      });

    if (!group) {
      return res.status(404).json({
        error:
          "Invalid invite code"
      });
    }

    group.members.push({
      userId: req.user._id,
      role: "member"
    });

    await group.save();

    res.json({
      message:
        "Joined successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

export const leaveGroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.groupId);

    if (!group) {
      return res.status(404).json({
        error: "Group not found"
      });
    }

    const member = group.members.find(
      m => m.userId.toString() === req.user._id.toString()
    );

    if (!member) {
      return res.status(400).json({
        error: "You are not a member of this group"
      });
    }

    group.members = group.members.filter(
      m => m.userId.toString() !== req.user._id.toString()
    );

    await group.save();

    res.json({
      message: "Left group successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


export const getGroups = async (
  req,
  res
) => {

  const groups =
    await Group.find({
      "members.userId":
        req.user._id
    });

  res.json(groups);
};



export async function getGroup(
  req,
  res
) {
  try {

    const group =
      await Group.findById(
        req.params.groupId
      )
      .populate(
        "members.userId",
        "username profilePic email"
      );

    if (!group) {
      return res.status(404).json({
        error:
          "Group not found"
      });
    }

    res.json(group);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}






export const deleteGroup = async (req, res) => {
  await Group.findByIdAndDelete(req.params.groupId);

  res.json({
    message: "Group deleted successfully"
  });
};


//Get Members

export async function getMembers(
  req,
  res
) {
  try {

    const group =
      await Group.findById(
        req.params.groupId
      ).populate(
        "members.userId",
        "username profilePic"
      );

    res.json(
      group.members
    );

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }}
// Remove Member

export async function removeMember(
  req,
  res
) {
  try {

    await Group.findByIdAndUpdate(
      req.params.groupId,
      {
        $pull: {
          members: {
            userId:
              req.params.memberId
          }
        }
      }
    );

    res.json({
      message:
        "Member removed"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}

