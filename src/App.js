import React, { useState } from 'react';
import './App.css';
import './bootstrap.css';
const moment = window.moment;
// import { auth } from './services/trello-api';

function App() {

  let [activeBoardIdx, setActiveBoardIdx] = useState(-1);

  const boards = [];
  const gratBoards = [];
  let quarterNum = 0;
  let currentBoardIdx = -1;

  const labelList = [
    {
      color: "green",
      name: "Self-Development / Health / Fitness",
      hexCode: "#61bd4f",
    },
    {
      color: "yellow",
      name: "Work",
      hexCode: "#f2d600",
    },
    {
      color: "red",
      hexCode: "#eb5a46",
      name: "Self-Development",
    },
    {
      color: "purple",
      name: "Causes",
      hexCode: "#c377e0",
    },
    {
      color: "blue",
      name: "Socials",
      hexCode: "#0079bf",
    },
    {
      color: "sky",
      name: "Hobbies",
      hexCode: "#00c2e0",
    },
    {
      color: "black",
      name: "Chores",
      hexCode: "#344563",
    }
  ];

  const listNames = [
    "Labels",
    "Won't Do",
    "Backlog",
    "Ongoing (long-term)",
    "Doing today",
    "Doing now"
  ]

  const ALL_BOARDS = []
  for (let weekNum = 0; weekNum < 52; weekNum++) {
    const weekStart = moment('2021').week(weekNum + 1).day(1).format("MMMDD")
    const weekEnd = moment('2021').week(weekNum + 1).day(7).format("MMMDD")
    const listName = `${weekStart}-${weekEnd}`

    if (weekNum % 13 === 0) {
      quarterNum += 1;
      currentBoardIdx += 1;

      let boardName = `2021Q${quarterNum}`;
      gratBoards.push({
        name: `${boardName}-Gratitude`,
        weekNames: []
      });

      boards.push({
        name: boardName,
        weekNames: []
      });

      listNames.forEach(listName => {
        boards[currentBoardIdx].weekNames.push({
          name: listName,
          cards: []
        })
      });

      labelList.forEach(labelName => {
        boards[currentBoardIdx].weekNames[0].cards.push(labelName);
      });
    }

    gratBoards[currentBoardIdx].weekNames.push({
      name: listName,
      cards: []
    });
    boards[currentBoardIdx].weekNames.push({
      name: listName,
      cards: []
    });
  }

  boards.forEach((board, index) => {
    ALL_BOARDS.push(board)
    ALL_BOARDS.push(gratBoards[index]);
  })

  console.log(boards);
  console.log(gratBoards);
  console.log(ALL_BOARDS);

  const openBoard = (selectedBoardIdx) => {
    console.log(selectedBoardIdx);
    setActiveBoardIdx(selectedBoardIdx);
  }


  return (
    <div className="row vh-100 p-0 m-0">
      {/* FORMS */}
      {/* <div className="col-md-6 p-0 d-flex flex-column justify-content-center align-items-center">
        <div>
          On the right is what will happen if you click the button below:
        </div>
        <button className="m-4">
          Button
        </button>
      </div> */}

      {/* PREVIEW */}
      {/* <div className="section-preview col-md-6 p-0 d-flex flex-column"> */}

        <div className="section-preview col-12 p-0 d-flex flex-column">
          {/* STEP 1 - INTRO */}
          {/* 1 - container*/}
          {/* <div className="team-preview h-50 w-75 d-flex flex-column m-auto p-3">
            <div className="team-name">
              Team Name!!
            </div>
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
              Your boards will appear here.
            </div>
          </div> */}

          {/* 2 - container */}
          { activeBoardIdx === -1 &&
            <div className="team-preview h-50 w-75 d-flex flex-column m-auto pr-3">
              <div className="team-name mt-3 ml-3">
                2021Life
              </div>
              {
                <div className="team-body flex-grow-1 d-flex flex-wrap pt-2 pb-4 u-fancy-scrollbar">
                  {
                    ALL_BOARDS.map((board, index) => (
                      <div key={`board-${index}`} className="board-tile p-2 mt-3 ml-3" onClick={() => openBoard(index)}>
                        <div className="board-tile-title">
                          {board.name}
                        </div>
                      </div>
                    ))
                  }
                </div>
              }
            </div>
          }


          {
            activeBoardIdx > -1  &&
            <div className="board-preview h-50 w-75 d-flex flex-column m-auto">
            {/* 3 - container */}
              <div className="board-name p-3">
                { ALL_BOARDS[activeBoardIdx].name }
              </div>
              <div className="board-body flex-grow-1 d-flex pt-2 pb-4 u-fancy-scrollbar">
                <div className="list p-2 ml-3 mr-2 d-flex flex-column">
                  <div className="list-title">
                    Week 1
                  </div>
                  {/* card list container */}
                  <div className="card-list flex-grow-1 my-2 u-fancy-scrollbar">
                    <div className="card p-2 mb-2">
                      Card Item
                    </div>
                    <div className="card p-2 mb-2">
                      Card Item
                    </div>
                    <div className="card p-2 mb-2">
                      Card Item
                    </div>
                    <div className="card p-2 mb-2">
                      Card Item
                    </div>
                    <div className="card p-2 mb-2">
                      Card Item
                    </div>
                    <div className="card p-2 mb-2">
                      Card Item
                    </div>
                  </div>
                </div>
                <div className="list p-2 mr-2">
                  <div className="list-title">
                    Week 2
                  </div>
                  {/* card list container */}
                  <div className="card-list my-2">
                    <div className="card p-2">
                      Card Item
                    </div>
                  </div>
                </div>
                <div className="list p-2 mr-4 u-fancy-scrollbar">
                  <div className="list-title">
                    Week 2
                  </div>
                  {/* card list container */}
                  <div className="card-list my-2">
                    <div className="card p-2">
                      Card Item
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
      </div>
    </div>
  );
}

export default App;
