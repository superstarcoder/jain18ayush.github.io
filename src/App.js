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
      <nav className="top-nav">
        <ul>
          <li><a href="#home" className="nav-button">Home</a></li>
          <li><a href="#staff" className="nav-button">Staff</a></li>
          <li><a href="#hall-of-fame" className="nav-button">Hall of Fame</a></li>
        </ul>
      </nav>
      <div className="home-wrapper">
        <img className="background-image" src={homeBackground} alt="students" />
        <div className="home-main">
          <h1>CS124Honors@Illinois</h1>
          <h2>
            Illinois' premier freshman honors className run by students, for students.
          </h2>
          <div className="home-buttons">
            <div className="button-1">
              <a href="https://docs.google.com/document/d/1n2d0JRMaVCfLawWKrEew9_tCFBK4SFZK-diKE3fH-4A/edit#heading=h.4jjz7jor04lz"
                target="_blank" rel="nooponer noreferrer">
                <button>S Y L L A B U S</button>
              </a>
            </div>
            <div className="button-2">
              <a href="https://youtu.be/Ke8JjtxjXYg?si=s_C8m2JTOU5OsxbJ" target="_blank" rel="nooponer noreferrer">
                <button>I N F O - V I D E O</button>
              </a>
            </div>
            <div className="button-3">
              <a href="https://www.youtube.com/playlist?list=PLezlz_6l_jm1Xx3KEluNr5NNycd_pkIBp" target="_blank" rel="nooponer noreferrer">
                <button>L E C T U R E S</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-section">
        <h1>Staff</h1>
        <StaffCarousel staffData={staffData} />
        <h1>Hall of Fame</h1>
        <HallOfFame hofData={hofData} />
      </div>
    </div>
  );
}

export default App;