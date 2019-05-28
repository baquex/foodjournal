import {
  LOGIN_USER, SELECT_DATE,HANDLE_LOGIN_INPUT,DRAW_CURRENT_MONTH,CHANGE_MONTH,CALC_NEW_MONTH
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
	}],
	meses: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
	login_data:{
		email:'',
		password:''
	},
	initial_month:{
		mesActual:'',
		yr:'',
		firstDayPosition:'',
		daysInMonth:''
	}
};

export default (state = INITIAL_STATE, action) =>{
	switch (action.type) {
		case LOGIN_USER:
			return loginUser(state,action);
		case SELECT_DATE: 
			return select_date(state,action);
		case HANDLE_LOGIN_INPUT:
			return handle_login_input(state,action);
		case DRAW_CURRENT_MONTH:
			return draw_current_month(state);
		case CHANGE_MONTH:
			return change_month(state,action);
		case CALC_NEW_MONTH:
			return calc_new_month(state);
		default: 
			return state
	}
}

function loginUser(state,action){
	console.log(`user logged in: ${JSON.stringify(state.login_data)}`);
	return {...state, login_data: {email:'',password:''}}
}

function select_date(state,action){
	console.log(`date selected: ${action.payload},${state.meses[state.initial_month.mesActual]},${state.initial_month.yr} `);
	return {...state}
}

function handle_login_input(state,action){
	console.log(action);
	return {...state, login_data: {...state.login_data, [action.payload.name]: action.payload.val}}
	
}

function draw_current_month(state){
	let date = new Date();
	let mesActual = date.getMonth(); //0-11
	let yr = date.getFullYear();
	let firstDayPosition = new Date(yr,mesActual,0).getDay(); // 0 = Monday
	let daysInMonth = 32 - new Date(yr,mesActual,32).getDate(); //either 30 or 31

	return {...state, initial_month:{
		mesActual: mesActual,
		yr: yr,
		firstDayPosition: firstDayPosition,
		daysInMonth: daysInMonth
	}}
}

function change_month(state,action){
	let dir = action.payload;
	let mesActual = state.initial_month.mesActual;
	let yr = state.initial_month.yr;
	
	if (dir === 'left'){
		if (mesActual === 0)
			return {...state, initial_month: {...state.initial_month, mesActual: 11, yr: yr-1}}
		else
			return {...state, initial_month:{...state.initial_month, mesActual: mesActual-1}}
	}
	else if (dir === 'right'){
		if (mesActual === 11)
			return {...state,initial_month:{...state.initial_month, mesActual: 0, yr: yr+1}}
		else
			return {...state, initial_month: {...state.initial_month, mesActual: mesActual+1}}
	}
}

function calc_new_month (state){	
	let fdp = new Date(state.initial_month.yr,state.initial_month.mesActual,0).getDay(); // 0 = Monday
	let daysInMonth = 32 - new Date(state.initial_month.yr,state.initial_month.mesActual,32).getDate(); //either 30 or 31
	return {...state, initial_month:{...state.initial_month, firstDayPosition: fdp, daysInMonth: daysInMonth}}
}

