import React from 'react';
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

const login = ({loginUser}) =>(
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
					<Label className="loginLbl">Type your email and password</Label>
					<FormGroup>
						<Input type="email" name="email" id="email" placeholder="email" />
					</FormGroup>
					<FormGroup>
						<Input type="password" name="password" id="password" placeholder="password" />
					</FormGroup>
					<FormGroup className="col-12 d-flex justify-content-center">
						<Link to="/calendar"><Button type="submit" onClick={loginUser}>Login</Button></Link>
					</FormGroup>
				</Form>

			</div>
		</div>
	</div>
);

const mapStatetoProps = ({fjReducers}) => {
	const {loginUser} = fjReducers;
	return {loginUser}
}

export default connect(mapStatetoProps,actions)(login);