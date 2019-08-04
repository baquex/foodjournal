import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DayModal from '../dayModal/DayModal';
//import Day from '../day/day';
import { Table } from 'reactstrap';
import {Link} from 'react-router-dom';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux';
import '../../css/calendar.css';


class Calendar extends Component {
	constructor(props){
		super(props);

		this.firstDayPosition = this.props.initial_month.firstDayPosition;
		this.daysInMonth = this.props.initial_month.daysInMonth;

		this.state = {
			mes: [],
			firstDayPosition: '' ,
			daysInMonth: '',
			modalToggle: this.props.modalToggle
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
				semana.push(<td key={i}></td>)
			else {
					semana.push(<td key={i} onClick={(e)=>this.props.select_date(e.target.innerHTML)} name={daysCount} value={daysCount}>{daysCount}</td>)
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

		this.props.change_month(direction);
	
		this.props.calc_new_month();
		
		this.setState({
			firstDayPosition: this.props.initial_month.firstDayPosition,
			daysInMonth: this.props.initial_month.daysInMonth
		},this.fillMonth);
	}

	render(){		

		console.log(this.props.initial_month);
		console.log(`this is modalToggle: ${this.props.modalToggle}`);
		
		
		
	return(
    <div className="container main-container mt-4">
			<Header />
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
			<Footer />		
			<DayModal/>
		</div>
   
    )
  }}

  const mapStatetoProps = ({fjReducers}) => {
		const {select_date,
					meses,
					draw_current_month,
					initial_month,
					fill_month,
					change_month,
					calc_new_month,
					modalToggle } = fjReducers;
		return {select_date,
					meses,
					draw_current_month,
					initial_month,
					fill_month,
					change_month,
					calc_new_month,
					modalToggle}
  }
  
  export default connect(mapStatetoProps,actions)(Calendar);