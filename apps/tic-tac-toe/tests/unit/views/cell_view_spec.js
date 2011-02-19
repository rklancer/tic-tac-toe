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
  });

  describe('#render', function() {
    var addClassSpy, context, addContentSpy;
    beforeEach(function() {
      context = {addClass: function() {}, push: function() {}};
      addClassSpy = spyOn(context, 'addClass');
      addContentSpy = spyOn(context, 'push');
    });

    describe('when it does not belong to player', function(){
      beforeEach(function() {
        cell = TicTacToe.Cell.create();
        view = TicTacToe.CellView.create({content: cell});

        view.render(context);
      });

      it('does not add any classes', function() {
        expect(addClassSpy).not.toHaveBeenCalled();
      });
    });

    describe('when it belongs to player 1', function() {
      beforeEach(function() {
        cell = TicTacToe.Cell.create({belongsToPlayer: 1});
        view = TicTacToe.CellView.create({content: cell});

        view.render(context);
      });

      it('adds the player1 class', function() {
        expect(addClassSpy).toHaveBeenCalledWith('player1');
      });

      it('adds an \'X\' to the cell', function() {
        expect(addContentSpy).toHaveBeenCalledWith('X');
      });
    });

    describe('when it belongs to player 2', function() {
      beforeEach(function() {
        cell = TicTacToe.Cell.create({belongsToPlayer: 2});
        view = TicTacToe.CellView.create({content: cell});

        view.render(context);
      });

      it('adds the player2 class', function() {
        expect(addClassSpy).toHaveBeenCalledWith('player2');
      });

      it('adds an \'O\' to the cell', function() {
        expect(addContentSpy).toHaveBeenCalledWith('O');
      });
    });
  });

  describe('#mouseEntered', function() {
    var currentCellSpy;
    beforeEach(function() {
      cell = TicTacToe.Cell.create();
      view = TicTacToe.CellView.create({content: cell});
      currentCellSpy = spyOn(TicTacToe.currentCellController, 'set');
      view.mouseEntered();
    });

    it('sets the current cell to be it\'s cell', function() {
      expect(currentCellSpy).toHaveBeenCalledWith('content', cell);
    });
  });

  describe('#mouseDown', function() {
    beforeEach(function() {
      cell = TicTacToe.Cell.create();
      view = TicTacToe.CellView.create({content: cell});
    });

    it('allows for event propagation to continue up the chain', function() {
      expect(view.mouseDown()).toBe(YES);
    });
  });


  describe('#mouseUp', function() {
    var markCellSpy;
    beforeEach(function() {
      cell = TicTacToe.Cell.create();
      view = TicTacToe.CellView.create({content: cell});
      markCellSpy = spyOn(TicTacToe.mainStatechart, 'sendEvent');

      view.mouseUp();
    });

    it('delegates to mark the cell', function() {
      expect(markCellSpy).toHaveBeenCalledWith('markCell');
    });
  });
});