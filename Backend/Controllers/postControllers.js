const postModel = require("../Modals/post");

exports.allPostController = async (req, res) => {
  try {
    const allPosts = await postModel.find({});
    res.status(200).json({
      success: true,
      message: "All post fetched successfully",
      posts: allPosts,
    });
  } catch (error) {
    console.error("Error in fetching all posts:", error);
    res.status(500).json({
      success: false,
      message: "Error in fetching all posts",
      error: error.message,
    });
  }
};

exports.singlePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const singlePost = await postModel.findById(postId);

    res.status(200).json({
      success: true,
      message: "Your post fetched successfully",
      post: singlePost,
    });
  } catch (error) {
    console.error("Error in fetching your post:", error);
    res.status(500).json({
      success: false,
      message: "Error in fetching your post",
      error: error.message,
    });
  }
};

exports.createPostController = async (req, res) => {
  try {
    const { title, content, author, coverImage } = req.body;

    switch (true) {
      case !title:
        return res.status(500).send({ error: "Title is Required" });
      case !content:
        return res.status(500).send({ error: "Content is Required" });
      case !author:
        return res.status(500).send({ error: "Author is Required" });
      case !coverImage:
        return res.status(500).send({ error: "Cover Image is Required" });
    }

    const post = new postModel({
      title,
      content,
      author,
      coverImage,
    });

    await post.save();

    return res.status(200).send({
      success: true,
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Creating Post",
      error,
    });
  }
};

exports.updatePostController = async (req, res) => {
  try {
    const { title, content, author, coverImage } = req.body;


    const post = await postModel.findById(req.params.id);

    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }

    switch (true) {
      case !title:
        return res.status(500).send({ error: "Title is Required" });
      case !content:
        return res.status(500).send({ error: "Content is Required" });
      case !author:
        return res.status(500).send({ error: "Author is Required" });
    }

    let image = "";

    if (!coverImage) {
      image = post.coverImage;
    } else {
      image = coverImage.url;
    }
    const updatedPostData = {
      title,
      content,
      author,
      coverImage: image,
    };

    const updatedPost = await postModel.findByIdAndUpdate(
      req.params.id,
      updatedPostData,
      { new: true }
    );

    return res.status(201).send({
      success: true,
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in updating post",
      error,
    });
  }
};

exports.deletePostController = async (req, res) => {
  try {
    const postId = req.params.id;

    if (!postId) {
      return res.status(400).send({ error: "Post ID is Required" });
    }
    const deletedPost = await postModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).send({ error: "Post not found" });
    }

    res.status(200).send({
      success: true,
      message: "Post deleted successfully",
      deletedPost,
    });
  } catch (error) {
    console.error("Error in deleting post:", error);
    res.status(500).send({
      success: false,
      message: "Error in deleting post",
      error: error.message,
    });
  }
};
