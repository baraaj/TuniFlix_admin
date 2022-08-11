
import Topbar from './components/topbar/Topbar';
import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
function App() {
  return (
   <BrowserRouter>
     <Topbar />
     <div className='container'>
      <Sidebar />
     <Routes>
        <Route exact path='/' element={<Home />} />
         
        <Route exact path='/users' element={<UserList />} />
        <Route exact path='/user/:userId' element={<User />} />
         
        </Routes>
    
    
     </div>
     </BrowserRouter>
    
  );
}

export default App;
