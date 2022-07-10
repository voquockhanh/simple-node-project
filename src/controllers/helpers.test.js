import { toProductModel } from "./helpers";

test("should convert to right Product Modal", () => {
  var expectModal = {
    name: "test",
  };
  var input = {
    name: "test",
  };

  var expectOutput = toProductModel(input);
  expect(expectOutput).toEqual(expectModal);
});
