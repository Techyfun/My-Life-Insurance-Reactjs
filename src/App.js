import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import NotFound from './Pages/NotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/quotes' element={<Home2/>}/>
        <Route path='/quotes-reviews' element={<Home3/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
