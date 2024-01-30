import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignUp/Signup';
import AuthDetail from './components/auth/AuthDetail/AuthDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthDetail/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
