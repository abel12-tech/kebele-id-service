// App.js
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import User from './components/User';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<Admin />} />
       </Routes>
    </>
 );
};

export default App;