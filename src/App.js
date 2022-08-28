import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Main from './Main';
import Register from './Register';


function App() {
  
return(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/register" element={<Register />}/>
  <Route path="/" element={<Home />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="/main/:id" element={<Main />}/>


  

  

  </Routes>
  </BrowserRouter>
  
  
  
  
  </>
);
}

export default App;
