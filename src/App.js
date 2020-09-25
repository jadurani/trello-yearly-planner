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
        <div className="board-preview h-50 w-50 m-auto p-3">
          <div>
            title here
          </div>
          <div>
            Your boards will appear here.
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
