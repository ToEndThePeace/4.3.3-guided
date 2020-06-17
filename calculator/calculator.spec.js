const { add } = require("./calculator.js");

it("checks references", () => {
  expect({}).not.toBe({});
  expect({}).toEqual({});
  expect([1, 2, 3]).toHaveLength(3);
})

// test away!
describe("calculator", () => {
  it("should run tests using it()", () => {
    //OFTEN CALLED TRIPLE A - Arrange, Act, Assert
    // Test Setup

    // Test Execution (SUT - system-under-test)

    // Assertions
    expect(true).toBe(true);
  });
  describe("add()", () => {
    test("should add two numbers", () => {
      expect(add(2, 2)).toBe(4);
    });
    it("should return the number if only one value is passed", () => {
      expect(add(2)).toBe(2);
      expect(add(undefined, 2)).toBe(2);
    });
    it("should return 0 if passed no values", () => {
      expect(add()).toBe(0);
    })
    it("can add unlimited numbers separated by a comma", () => {
      expect(add(1, 2)).toBe(3);
      expect(add(4, 5, 6, 7)).toBe(22);
      expect(add(1, 2, undefined, 3, undefined, undefined, 4)).toBe(10)
    })
    it("should accept an array of numbers as an argument", () => {
      expect(add([1, 2, 3])).toBe(6);
      expect(add([1, 2, undefined, 3])).toBe(6);
    })
  });
});
