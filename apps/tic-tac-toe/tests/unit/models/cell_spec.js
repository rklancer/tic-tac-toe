describe('TicTacToe.Cell', function(){
  var cell;

  describe('#columnName', function() {
    beforeEach(function() {
      cell = TicTacToe.Cell.create();
    });

    describe('when it is in the first column', function() {
      beforeEach(function() {
        cell.set('column', 1);
      });

      it('it\'s column name is left', function() {
        expect(cell.get('columnName')).toBe('left');
      });
    });

    describe('when it is in the second column', function() {
      beforeEach(function() {
        cell.set('column', 2);
      });

      it('it\'s column name is center', function() {
        expect(cell.get('columnName')).toBe('center');
      });
    });

    describe('when it is in the third column', function() {
      beforeEach(function() {
        cell.set('column', 3);
      });

      it('it\'s column name is center', function() {
        expect(cell.get('columnName')).toBe('right');
      });
    });
  });

  describe('#rowName', function() {
    beforeEach(function() {
      cell = TicTacToe.Cell.create();
    });

    describe('when it is in the first row', function() {
      beforeEach(function() {
        cell.set('row', 1);
      });

      it('it\'s row name is top', function() {
        expect(cell.get('rowName')).toBe('top');
      });
    });

    describe('when it is in the second row', function() {
      beforeEach(function() {
        cell.set('row', 2);
      });

      it('it\'s row name is middle', function() {
        expect(cell.get('rowName')).toBe('middle');
      });
    });

    describe('when it is in the third row', function() {
      beforeEach(function() {
        cell.set('row', 3);
      });

      it('it\'s row name is center', function() {
        expect(cell.get('rowName')).toBe('bottom');
      });
    });
  });
});