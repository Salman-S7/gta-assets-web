import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './screens/home/Home';
import Layout from './screens/layout/Layout';
import SoldVehicles from './screens/sold-vehicles/SoldVehicles';
import Notification from './screens/notification/Notification';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sold" element={<SoldVehicles />} />
            <Route path="/notifications" element={<Notification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
