import express from "express";
import {
    createGroup,
    deleteGroup,
    getGroup,
    getGroups,
    getMembers,
    joinGroup,
    leaveGroup,
    removeMember,
} from "../controllers/group.controller.js";
import { protectRoute } from "../middlewares/auth.middileware.js";
import { isGroupAdmin } from "../middlewares/adminCheck.js";

const router = express.Router();
router.post("/creategroup", protectRoute, createGroup);
router.post("/join", protectRoute, joinGroup);
router.post("/:groupId/leave", protectRoute, leaveGroup);
router.get("/", protectRoute, getGroups);
router.delete("/:groupId", protectRoute,isGroupAdmin, deleteGroup);
router.get("/:groupId/members", protectRoute, getMembers);
router.get("/:groupId", protectRoute, getGroup);


router.delete("/:groupId/members/:memberId", protectRoute, removeMember);

// router.get('/getgroup', getGroup);
// router.get('/:groupId', getGroup);

// router.delete('/:groupId', )
export default router;
