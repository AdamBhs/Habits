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

            <div className="dropdown-content">
              <a href="#">How to use DailyHabits</a>
              <a href="#">Why set goals</a>
              <a href="#">When to make notes</a>
              <a href="#">When to archive a goal</a>
            </div>
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
