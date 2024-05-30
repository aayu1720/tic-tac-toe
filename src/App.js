import React, { useState, useEffect } from 'react';
import Board from './Board';
import './App.css';

const App = () => {
  const [blueScore, setBlueScore] = useState(() => {
    const saved = localStorage.getItem('blueScore');
    return saved !== null ? JSON.parse(saved) : 0;
  });
  const [redScore, setRedScore] = useState(() => {
    const saved = localStorage.getItem('redScore');
    return saved !== null ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('blueScore', blueScore);
  }, [blueScore]);

  useEffect(() => {
    localStorage.setItem('redScore', redScore);
  }, [redScore]);

  const handleWin = (winner) => {
    if (winner === 'blue') {
      setBlueScore(blueScore + 1);
    } else if (winner === 'red') {
      setRedScore(redScore + 1);
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="scoreboard">
        <div>Blue: {blueScore}</div>
        <div>Red: {redScore}</div>
      </div>
      <Board onWin={handleWin} />
    </div>
  );
};

export default App;
