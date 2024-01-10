const express= require("express")
const {signup, login, user, FetchUser, UserById} = require("../controller/userController")
const authMiddle = require("../middleware/userMiddleware")
// const { upload } = require("../middleware/imageMiddleware")
// const upload =require( '../middleware/imageMiddleware');
// const uploadFile = require("../controller/imageController");
const {PostData ,FetchPost, FetchPostById, FetchUserPost}= require("../controller/postController");
const { UpdatePost, DeletePost } = require("../controller/updateController");
const {PostComment, fetchComments} = require("../controller/commentController");
const PostLike = require("../controller/likecontroller");
const router= express.Router()
router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/user").get(authMiddle, user)
router.route("/post").post(PostData)
router.route("/posts").get(FetchPost)
router.route("/byid/:id").get(FetchPostById)
router.route("/update/:id").patch(UpdatePost)
router.route("/delete/:id").delete(DeletePost)
router.route("/fetchUser").get(FetchUser)
router.route("/userId/:id").get(UserById)
router.route("/userpost/:id").get(FetchUserPost)
// router.route("/file/upload")
//   .post(upload.single("file"), uploadFile);
  ///comment route
  router.route("/comment").post(PostComment)
  router.route("/getcomment/:id").get(fetchComments)
  //route for like
  router.route("/like").post(PostLike) 
  // router.route("/getlike").get(fetchLike)
module.exports =router 