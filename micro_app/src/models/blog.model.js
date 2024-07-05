const dbPool = require("../config/db");

const getBlog = () => {
  const query = "SELECT * FROM blog";

  return dbPool.execute(query);
};

const postBlog = (body) => {
  const query = `INSERT INTO blog (title, publish_by, published)
                VALUES ('${body.title}', '${body.publish_by}', '${body.published}')`;
  return dbPool.execute(query);
};

const updateBlog = (body, id) => {
  const query = `UPDATE blog
                SET title='${body.title}', publish_by='${body.publish_by}', published='${body.published}'
                WHERE id='${id}'`;
  return dbPool.execute(query);
};

const deleteBlog = (id) => {
  const query = `DELETE FROM blog WHERE id='${id}'`;
  return dbPool.execute(query);
};

module.exports = { getBlog, postBlog, updateBlog, deleteBlog };
