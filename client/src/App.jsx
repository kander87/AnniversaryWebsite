import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, useLocation } from 'react-router-dom';

//import components and views ehre
import Welcome from './views/Welcome';
import RSVP from './views/RSVP';
import GettingThere from './views/GettingThere';
import TheEvent from './views/TheEvent';
import WhereToStay from './views/WhereToStay';
import Header from './components/Header';
import Footer from './components/Footer';
import TopNav from './components/TopNav';


function App(props) {

  const location = useLocation();
  const pathsToHideNavbar = ['/', '//'];
  const shouldHideNavbar = pathsToHideNavbar.includes(location.pathname);
  const pathsToHideFooter = ['/', '//'];
  const shouldHideFooter = pathsToHideFooter.includes(location.pathname);


  return (
    <div className="App">
      <Header />
      {!shouldHideNavbar && <TopNav />}
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/rsvp' element={<RSVP />} />
        {/* <Route path='/story' element={<Story/>}/> */}
        <Route path='/theEvent' element={<TheEvent />} />
        <Route path='/GettingThere' element={<GettingThere />} />
        <Route path='/WhereToStay' element={<WhereToStay />} />

      </Routes>
      <div>
        {!shouldHideFooter && <Footer />}
      </div>

    </div>
  );
}

export default App;
