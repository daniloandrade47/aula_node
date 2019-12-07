import { instances } from 'hapi-sequelizejs'

const Post = instances.getModel('Post');

export default class PostsDAO {
  findAll() {
    const params = {
      include: [
        'tags'
      ]
    };

    return Post.findAll(params);
  }

  findByID(id) {
    const params = {
      include: [
        'tags'
      ]
    };

    return Post.findByPk(id, params);
  }

  create(data) {
    return Post.create(data);
  }

  async update(id, post) {
    await Post.update(post, { where: { id }});

    return await this.findByID(id);
  }

  destroy(id) {
    return Post.destroy({ where: { id }});
  }
}
