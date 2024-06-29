/* eslint-disable react/prop-types */
// import { useState } from 'react'

import { useState } from "react"



function Square({value,onSquareClick}){
  return (
  <button className="square" onClick={onSquareClick}>
  {value}
  </button>
  );
}



function Board() {
  

  function handleClick(i){
    if (squares[i] || calculatewinner(squares)) return;

    const nextSquares = squares.slice();

    if (xIsNext){
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setxIsNext(!xIsNext);
  }       



  const winner = calculatewinner(squares);
  let status = '';
  if (winner) {
    status = 'Winner: ' + winner;
  }else{
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }


  return (
    <>
    <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default function Game(){
  const [xIsNext,setxIsNext] = useState(true);
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.lenght - 1];

  functio

  return (
    <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <ol>{/* todo */}</ol>
    </div>

    </div>
  )
}

function calculatewinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i< lines.length; i++){
    const [a,b,c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[c]){
      return squares[a];
    }
  }

  return false;
}


