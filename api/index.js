const express = require("express");

const post = require("./post");
const router = express.Router();

router.use("/post", post);

module.exports = router;
