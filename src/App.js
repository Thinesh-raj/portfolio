
import { Route, Routes } from 'react-router';
import './App.css';
import Cover from './PORTFOLIO/cover';
import { BrowserRouter } from 'react-router-dom';
import Resume from './PORTFOLIO/resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
