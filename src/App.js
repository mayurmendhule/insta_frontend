import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_page from '../src/components/landingpages/Landing_page'
import Postview from './components/Postview'
import CreatePost from './components/newpost/CreatePost';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing_page/>} />
          <Route path="/Postview" element={<Postview />} />
          <Route path="/CreatePost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
