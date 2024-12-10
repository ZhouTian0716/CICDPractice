import { getCoolName } from "../app/Service";

describe("test env setup", () => {
  test("checking", () => {
    const name = getCoolName();
    expect(name).toBe("Cool Name");
  });
});
