import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Details from '@/pages/Details/Details';

function App() {
  return (
    <Routes>
      <Route exact path="/project/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
