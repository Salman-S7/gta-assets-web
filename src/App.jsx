import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './screens/home/Home';
import Layout from './screens/layout/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
