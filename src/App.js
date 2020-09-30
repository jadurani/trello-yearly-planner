import React from 'react';
import './App.css';
import './bootstrap.css';

// import { auth } from './services/trello-api';

function App() {
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
