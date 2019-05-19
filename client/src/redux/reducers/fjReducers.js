import {
  LOGIN_USER
} from '../actions/actionTypes';

const INITIAL_STATE = {
	fecha: '',
	desayuno: {
			entrada: '', 
			principal: '', 
			postre: '', 
			drink: '',
			extra: ''
	}, 
	comida: {
			entrada: '', 
			principal: '', 
			postre: '', 
			drink: '',
			extra: ''
	},
	cena: {
			entrada: '', 
			principal: '', 
			postre: '', 
			drink: '',
			extra: ''
	},
	colacion:[ {
		hora: '',
		items: ''
	}]
};

export default (state = INITIAL_STATE, action) =>{
	switch (action.type) {
		case LOGIN_USER:
			return loginUser(state,action);
		default: 
			return state
	}
}

function loginUser(){
	console.log('user has loged in');
	return true
}