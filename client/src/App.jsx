
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Recommended from './Recommended';
import LegPage from './LegPage';
import ChestgPage from './ChestPage';
import ArmPage from './ArmPage';
import BackPage from './BackPage';


function App() {


  return (
    <div>
      <Router>
      <div className='Route'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recommended" element={<Recommended/>}/>
          <Route path='/leg' element={<LegPage/>}/>
          <Route path='/chest' element={<ChestgPage/>}/>
          <Route path='/arm' element={<ArmPage/>}/>
          <Route path='/back' element={<BackPage/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
