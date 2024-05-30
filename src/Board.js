import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = ({ onWin }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isBlueNext, setIsBlueNext] = useState(true);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[index]) return;
    newSquares[index] = isBlueNext ? 'blue' : 'red';
    setSquares(newSquares);
    setIsBlueNext(!isBlueNext);
  };

  const winner = calculateWinner(squares);
  if (winner) {
    onWin(winner);
  }

  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; 
    }
  }
  if (squares.every(square => square !== null)) {
    return 'draw'; 
  }
  return null; 
};

export default Board;
