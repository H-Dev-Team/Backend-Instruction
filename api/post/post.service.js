const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.listPost = async (req, res, next) => {
  try {
    const listPost = await prisma.post.findMany();
    return res.status(200).json(listPost);
  } catch (err) {
    next(err);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

exports.writePost = async (req, res, next) => {
  try {
    const { published, title, content } = req.body;
    const post = await prisma.post.create({
      data: {
        published,
        title,
        content,
      },
    });
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...body,
      },
    });
    return res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: pid, title } = await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({
      id: pid,
      title,
    });
  } catch (err) {
    next(err);
  }
};
