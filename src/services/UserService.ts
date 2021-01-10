import User from "../models/User";

export default class UserService {
  private users: Array<User>;

  constructor() {
    this.users = new Array();
    for (let i = 0; i <= 20; i++) {
      const user: User = {
        id: i,
        name: `Test ${i}`,
        email: `test${i}@test.com`,
        password: `test${1}`,
      };
      this.users.push(user);
    }
  }

  public list(): Array<User> {
    return this.users;
  }

  public save(user: User): User {
    user.id = this.users.length;
    this.users.push(user);
    return user;
  }

  public update(user: User): boolean {
    const index: number = this.users.findIndex(
      (item: User) => item.id === user.id
    );
    this.users[index] = user;
    return true;
  }

  public remove(id: number): boolean {
    const index: number = this.users.findIndex((item: User) => item.id === id);
    this.users[index] = null;
    return true;
  }
}
