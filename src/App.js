
import './App.css';
import './designProject.css'
import './aboutdeshgin.scss'
import RoutePage from './Route';
import { Link } from 'react-router-dom';


function App() {
  
   
  return (

    <div className="App">

      <div className='aaa navBar'>
        <Link to="/loginemlpoyee" className='a'>
          <img src={'images/user.png'} className=' imgLogin' alt='login' />
        </Link>
        <Link to="/Manager/EnterManager" className=' linkPro'>מנהל</Link>
        <Link to="/about" className='linkPro'>אודות </Link>

        <Link to="/old" className='linkPro'>קשיש חדש</Link>
        <Link to="/emlpoyee" className='linkPro'>עובד חדש</Link>

        <img src={'/images/imageLogo.png'} alt="logo" className='imgLogo' />
      </div>



      <RoutePage />

    </div>
  );
}

export default App;
