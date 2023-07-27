
import './App.css';
import { routePath } from './constants/route';
import CategoryMovies from './pages/CategoryMovies';

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>} />
        <Route path={routePath.categories} element={<CategoryMovies/>}/>
        <Route path={routePath.invalid} element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
