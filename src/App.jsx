import {Custnavbar} from "./components/Custnav/Custnavbar.jsx";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import {Header} from './components/Head/Header.jsx';
import Me from './components/About/Aboutme.jsx';
// import {Services} from './components/Service/Services.jsx';
import {Tool} from './components/Tools/Tool.jsx';

function App() {
  return (
    <Router>       
        <Custnavbar/>
            <Routes>
              <Route exact path='/' element={<Header/>} />
              <Route path='/about' element={<Me/>} />
              {/* <Route path='/services' element={<Services/>} /> */}
              <Route path='/tool' element={<Tool/>} />
          </Routes> 
    </Router>    
  );
}

export default App;

