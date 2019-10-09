import React,{Component} from 'react';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

// const login = ({loginUser,login_data,handle_login_input,register_user}) =>(
class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
			regToggle: false
		}
	}

	regToggle(){
		this.setState({
			regToggle: !this.state.regToggle
		},this.props.register_user);
	}

	render(){
		
		console.log(this.state.regToggle);
		return(


  <div className="container main-container mt-4 py-5">
  	<div className="row">
    	<div className="col-12 d-flex justify-content-center">
				<figure>
					<img src={ require('../../img/logo1.png')} alt='logo' />
				</figure>
			</div>
		</div>
		<div className="row">	
			<div className="col-12 d-flex justify-content-center">
				<Form>
					<Label className={`loginLbl ${this.state.regToggle ? "hidden":""}`}>Type your email and password</Label>
					<FormGroup>
						<Input type="email" name="email" id="email" placeholder="email" value={this.props.login_data.email} onChange={event => this.props.handle_login_input({name:event.target.name,val:event.target.value})}  />
					</FormGroup>

					{/* <FormGroup className={`${this.state.regToggle ? "hidden":""}`}>
						<Input type="text" name="fname" id="fname" placeholder="first name" value={this.props.}			/>
					</FormGroup> */}


					<FormGroup>
						<Input type="password" name="password" id="password" placeholder="password" value={this.props.login_data.pwd} onChange={event => this.props.handle_login_input({name:event.target.name,val:event.target.value})}/>
					</FormGroup>
					<FormGroup className="col-12 d-flex justify-content-center">
						<Link to="/calendar"><Button type="submit" onClick={this.props.loginUser}>Login</Button></Link>
						<Label className="loginLbl regLbl" onClick={this.regToggle.bind(this)}>Not registerd? <br/>click here</Label>
					</FormGroup>
				</Form>

			</div>
		</div>
	</div>

		)}}
// );

const mapStatetoProps = ({fjReducers}) => {
	const {loginUser,login_data,handle_login_input,register_user} = fjReducers;
	return {loginUser,login_data,handle_login_input,register_user}
}

export default connect(mapStatetoProps,actions)(Login);