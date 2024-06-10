const PostModel = require("../models/post");
const UserModel = require("../models/auth");

const listPosts = async (req, res) => {
  try {
    let pageNo = req.query.pageNo || 1;
    let pageSize = req.query.pageSize || 10;
    pageSize *= 1;
    pageNo = pageNo * 1;
    const postsList = await PostsModel.find({})
      .skip((pageNo - 1) * pageSize)
      .limit(pageSize)
      .sort({ likes: 1 }) // 1 => Ascending, -1 => Descending
      .populate("userId"); // 100
    res.json({
      results: postsList,
    });
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = new PostsModel({ ...req.body, userId: req.user._id });
    await newPost.save();
    res.json({
      msg: "Post created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostsModel.findById(postId).populate("userId");
    res.json({ result: post });
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    await PostsModel.findByIdAndUpdate(postId, req.body);
    res.json({ msg: "Post edited successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await PostsModel.findByIdAndDelete(postId);
    res.json({ msg: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const postComment = async (req, res) => {
  try {
    await PostsModel.updateOne(
      { _id: req.params.postId },
      {
        $push: {
          comments: { comment: req.body.comment, userId: req.user._id },
        },
      }
    );
    res.json({ msg: "Comment posted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const postController = {
  listPosts,
  createPost,
  getPostById,
  editPost,
  deletePost,
  postComment,
};

module.exports = postController;
