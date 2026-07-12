import Group from "../models/Group.js";



export const isGroupAdmin = async (req, res, next) => {
  try {
    const group = await Group.findById(req.params.groupId);

    if (!group) {
      return res.status(404).json({
        error: "Group not found"
      });
    }

    const adminMember = group.members.find(
      member =>
        member.userId.toString() === req.user._id.toString() &&
        member.role === "admin"
    );

    if (!adminMember) {
      return res.status(403).json({
        error: "Only admin can perform this action"
      });
    }

    req.group = group; // optional
    next();

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};