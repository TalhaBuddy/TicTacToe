import React, { useState } from "react";

function TicTacToeGame() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winingBoxes, setWiningBoxes] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const winConditons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWin = () => {
    winConditons.map((param) => {
      if (
        board[param[0]] != "" &&
        board[param[0]] == board[param[1]] &&
        board[param[0]] == board[param[2]]
      ) {
        if (board[param[0]] == "X") {
          setXScore(xScore + 1);
        } else {
          setOScore(oScore + 1);
        }
        setWiningBoxes(param);
        setIsGameOver(true);
      }
    });
  };

  const handleOnClick = (index) => {
    // console.log("clicked", index);
    let square = board;

    if (isGameOver) return;
    if (board[index] == "") {
      if (isXTurn == true) {
        square[index] = "X";
        setIsXTurn(false);
      } else {
        square[index] = "O";
        setIsXTurn(true);
      }
    }

    setBoard([...square]);
    checkWin();
  };


  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setWiningBoxes([]);
    setIsGameOver(false);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Tic Tac Toe</h1>
        <div className="flex justify-between mb-4">
          <div className="text-lg font-semibold text-gray-800">X: {xScore}</div>
          <div className="text-lg font-semibold text-gray-800">O: {oScore}</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {board.map((cell, index) => {
            return (
              <button
                key={index}
                onClick={() => handleOnClick(index)}
                className={`${
                  winingBoxes[0] == index ||
                  winingBoxes[1] == index ||
                  (winingBoxes[2] == index && isGameOver)
                    ? "bg-green-500"
                    : ""
                } w-20 h-20 bg-gray-200 border border-gray-400 flex justify-center items-center text-2xl font-bold cursor-pointer hover:bg-gray-300`}
              >
                {cell}
              </button>
            );
          })}
        </div>
        <div className="text-center mb-4">
          <span className="text-lg text-gray-700"></span>
        </div>
        <div className="text-center">
          <button
          onClick={()=>resetGame()}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToeGame;
