import React from 'react'
import { headerNavElemnets } from '../../utils/data'
import { Link, NavLink } from 'react-router-dom';
import closeImg from '../../assets/images/close@2x.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {headerNavElemnets.map((el, i) => {
            return (
              <li key={i}>
                <NavLink to={el.link} activeClassName="active">
                  <img src={el.img} alt="" />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header-center">
        <Link className="circle" to="/">
          My Cars
        </Link>
        <span className="circle-2">
          {new Date().getHours()}:{new Date().getMinutes()}
        </span>
      </div>
      <div className="header-last">
        <img src={closeImg} alt="Close" />
      </div>
    </header>
  );
}

export default Header
