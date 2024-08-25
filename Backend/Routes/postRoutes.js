const cloudinary = require("cloudinary");
const ExpressFormidable = require("express-formidable");

const express = require("express");
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const {
  allPostController,
  singlePostController,
  createPostController,
  updatePostController,
  deletePostController,
} = require("../Controllers/postControllers");

router.get("/all-posts", allPostController);
router.get("/single-post/:id", singlePostController);
router.post("/create-post", createPostController);
router.put("/update-post/:id", updatePostController);
router.delete("/delete-post/:id", deletePostController);

router.post(
  "/upload",
  ExpressFormidable({ maxFieldsSize: 5 * 1024 * 1024 }),
  async (req, res) => {
    try {
      if (!req.files || !req.files.image) {
        return res.status(400).json({ error: "No image file found." });
      }

      const result = await cloudinary.uploader.upload(req.files.image.path);

      res.status(200).json({
        url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return res.status(500).json({ error: "Image upload failed." });
    }
  }
);
module.exports = router;
