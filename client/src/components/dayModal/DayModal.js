import React, { Component } from 'react';
import {Button, ButtonGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
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
    console.log(`this is mealType: ${this.state.mealType}`);
    
  }

  cancelBtn(){
    this.setState({ mealType: null, formType: null}, this.props.toggle_modal);    
  }

  backBtn(){
    this.setState({formType: null})
  }

  render(){
    // console.log(`all meals: ${JSON.stringify(this.props.meals)}`);
        
  return(
    <div className={`modal ${this.props.modalToggle ? "": "hidden"} `}>
      <div className={`modal-content container ${!this.state.formType ? "": "hidden"} `}>
        <h3>What meal will you have?</h3>
        <ButtonGroup className="options">
          <Button color="primary" onClick={() => this.selectMealType("breakfast")} active={this.state.mealType === "breakfast"}>Breakfast</Button><br/>
          <Button color="primary" onClick={() => this.selectMealType("lunch")} active={this.state.mealType === "lunch"}>Lunch</Button><br/>
          <Button color="primary" onClick={() => this.selectMealType("dinner")} active={this.state.mealType === "dinner"}>Dinner</Button><br/>
          <Button color="primary" onClick={() => this.selectMealType("snack")} active={this.state.mealType === "snack"}>Snack</Button><br/>
        </ButtonGroup>
        <p>Selected: {this.state.mealType}</p>
        <div className="modal-btn">
          <Button className="modal-btn" color="success" onClick={()=>this.showForm()}>Next</Button>
          <Button className="modal-btn" color="danger" onClick={()=>this.cancelBtn()}>Cancel</Button>
        </div>
      </div>
      <div className={`modal-content container ${this.state.formType ? "": "hidden"} `}>
        <div className="row item-entry-form">
          <h2>What did you eat?</h2>
          <InputGroup>
            <Input type="text" name={this.state.formType} value={this.props.mealInput || ''} onChange={event => this.props.handleItemInput({name:event.target.name,val:event.target.value})} placeholder="Add an item"/>
            <InputGroupAddon addonType="append">
              <Button type="submit" color="success" onClick={this.props.addItem}>Add</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <hr/>
        <div>
          <ul>
            {
              this.state.mealType ? this.props.meals[this.state.mealType].map((item,index)=><li key={index}>{item}</li>) : null
            }
          </ul>  
        </div> 

        <div className="modal-btn center-btns">
          <Button className="modal-btn" color="info" onClick={()=>this.backBtn()}>Back</Button>
          <Button className="modal-btn" color="primary">Save</Button>
          <Button className="modal-btn" color="danger" onClick={()=>this.cancelBtn()}>Cancel</Button>
        </div>


      </div>
      
    </div>

  )}}


  const mapStatetoProps = ({fjReducers}) => {
    const {	toggle_modal,
            modalToggle,
            addItem,
            handleItemInput,
            mealInput,
            meals } = fjReducers;
    return { toggle_modal,
            modalToggle,
            addItem,
            handleItemInput,
            mealInput,
            meals}
  }

export default connect(mapStatetoProps,actions)(DayModal);