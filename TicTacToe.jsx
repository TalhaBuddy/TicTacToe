import React, { useState } from "react";

function TicTacToeGame() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winingBoxes, setWiningBoxes] = useState([]);
  const [isGameOver, setIsGameOver] = useState(true);
  const [PlayerOneName, setPlayerOneName] = useState("X")
  const [PlayerTwoName, setPlayerTwoName] = useState("O")
  const [status, setStatus] = useState("")

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
        setStatus(PlayerOneName[0].toLocaleLowerCase()+ ' Win')

        } else {
          setOScore(oScore + 1);
        setStatus(PlayerTwoName[0].toLocaleLowerCase() + ' Win')
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
        square[index] = PlayerOneName[0].toLocaleUpperCase();
        setIsXTurn(false);
      } else {
        square[index] = PlayerTwoName[0].toLocaleUpperCase();
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
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Tic Tac Toe</h1>
        <div className="mb-3">
          <input
          value={PlayerOneName}
          onChange={(e)=>setPlayerOneName(e.target.value)}
          type="text"
          readOnly={isGameOver ?  "" : "readonly" }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Player One Name"
          required
          />
          <input
          readOnly={isGameOver ?  "" : "readonly" }
          value={PlayerTwoName}
          onChange={(e)=>setPlayerTwoName(e.target.value)}
            type="text"
            className=" mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Player Two Name"
            required
          />
        </div>
        <div className="flex justify-between mb-0">
          <div className="text-lg font-semibold text-gray-800">{PlayerOneName[0].toLocaleUpperCase()}: {xScore}</div>
          <div className="text-lg font-semibold text-gray-800">{PlayerTwoName[0].toLocaleUpperCase()}: {oScore}</div>
        </div>

        <h2 className="font-bold mb-2 text-black text-center uppercase">
          {status == "" ? `Player ${isXTurn? PlayerOneName[0]: PlayerTwoName[0]} Turn` : status}
        </h2>
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
            onClick={() => resetGame()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isGameOver ? `Start` : `Restart`} Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToeGame;
