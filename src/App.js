
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Read from './components/Read';
function App() {
  return (
    <div className="container">
      <Routes> 
<Route exact path='/' element={<Read/>}> </Route>
<Route exact path='/Create' element={<Create/>}> </Route>
<Route exact path='/edit' element={<Edit/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
