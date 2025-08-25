// src/App.js
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://cs124h.vercel.app/"; // target site
  }, []);

  return (
    <div>
      <p>Redirecting... If not, <a href="https://cs124h.vercel.app/">click here</a>.</p>
    </div>
  );
}

export default App;