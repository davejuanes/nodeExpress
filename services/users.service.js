const faker = require('faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      })
    }
  }

  create() {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser;
  }
  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

module.exports = UsersService;
