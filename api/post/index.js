const express = require("express");
const {
  writePost,
  listPost,
  getPost,
  updatePost,
  deletePost,
} = require("./post.service");

const router = express.Router();

router.get("/", listPost);

router.get("/read/:id", getPost);

router.post("/write", writePost);

router.patch("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

module.exports = router;
