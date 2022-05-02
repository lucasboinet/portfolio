import './App.scss';

<<<<<<< Updated upstream
function App() {
  return (
    <>
    </>
=======
import Homepage from '@/pages/Homepage/Homepage';
import Details from '@/pages/Details/Details';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/project/:id" element={<Details />} />
    </Routes>
>>>>>>> Stashed changes
  );
}

export default App;
