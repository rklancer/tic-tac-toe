describe('CellView', function() {
  var cell, view;

   describe('#columnClass', function() {
     beforeEach(function(){
       cell = TicTacToe.Cell.create();
       view = TicTacToe.CellView.create({content: cell});
     });

     describe('when it is in the first column', function() {
       beforeEach(function() {
        cell.set('column', 1);
       });

       it('it\'s column name is leftColumn', function() {
         expect(view.get('columnClass')).toBe('leftColumn');
       });
     });

     describe('when it is in the second column', function() {
       beforeEach(function() {
        cell.set('column', 2);
       });

       it('it\'s column name is center', function() {
         expect(view.get('columnClass')).toBe('centerColumn');
       });
     });

     describe('when it is in the third column', function() {
       beforeEach(function() {
         cell.set('column', 3);
       });

       it('it\'s column name is center', function() {
         expect(view.get('columnClass')).toBe('rightColumn');
       });
     });
   });

   describe('#rowClass', function() {
     beforeEach(function() {
       cell = TicTacToe.Cell.create();
       view = TicTacToe.CellView.create({content: cell});
     });

     describe('when it is in the first row', function() {
       beforeEach(function() {
         cell.set('row', 1);
       });

       it('it\'s row name is top', function() {
         expect(view.get('rowClass')).toBe('topRow');
       });
     });

     describe('when it is in the second row', function() {
       beforeEach(function() {
         cell.set('row', 2);
       });

       it('it\'s row name is middle', function() {
         expect(view.get('rowClass')).toBe('middleRow');
       });
     });

     describe('when it is in the third row', function() {
       beforeEach(function() {
         cell.set('row', 3);
       });

       it('it\'s row name is center', function() {
         expect(view.get('rowClass')).toBe('bottomRow');
       });
     });
   });

  describe('#layout', function() {
    beforeEach(function() {
      cell = TicTacToe.Cell.create({column: 2, row: 2});
      view = TicTacToe.CellView.create({content: cell});
    });

    it('it\'s top is the row height * the number of it\'s rows - 1', function() {
      expect(view.get('layout').top).toBe(100);
    });

    it('it\'s left is the column width * the number it\'s row - 1', function() {
      expect(view.get('layout').left).toBe(100);
    });

    it('it\'s height is 100 px', function() {
      expect(view.get('layout').height).toBe(100);
    });

    it('it\'s width is 100px', function(){
      expect(view.get('layout').width).toBe(100);
    });
  });

  describe('#classNames', function() {
    beforeEach(function() {
      cell = TicTacToe.Cell.create({column: 2, row: 2});
      view = TicTacToe.CellView.create({content: cell});
    });

    it('has the class markerBox', function() {
      expect(view.get('classNames')).toContain('markerBox');
    });

    it('has the class sc-view', function(){
      expect(view.get('classNames')).toContain('sc-view');
    });

    it('has the appropriate row class', function() {
      expect(view.get('classNames')).toContain('middleRow');
    });

    it('has the appropriate cell class', function() {
      expect(view.get('classNames')).toContain('centerColumn');
    });
  });
});