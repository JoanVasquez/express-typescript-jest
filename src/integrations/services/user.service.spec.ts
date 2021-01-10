import User from "../../models/User";
import UserService from "../../services/UserService";
const userService: UserService = new UserService();

test("Userservice should exist", () => {
  expect(userService.list).toBeDefined();
  expect(userService.save).toBeDefined();
  expect(userService.update).toBeDefined();
  expect(userService.remove).toBeDefined();
});

describe("UserService tests", () => {
  test("Testing list", () => {
    expect(userService.list().length).toBeGreaterThan(0);
  });

  test("Testing save", () => {
    const user: User = {
      name: "Test",
      email: "test@test.com",
      password: "123456",
    };
    expect(userService.save(user).id).toBeGreaterThan(0);
  });

  test("Test update", () => {
    const users: Array<User> = userService.list();
    const user: User = users[1];
    user.name = "Joan V";
    expect(userService.update(user)).toEqual(true);
  });

  test("Test remove", () => {
    expect(userService.remove(1)).toEqual(true);
  });
});
