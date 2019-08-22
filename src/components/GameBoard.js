import React, { Component } from 'react'

export class GameBoard extends Component {
  state = {
    board: [['', '', ''], ['', '', ''], ['', '', '']],
    currentPlayer: 'O'
  }

  cellClicked = (x, y) => {
    console.log('clicked', x, y)
    // if (the selected square has something)
    if (!this.state.board[x][y]) {
      // don't do the turn
      // TODO: toggle the turn
      const _board = this.state.board
      _board[x][y] = this.state.currentPlayer
      const nextPlayer = this.state.currentPlayer === 'O' ? 'X' : 'O'
      this.setState({
        board: _board,
        currentPlayer: nextPlayer
      })
    }
  }

  reset = () => {
    this.setState({
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      currentPlayer: 'O'
    })
  }

  render() {
    return (
      <>
        <h1>Tic Tac Toe!</h1>
        <button onClick={this.reset}>Reset</button>
        <main>
          <table>
            <tbody>
              {this.state.board.map((col, i) => {
                return (
                  <tr key={i}>
                    {col.map((row, j) => {
                      return (
                        <td key={j} onClick={() => this.cellClicked(i, j)}>
                          {this.state.board[i][j]}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </main>
      </>
    )
  }
}

export default GameBoard
