import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

//import components and views ehre
import Welcome from './views/Welcome';
// import Dashboard from './views/Dashboard';
import RSVP from './views/RSVP';
import GettingThere from './views/GettingThere';
import TheEvent from './views/TheEvent';
import WhereToStay from './views/WhereToStay';

import Header from './components/Header';


function App(props) {
  return (
    <div className="App">
      <Header/>
      {/* <SideNav/> */}
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/rsvp' element={<RSVP/>}/>
        {/* <Route path='/story' element={<Story/>}/> */}
        <Route path='/theEvent' element={<TheEvent/>}/>
        <Route path='/GettingThere' element={<GettingThere/>}/>
        <Route path='/WhereToStay' element={<WhereToStay/>}/>


      </Routes>
    </div>
  );
}

export default App;
