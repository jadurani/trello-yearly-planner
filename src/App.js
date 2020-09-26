import React from 'react';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="row vh-100 p-0 m-0">
      {/* FORMS */}
      <div className="col-md-6 p-0">
        {/* STEP 1 - INTRO */}
        <div>
          <h1>Trello Yearly Planner</h1>
          <div>
            1 - Create an organization for your year
          </div>
          <div>
            2 - Create boards for each quarter
          </div>
          <div>
            3 - Create lists for each week
          </div>
        </div>

        {/* STEP 2 - YEAR?? */}
        <div>
          Which year are you planning for?
        </div>

        {/* STEP 3 - Create boards */}
        <div>
          Create boards for each quarter
        </div>

        {/* STEP 4 - Create lists */}
        <div>
          Create lists for each week in a quarter
        </div>
      </div>

      {/* PREVIEW */}
      <div className="section-preview col-md-6 p-0 d-flex flex-column">
        {/* STEP 1 - INTRO */}
        {/* 1 - container*/}
        {/* <div className="team-preview h-50 w-75 d-flex flex-column m-auto p-3">
          <div class="team-name">
            Team Name!!
          </div>
          <div class="flex-grow-1 d-flex justify-content-center align-items-center">
            Your boards will appear here.
          </div>
        </div> */}

        {/* 2 - container */}
        {/* <div className="team-preview h-50 w-75 d-flex flex-column m-auto p-3">
          <div class="team-name">
            Team Name!!
          </div>
          <div class="flex-grow-1 d-flex flex-wrap">
            <div class="board-tile p-2 m-2">
              <div class="board-tile-title">
                2020Q4-GoodStuff
              </div>
            </div>
            <div class="board-tile p-2 m-2">
              <div class="board-tile-title">
                2020Q4-GoodStuff
              </div>
            </div>
          </div>
        </div> */}

        {/* 3 - container */}
        <div className="board-preview h-50 w-75 d-flex flex-column m-auto p-3">
          <div class="board-name">
            Board Name!!
          </div>
          <div class="flex-grow-1 d-flex py-2">
            <div class="list p-2 mr-2">
              <div class="list-title">
                Week 1
              </div>
              {/* card list container */}
              <div class="card-list my-2">
                <div class="card p-2 mb-2">
                  Card Item
                </div>
                <div class="card p-2 mb-2">
                  Card Item
                </div>
                <div class="card p-2 mb-2">
                  Card Item
                </div>
              </div>
            </div>
            <div class="list p-2 mr-2">
              <div class="list-title">
                Week 2
              </div>
              {/* card list container */}
              <div class="card-list my-2">
                <div class="card p-2">
                  Card Item
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
