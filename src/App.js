
import { Route, Routes } from 'react-router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainpage from './portfolio2/Mainpage';
import Page from './portfolio2/Page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/page/:page" element={<Page/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
