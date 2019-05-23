import React, {Component} from 'react';
import Day from '../day/day';
import { Table } from 'reactstrap';
import {Link} from 'react-router-dom';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux';
import '../../css/calendar.css'

class Calendar extends Component {
	constructor(props){
		super(props);

		this.firstDayPosition = this.props.initial_month.firstDayPosition;
		this.daysInMonth = this.props.initial_month.daysInMonth;

		this.state = {
			mes: [],
			firstDayPosition: '' ,
			daysInMonth: ''
		};
	}

	componentDidMount(){

		//SETS INITIAL VARIABLES FOR CURRENT MONTH
		this.props.draw_current_month();
			
		this.setState({
			firstDayPosition: this.firstDayPosition,
			daysInMonth: this.daysInMonth 
		},this.fillMonth);
	
	}
	
	fillMonth() {
		let semana = [];
		let mes = [];
		let daysCount = 1;
		let fdp = this.props.initial_month.firstDayPosition; // 0 = Monday
		let daysInMonth = this.props.initial_month.daysInMonth;  //either 30 or 31

		console.log(`fdp and dayInM ${fdp}  **  ${daysInMonth}`);
		
		
		if (fdp === 6) fdp = -1;

		for (let i=0;i< (daysInMonth + fdp +1);i++){
			if (i <= fdp)
				semana.push(<td key={i} onClick={this.props.select_date}></td>)
			else {
					semana.push(<td key={i} onClick={this.props.select_date}>{daysCount}</td>)
					daysCount++;
				}
		}

		for (let x = 0; x<semana.length; x+=7){
			mes.push(
				<tr key={100+x}>
					{semana[x]}
					{semana[x+1]}
					{semana[x+2]}
					{semana[x+3]}
					{semana[x+4]}
					{semana[x+5]}
					{semana[x+6]}
				</tr>
			)
		}
		
		 this.setState({mes:[...mes]})
		
		return mes
	}

	changeMonth(direction){
		let dir = direction;
		let mesActual = this.state.mesActual;
		let yr = this.state.yr;
		
		if (dir === 'left'){
			if (this.state.mesActual === 0)
				this.setState({mesActual: 11, yr: yr-1},calc_fdp_dim)
			else
				this.setState({mesActual: mesActual-1},calc_fdp_dim)
		}
		else if (dir === 'right'){
			if (this.state.mesActual === 11)
				this.setState({mesActual: 0, yr: yr+1},calc_fdp_dim)
			else
				this.setState({mesActual: mesActual+1},calc_fdp_dim)
		}

	
		function calc_fdp_dim (){	
			let fdp = new Date(this.state.yr,this.state.mesActual,0).getDay(); // 0 = Monday
			let daysInMonth = 32 - new Date(this.state.yr,this.state.mesActual,32).getDate(); //either 30 or 31
			this.setState({firstDayPosition: fdp, daysInMonth: daysInMonth},this.fillMonth);
		}
	}

	render(){		

		console.log(this.props.initial_month);
		// console.log(this.state);
		
		
	return(
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
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <i className="fas fa-arrow-circle-left arrows" onClick={()=>this.changeMonth('left')}></i>
          <h2 className="text-center d-inline-block mes-arrows">{this.props.meses[this.props.initial_month.mesActual]}</h2>
          <span className="yr-nxt-to-month">{this.props.initial_month.yr}</span>
          <i className="fas fa-arrow-circle-right arrows" onClick={()=>this.changeMonth('right')}></i>
        </div>
      </div>
			
			<div className="row">
				<div className="col-12">
					<Table bordered>
						<thead>
							<tr>
								<th>Sunday</th>
								<th>Monday</th>
								<th>Tuesday</th>
								<th>Wednesday</th>
								<th>Thursday</th>
								<th>Friday</th>
								<th>Saturday</th>
							</tr>
						</thead>
						<tbody>
							{	
								this.state.mes
							}
						</tbody>
					</Table>
				</div>
				</div>
			</div>
   
    )
  }}

  const mapStatetoProps = ({fjReducers}) => {
		const {select_date,
					meses,
					draw_current_month,
					initial_month,
					fill_month} = fjReducers;
		return {select_date,
					meses,
					draw_current_month,
					initial_month,
					fill_month}
  }
  
  export default connect(mapStatetoProps,actions)(Calendar);