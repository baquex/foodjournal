import {
  LOGIN_USER, SELECT_DATE,HANDLE_LOGIN_INPUT,DRAW_CURRENT_MONTH,FILL_MONTH
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
			daysInMonth:'', 
			mes: []
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
		// case FILL_MONTH:
		// 	return fill_month(state);
		default: 
			return state
	}
}

function loginUser(state,action){
	console.log(`user logged in: ${JSON.stringify(state.login_data)}`);
	return {...state, login_data: {email:'',password:''}}
}

function select_date(state,action){
	console.log(`date selected: ${action.payload}`);
	return {...state}
}

function handle_login_input(state,action){
	console.log(action);
	return {...state, login_data: {...state.login_data, [action.payload.name]: action.payload.val}}
	
}

function draw_current_month(state){
	let date = new Date();
	let mesActual = date.getMonth(); //11
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

// function fill_month(state){
// 	let semana = [];
// 	let mes = [];
// 	let daysCount = 1;
// 	let fdp = state.initial_month.firstDayPosition; // 0 = Monday
// 	let daysInMonth = state.initial_month.daysInMonth; //either 30 or 31

	
// 	if (fdp === 6) fdp = -1;

// 	for (let i=0;i< (daysInMonth + fdp +1);i++){
// 		if (i <= fdp)
// 			semana.push(<td key={i} onClick={state.select_date}></td>)
// 		else {
// 				semana.push(<td key={i} onClick={state.select_date}>{daysCount}</td>)
// 				daysCount++;
// 			}
// 	}

// 	for (let x = 0; x<semana.length; x+=7){
// 		mes.push(
// 			<tr key={100+x}>
// 				{semana[x]}
// 				{semana[x+1]}
// 				{semana[x+2]}
// 				{semana[x+3]}
// 				{semana[x+4]}
// 				{semana[x+5]}
// 				{semana[x+6]}
// 			</tr>
// 		)
// 	}
	
// 		// this.setState({mes:[...mes]})
	
// 	return {...state,initial_month:{mes:[...mes]}}
// }

