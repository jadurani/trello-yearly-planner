import React from 'react';
import './App.css';
import './bootstrap.css';
const moment = window.moment;
// import { auth } from './services/trello-api';

function App() {


  const boards = [];
  const gratBoards = [];
  let quarterNum = 0;
  let activeBoardIdx = -1;

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

  for (let weekNum = 0; weekNum < 52; weekNum++) {
    const weekStart = moment('2021').week(weekNum + 1).day(1).format("MMMDD")
    const weekEnd = moment('2021').week(weekNum + 1).day(7).format("MMMDD")
    const listName = `${weekStart}-${weekEnd}`

    if (weekNum % 13 === 0) {
      quarterNum += 1;
      activeBoardIdx += 1;

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
        boards[activeBoardIdx].weekNames.push({
          name: listName,
          cards: []
        })
      });

      labelList.forEach(labelName => {
        boards[activeBoardIdx].weekNames[0].cards.push(labelName);
      });
    }

    gratBoards[activeBoardIdx].weekNames.push({
      name: listName,
      cards: []
    });
    boards[activeBoardIdx].weekNames.push({
      name: listName,
      cards: []
    });
  }

  console.log(boards);
  console.log(gratBoards);

  return (
    <div className="row vh-100 p-0 m-0">
      {/* FORMS */}
      <div className="col-md-6 p-0 d-flex flex-column justify-content-center align-items-center">
        <div>
          On the right is what will happen if you click the button below:
        </div>
        <button className="m-4">
          Button
        </button>
      </div>

      {/* PREVIEW */}
      <div className="section-preview col-md-6 p-0 d-flex flex-column">
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
        <div className="team-preview h-50 w-75 d-flex flex-column m-auto pr-3">
          <div className="team-name mt-3 ml-3">
            2021Life
          </div>
          <div className="team-body flex-grow-1 d-flex flex-wrap pt-2 pb-4 u-fancy-scrollbar">
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1-GoodStuff
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1-GoodStuff
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1-GoodStuff
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1
              </div>
            </div>
            <div className="board-tile p-2 mt-3 ml-3">
              <div className="board-tile-title">
                2021Q1-GoodStuff
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
