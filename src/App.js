import React from 'react';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div class="row">
      {/* FORMS */}
      <div class="col-md-6">
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
      <div class="col-md-6">
        {/* STEP 1 - INTRO */}
        <div>
          {/* 1 - container*/}
          <div>
            <div>
              title here
            </div>
            <div>
              Your boards will appear here.
            </div>
          </div>

          {/* 2 */}
          <div>
            <div>
              title here
            </div>
            <div>
              Board item previews
            </div>
          </div>

          {/* 3 */}
          <div>
            <div>
              title here
            </div>
            <div>
              board here -- horizontal scrollable
            </div>
          </div>
        </div>

        {/* STEP 2 - YEAR?? */}
        <div>
          {/* preview in 1.1 */}
          <div>
            <div>
              title here
            </div>
            <div>
              Your boards will appear here.
            </div>
          </div>
        </div>

        {/* STEP 3 - Create boards */}
        <div>
          {/* preview in 1.2 */}
          <div>
            <div>
              title here
            </div>
            <div>
              Your boards will appear here.
            </div>
          </div>
        </div>

        {/* STEP 4 - Create lists */}
        <div>
          {/* preview in 1.3 */}
          <div>
            <div>
              title here
            </div>
            <div>
              board here -- horizontal scrollable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
