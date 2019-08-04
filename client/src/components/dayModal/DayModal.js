import React, { Component } from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux';

class DayModal extends Component {
  constructor(props){
    super(props);
    this.state = { cSelected: [], 
                    mealType:'' 
                  }

    this.selectMealType = this.selectMealType.bind(this);
  }
  
  selectMealType(mealType) {
    this.setState({ mealType }); 
    // same as this.setState({mealType: mealType})
  }

  showForm(){
    this.setState({ formType: this.state.mealType })
  }

  toggle(){
    this.setState({ mealType: null, formType: null}, this.props.toggle_modal);    
  }

  render(){
    
  return(
    <div className={`modal ${this.props.modalToggle ? "": "hidden"} `}>
      <div className={`modal-content container ${!this.state.formType ? "": "hidden"} `}>
        <h3>What meal will you have?</h3>
        <ButtonGroup className="options">
          <Button color="primary" onClick={() => this.selectMealType("Breakfast")} active={this.state.mealType === "Breakfast"}>Breakfast</Button><br/>
          <Button color="primary" onClick={() => this.selectMealType("Lunch")} active={this.state.mealType === "Lunch"}>Lunch</Button><br/>
          <Button color="primary" onClick={() => this.selectMealType("Dinner")} active={this.state.mealType === "Dinner"}>Dinner</Button><br/>
          <Button color="primary" onClick={() => this.selectMealType("Snack")} active={this.state.mealType === "Snack"}>Snack</Button><br/>
        </ButtonGroup>
        <p>Selected: {this.state.mealType}</p>
        <div className="modal-btn">
          <Button className="nxt-btn" color="success" onClick={()=>this.showForm()}>Next</Button>
        </div>
      </div>
      <div className={`modal-content ${this.state.formType ? "": "hidden"} `}>
          <h1>Congrats, You are in the {`${this.state.formType}`} section!</h1>
          <div className="modal-btn">
            <Button color="success">Save</Button>
            <Button color="danger" onClick={()=>this.toggle()}>Cancel</Button>
          </div>
      </div>
      {/* <div className={`modal-content ${(this.state.formType === "Breakfast") ? "": "hidden"} `}>
          <h1>Congrats, You are in the Breakfast section!</h1>
        </div>
        */}
    </div>

  )}}


  const mapStatetoProps = ({fjReducers}) => {
    const {	toggle_modal,
            modalToggle } = fjReducers;
    return { toggle_modal,
            modalToggle}
  }

export default connect(mapStatetoProps,actions)(DayModal);