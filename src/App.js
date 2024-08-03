import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/SideBar';
import {PurpleButton, LightGreenButton} from './components/buttons/Button'
import Card from './components/Card/Card'



function App() {
  return (
    
    <>
    {/* <Navbar/> */}
    <Sidebar/>
    <PurpleButton/>
    <LightGreenButton/>
    <Card/>
    </>
  );

}

export default App;
