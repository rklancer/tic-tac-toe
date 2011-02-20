TicTacToe.Game = SC.Object.extend({

  markCell: function(cell, player) {
    if(cell.get('belongsToPlayer') == undefined){
      cell.set('belongsToPlayer', player);
      return YES;
    } else {
      return NO;
    }
  }

});

TicTacToe.Game.createNewGame = function() {
  var newGame = TicTacToe.Game.create({cells: []});
  for(var row = 1; row <= 3; row++) {
    for(var col = 1; col <= 3; col++) {
      newGame.get('cells').pushObject(TicTacToe.Cell.create({row: row, column: col}));
    }
  }
  return newGame;
};