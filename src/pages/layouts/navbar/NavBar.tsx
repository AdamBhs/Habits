import "./navStyle.css";
import { FaAngleDown, FaMoon } from 'react-icons/fa6';

export default function NavBar() {
  return (
    <nav>
        <div className='icon'>
          <h1>DailyHabits</h1>
          <div className="how-it-work">
            <h5>How it works</h5>
            <FaAngleDown />
          </div>
        </div>

        <div className='mail-dark'>
          <FaMoon />
          <div className="mail">
            <p>adem.bnHassine@gmail.com</p>
            <FaAngleDown />
          </div>
        </div>
    </nav>
  )
}
