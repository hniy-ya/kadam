import Family from "../models/family.js";
import User from "../models/User.js";
import { generateTokenAndSetCokkie } from "../utils/generateTokenAndCookies.js";
import crypto from "crypto";

export async function signup(req, res) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "password shoud be at least 6 charcter long" });
        }
        if (username.length < 3) {
            return res.status(400).json({ message: "username should be atleast 3 character long" });
        }

        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email  already exist" });
        }

        const existingUsername = await User.findOne({ username: username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username  already exist" });
        }
        const profileImage = `https://api.dicebear.com/9.x/adventurer/svg?seed=${username}`;
        const user = new User({
            username,
            email,
            password,
            profilePic: profileImage
        });
        await user.save();
        const token = generateTokenAndSetCokkie(user._id, res);

        res.status(201).json({
            token,
            user: {
                email: user.email,
                username: user.username,
                profilePic: user.profilePic,
            },
        });
    } catch (error) {
        console.log("Error in register route", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "All fields are required" });

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credential" });

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credential" });

        const token = generateTokenAndSetCokkie(user._id, res);

        res.status(200).json({
            token,

            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                profilePic: user.profilePic,
            },
        });
    } catch (error) {
        console.log("Error in login route", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export async function logout(req, res) {
    try {
        res.clearCookie("jwt-usraa");
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
export const getMe = async (req, res) => {
    try {
        // req.user comes from protectRoute middleware
        res.status(200).json({
            success: true,
            user: req.user,
        });
    } catch (error) {
        console.log("getMe error:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};




// export async function createFamily(req, res) {

//      try {
//     const { familyName, inviteCode,  } = req.body;
//      const userId = req.user._id

//     // --- OPTION A: JOINING AN EXISTING FAMILY ---
//     if (inviteCode) {
//       const family = await Family.findOne({ inviteCode: inviteCode.toUpperCase() });

//       if (!family) {
//         return res.status(404).json({ error: "Invalid invite code. Family not found." });
//       }

//       // Check if user is already in this family to prevent duplicates
//       if (family.members.includes(userId)) {
//         return res.status(400).json({ error: "You are already a member of this family." });
//       }

//       // Add user to family members array
//       family.members.push(userId);
//       await family.save();

//       // Update User's familyId and set role to 'Member'
//       await User.findByIdAndUpdate(userId, {
//         familyId: family._id,
//         role: 'Member'
//       });

//       return res.status(200).json({
//         message: "Successfully joined the family!",
//         family
//       });
//     }

//     // --- OPTION B: CREATING A NEW FAMILY ---
//     if (familyName) {
//       // Generate a unique 6-character code (e.g., AF23D1)
//       const newInviteCode = crypto.randomBytes(3).toString('hex').toUpperCase();

//       const newFamily = new Family({
//         familyName,
//         inviteCode: newInviteCode,
//         adminId: userId,
//         members: [userId]
//       });

//       const savedFamily = await newFamily.save();

//       // Update User to Admin
//       await User.findByIdAndUpdate(userId, {
//         familyId: savedFamily._id,
//         role: 'Admin'
//       });

//       return res.status(201).json({
//         message: "Family created successfully!",
//         family: savedFamily
//       });
//     }

//     // If neither input was provided
//     return res.status(400).json({ error: "Please provide a Family Name or an Invite Code." });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }




