const postController = require('../controllers/postControllers');

module.exports = (app) => {
    app.route('/posts')
    .get(postController.list)
    .post(postController.create)

    app.route('/posts/:id')
    .put(postController.update)
    .put(postController.comment)
    .delete(postController.delete)
    .get(postController.getPostById)


    app.route('/mypost')
    .get(postController.mypost)
}
