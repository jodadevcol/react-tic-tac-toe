import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className='jd-board-cell'>
      {children}
    </div>
  )
}

const WINNER_COMBO = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

export function Board() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null no existe ganador
  // false existe un empate
  // true existe un ganador
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBO) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    return null
  }

  const checkTie = (boardToCheck) => {
    // revisamos si hay un empate
    // si no hay mas espacios en null
    // en el tablero
    return boardToCheck.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) setWinner(newWinner)
    else if (checkTie(newBoard)) setWinner(false)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <section className='jd-game'>
        <div className='container'>
          <h1 className='jd-game-title'>Tic Tac Toe</h1>

          <div className='jd-game-board'>
            {
              board.map((_, index) => {
                return (
                  <Square key={index} index={index} updateBoard={updateBoard}>
                    {board[index]}
                  </Square>
                )
              })
            }
          </div>

          <div className='jd-game-turn'>
            <span className={`jd-game-turn--sign ${turn === TURNS.X ? 'sign--active' : 'sign--hidden'}`}>X</span>
            <span className={`jd-game-turn--sign ${turn === TURNS.O ? 'sign--active' : 'sign--hidden'}`}>O</span>
            <span>Turn</span>
          </div>
        </div>
      </section>

      {
        winner !== null && (
          <aside>
            <h2>
              {
                winner === false
                  ? 'Empate'
                  : 'Gano'
              }
            </h2>

            <header>
              {
                winner && <Square>{winner}</Square>
              }
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </aside>
        )
      }
    </>
  )
}
