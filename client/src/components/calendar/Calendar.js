import React from 'react';
import Day from '../day/day';
import {Link} from 'react-router-dom';

const Calendar = () => (
  <div className="container main-container mt-4">
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
  <div className="row my-5 px-3">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Domingo</th>
          <th scope="col">Lunes</th>
          <th scope="col">Martes</th>
          <th scope="col">Miercoles</th>
          <th scope="col">Jueves</th>
          <th scope="col">Viernes</th>
          <th scope="col">Sabado</th>
        </tr>
      </thead>
      <tbody className="table-bordered">
          <Day />
          <Day />
          <Day />
          <Day />
      </tbody>
    </table>
  </div>
  </div>
)

export default Calendar;
