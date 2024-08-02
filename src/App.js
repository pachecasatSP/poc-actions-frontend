import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout  from './pages/Layout/Layout';
import Forecast from './pages/weatherforecast/forecast';

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='weatherforecast' element={<Forecast/>}/>
        </Routes>
      </BrowserRouter>
    );

}

export default App;
