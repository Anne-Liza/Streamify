import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getRecommendedUsers, getMyFriends, sendFriendRequest,acceptFriendRequest, getFriendRequest, getOutgoingFriendReqs } from "../controllers/user.controller.js";

const router = express.Router();

//apply auth middleware to all routes
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);
router.post("/friends-request/:Id",sendFriendRequest);
router.put("/friends-request/:Id/accept",acceptFriendRequest);
router.get("/friends-request/:Id",getFriendRequest);
router.get("/outgoingfriends-request/:Id",getOutgoingFriendReqs);



export default router;

