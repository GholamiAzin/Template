// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import {createContext, useState} from 'react'

export const logInData = createContext({logedInUser:{},setLogedInUser:()=>{}})
function App() {
  const [logedInUser, setLogedInUser] = useState({})

  return (
    <logInData.Provider value={{logedInUser,setLogedInUser}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
      </Routes>
      
      {/* <img src={'./assets/Images/image-1.png'}/> */}
      {/* <img src={ require('./assets/Images/image-1.png') } /> */}
    </BrowserRouter>
    </logInData.Provider>
  );
}

export default App;
