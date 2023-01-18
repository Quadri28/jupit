import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='' element={<Home/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
