import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Contact from './pages/Contact';
import Menu from './pages/Menu';


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App
