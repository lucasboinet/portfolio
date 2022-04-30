import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Homepage from '@/pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
