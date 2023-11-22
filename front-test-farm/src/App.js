import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FarmersPage from './component/FarmersPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/farmerspage" element={<FarmersPage />} />
      </Routes>
    </div>
  );
}

export default App;
