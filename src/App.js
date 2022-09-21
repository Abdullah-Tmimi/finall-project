import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from "./components/Home"

function App() {
  return (
    <>
     <Nav/>
     <Routes>
        <Route path='/' element={<Home />}/>
     </Routes>
    <Footer/>
    </>
  );
}

export default App;
