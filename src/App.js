import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import AllBoards from "./components/AllBoards";
import AddBoard from "./components/AddBoard";
import "./App.css";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(undefined);
  const [isAddFormShowing, setIsAddFormShowing] = useState(false);

  const fetchBoardsData = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log(
          "The data we get back from the HTTP response:",
          response.data
        );
        setBoardsData(response.data);
      })
      .catch((error) => {
        console.log("Couldn't fetch board data");
        console.log(
          "Anything that isn't status code 2XX is an error:",
          error.response.status
        );
        console.log(
          "The data from response with an error:",
          error.response.data
        );
      });

    console.log("Inside fetchBoardsData");
    setBoardsData([]);
  };

  useEffect(() => {
    fetchBoardsData();
  }, []);

  const updateSelectedBoard = (selectedBoardId) => {
    console.log("In updateSelectedBoard");

    setSelectedBoard((oldBoard) => {
      for (const board of boardsData) {
        if (board.id === selectedBoardId) {
          console.log("updating...");
          return board;
        }
      }

      console.log("Couldn't find selected board!");
      return oldBoard;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      {<AllBoards boards={boardsData} selectABoard={updateSelectedBoard} />}
      {<AddBoard isAddFormShowing={isAddFormShowing} />}
      <Outlet />
    </div>
  );
}

export default App;
