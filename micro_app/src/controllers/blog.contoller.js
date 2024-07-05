const BlogModel = require("../models/blog.model");

const getControllerBlog = async (req, res) => {
  try {
    const [data] = await BlogModel.getBlog();
    res.json({
      message: "Success get all Blogs Data",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!!!",
      serverMessage: error.message,
    });
  }
};

const postContollerBlog = async (req, res) => {
  const { body } = req;
  try {
    await BlogModel.postBlog(body);
    res.status(201).json({
      message: "Success post Blogs Data",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!!!",
      serverMessage: error.message,
    });
  }
};

const updateContollerBlog = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await BlogModel.updateBlog(body, id);
    res.status(201).json({
      message: "Success update Blogs Data",
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!!!",
      serverMessage: error.message,
    });
  }
};

const deleteControllerBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.deleteBlog(id);
    res.json({
      message: "Success delete Blogs Data",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error!!!",
      serverMessage: error.message,
    });
  }
};

module.exports = {
  getControllerBlog,
  postContollerBlog,
  updateContollerBlog,
  deleteControllerBlog,
};
