import logo from './logo.svg';
import './App.css';
import Slider from './sidlee';
import CustomSlider from './sidlee';
import Home from './pages/home';

import Header from './components/header';
import Footer1 from './components/footer1';
import Service from './pages/servicepage';
import Section1 from './components/section1';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Apply from './pages/applying/apply';
import Conatct from './pages/contact/conatct';
import ScrollToTop from './pages/scrollingpage/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // This will make the scroll smooth
    });
};
  return (
    <div className="App">
          
          <button onClick={scrollToTop} className="scroll-to-top-button">
            {/* Add your arrow icon here */}
            <FontAwesomeIcon icon={faUpLong}/>
        </button>
 
     <HashRouter>
      <ScrollToTop/>
     <Header/>
      <Routes>
        
       <Route path={'/'} element={<Home />}/>
        <Route path={'/Home/service'} element={<Service title={"طلب خدمة"} path={'/Home/service'}/>}/>
        <Route path={'/Home/applying'} element={<Apply />}/>
        <Route path={'/Home/contact'} element={<Conatct />}/>
        
       
       
      </Routes>
      <Footer1/>
     </HashRouter>
     

    </div>
  );
}

export default App;
