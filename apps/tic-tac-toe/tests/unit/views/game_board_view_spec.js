/*globals TicTacToe describe it expect xit xdescribe beforeEach afterEach spyOn runs waits waitsFor clickOn fillIn */

describe('GameBoardView', function() {
  var view;

  describe('properties are that', function() {
    beforeEach(function() {
      view = TicTacToe.GameBoardView.create();
    });

    it('it\'s layer id is gameBoard', function() {
      expect(view.get('layerId')).toBe('gameBoard');
    });

    it('all of it\'s children are cells', function() {
      expect(view.get('exampleView')).toBe(TicTacToe.CellView);
    });

    it('can not edit it\'s cells', function() {
      expect(view.get('canEditContent')).toBe(NO);
    });

    it('can not reorder it\'s cells', function() {
      expect(view.get('canReorderContent')).toBe(NO);
    });

    it('can not delete it\'s content', function() {
      expect(view.get('canDeleteContent')).toBe(NO);
    });
  });
});