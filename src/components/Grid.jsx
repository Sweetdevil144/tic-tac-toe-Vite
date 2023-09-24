import Button from "./Button";
import { useState } from "react";

const Grid = () => {
  const [player, setPlayer] = useState("o");
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const patterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];

  const checkForWin = (grid) => {
    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];
      if (grid[Math.floor((a - 1) / 3)][(a - 1) % 3] !== "") {
        if (
          grid[Math.floor((a - 1) / 3)][(a - 1) % 3] ===
            grid[Math.floor((b - 1) / 3)][(b - 1) % 3] &&
          grid[Math.floor((a - 1) / 3)][(a - 1) % 3] ===
            grid[Math.floor((c - 1) / 3)][(c - 1) % 3]
        ) {
          return grid[Math.floor((a - 1) / 3)][(a - 1) % 3];
        }
      }
    }
    return "";
  };

  const checkForDraw = (grid) => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  };

  const handleClick = (i, j) => {
    if (!gameOver) {
      const newGrid = [...grid];
      if (newGrid[i][j] === "") {
        newGrid[i][j] = player;
        setPlayer(player === "o" ? "x" : "o");
        setGrid(newGrid);
        const winner = checkForWin(newGrid);
        if (winner) {
          setGameOver(true);
          setMessage(`${winner} wins!`);
        } else if (checkForDraw(newGrid)) {
          setGameOver(true);
          setMessage("It's a draw!");
        }
      }
    }
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <Button
              key={cellIndex}
              button={cell}
              onClick={() => handleClick(rowIndex, cellIndex)}
            />
          ))}
        </div>
      ))}
      {gameOver && (
        <div className="win">
          <h1>{message}</h1>
        </div>
      )}
    </div>
  );
};

Grid.displayName = "Grid";

export default Grid;