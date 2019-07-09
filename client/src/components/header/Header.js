import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
  <div>
  <div className="row">
    <div className="col-12">
      <img className="logo" src={ require('../../img/logo1.png')} alt="logo"/>
    </div>
  </div>
  <div className="row">
    <div className="col-12 d-flex justify-content-end">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">Calendar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <span className="nav-link"><Link to='/'>LogOut</Link></span>
        </li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Header;