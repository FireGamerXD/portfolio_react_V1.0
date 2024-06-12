import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ContactPage } from './pages/contact/contact';
import { HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projets/projects';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/projets' element={<ProjectsPage/>} />
    </Routes>
    {/* <HomePage/>     */}
    </>

  );
}

export default App;
