import { onSuccess } from "../../utils/response";

test("onSuccess should exist", () => {
  expect(onSuccess).toBeDefined();
});

test("Test response", () => {
  expect(onSuccess("Hello test").success).toEqual(true);
});
