TicTacToe = SC.Application.create({

  NAMESPACE: 'TicTacToe',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)
}) ;
