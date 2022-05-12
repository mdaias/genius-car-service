import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Checkout from './pages/Checkout/Checkout';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import NotFound from './pages/Shared/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import AddService from './pages/AddService/AddService';
import ManageServices from './pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}>
        </Route>

        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>}>
        </Route>

        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>}>
        </Route>             

        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>

        <Route path='/about' element={<About></About>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
