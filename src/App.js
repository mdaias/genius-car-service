import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">

      <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/registration' element={<Registration></Registration>}></Route>
        </Routes>
    </div>
  );
}

export default App;
