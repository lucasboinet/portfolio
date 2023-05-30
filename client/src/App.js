import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Details from '@/pages/Details/Details';
import Homepage from '@/pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route exact path="/project/:id" element={<Details />} />
      <Route exact path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
