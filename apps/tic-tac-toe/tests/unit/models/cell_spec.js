/*globals TicTacToe describe it expect xit xdescribe beforeEach afterEach spyOn runs waits waitsFor clickOn fillIn */

describe("TicTacToe.Cell", function () {
  it("should be an SC class", function () {
    expect(SC.kindOf(TicTacToe.Cell, SC.Object)).toBe(true);
    expect(TicTacToe.Cell.isClass).toBe(true);
  });
});
