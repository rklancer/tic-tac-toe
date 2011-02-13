TicTacToe.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'gameBoard'.w(),

    gameBoard: TicTacToe.GameBoardView.design({

    })
  })
});
