import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/games" element={<Games />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
