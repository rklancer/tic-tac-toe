describe('TicTacToe.Game', function() {
  var game;

  describe('.createNewGame', function() {
    beforeEach(function() {
      game = TicTacToe.Game.createNewGame();
    });

    it('creates the initial game board', function() {
      expect(game.get('cells').length).toBe(9);
    });
  });

  describe('#markCell', function() {
    var cell, setPlayerSpy, didMarkCell;

    describe('when the cell does not currently belong to a player', function() {
      beforeEach(function() {
        cell = {set: function() {}, get: function(attribute) {if(attribute == 'belongsToPlayer') return undefined;}};
        setPlayerSpy = spyOn(cell, 'set');
        game = TicTacToe.Game.create({cells: [cell]});

        didMarkCell = game.markCell(cell, 1);
      });

      it('tells the cell that it now belongs to the passed in player', function (){
        expect(setPlayerSpy).toHaveBeenCalledWith('belongsToPlayer', 1);
      });

      it('return YES, indicating that it did mark the cell', function() {
        expect(didMarkCell).toBe(YES);
      });
    });

    describe('when the cell currently belongs to a player', function() {
      beforeEach(function() {
        cell = {set: function() {}, get: function(attribute) {if(attribute == 'belongsToPlayer') return 1;}};
        setPlayerSpy = spyOn(cell, 'set');
        game = TicTacToe.Game.create({cells: [cell]});

        didMarkCell = game.markCell(cell, 1);
      });

      it('does not tell the cell that it now belongs to the passed in player', function (){
        expect(setPlayerSpy).not.toHaveBeenCalledWith('belongsToPlayer', 1);
      });

      it('return NO, indicating that it did not mark the cell', function() {
        expect(didMarkCell).toBe(NO);
      });
    });
  });
});