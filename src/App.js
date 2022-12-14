import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div id="app">
      <Home />
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<MainPage />} />
          <Route path='/lost' element={<Lost />} />
          <Route path='/found' element={<Found />} />
          <Route path='/items/:id' element={<Preview />} />
          <Route path='*' element={() => <Navigate to='/' />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
