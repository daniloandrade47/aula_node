import { instances } from 'hapi-sequelizejs';

const Tag = instances.getModel('Tag');

export default class TagsDAO {
  findAll(where) {
    return Tag.findAll({ where });
  }

  getByID(where) {
    return Tag.findOne({ where });
  }

  create(tag) {
    return Tag.create(tag);
  }

  async update(where, payload) {
    await Tag.update(payload, { where });

    return await this.getByID(where);
  }

  destroy(where) {
    return Tag.destroy({ where });
  }
}
