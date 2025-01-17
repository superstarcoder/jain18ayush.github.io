// App.js
import './App.scss';
import homeBackground from './assets/home-background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import StaffCarousel from './components/StaffCarousel';
import HallOfFame from './components/HallOfFame';

function App() {
  const [staffData, setStaffData] = useState([]);
  const [hofData, setHofData] = useState([]);

  useEffect(() => {
    fetch('/staff.json')
      .then(response => response.json())
      .then(data => setStaffData(data.staff))
      .catch(error => console.error('Error fetching staff data:', error));

    fetch('/hof.json')
      .then(response => response.json())
      .then(data => setHofData(data.hof))
      .catch(error => console.error('Error fetching HOF data:', error));
  }, []);

  return (
    <div>
      <div className="home-wrapper">
        <img className="background-image" src={homeBackground} alt="students" />
        <div className="home-main">
          <h1>CS124Honors@Illinois</h1>
          <h2>
            Illinois' premier freshman honors class run by students, for students.
          </h2>
          <div className="home-buttons">
            <div className="button-1">
              <a href="https://docs.google.com/document/d/1n2d0JRMaVCfLawWKrEew9_tCFBK4SFZK-diKE3fH-4A/edit#heading=h.4jjz7jor04lz"
                target="_blank" rel="nooponer noreferrer">
                <button>Syllabus</button>
              </a>
            </div>
            <div className="button-2">
              <a href="https://www.youtube.com/watch?v=eIJvoSkfCGc" target="_blank" rel="nooponer noreferrer">
                <button>Info Video</button>
              </a>
            </div>
            <div className="button-3">
              <a href="https://www.youtube.com/playlist?list=PLezlz_6l_jm3UvP_Qx24KL8NqRanFIYDl" target="_blank" rel="nooponer noreferrer">
                <button>Lectures</button>
              </a>
            </div>
            {/* <div className="button-4">
              <a href="https://forms.gle/fVz1kz2xsXoiJP1N7" target="_blank" rel="nooponer noreferrer">
                <button>Enrollment Form</button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="blue-section">
        <h1>Staff</h1>
        <StaffCarousel staffData={staffData} />
        <h1 id='hof'>Hall of Fame</h1>
        <HallOfFame hofData={hofData} />
      </div>
    </div>
  );
}

export default App;