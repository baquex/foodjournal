import {
    LOGIN_USER,
    SELECT_DATE,
    HANDLE_LOGIN_INPUT,
    DRAW_CURRENT_MONTH,
    FILL_MONTH,
    CHANGE_MONTH,
    CALC_NEW_MONTH, 
    TOGGLE_MODAL
} from './actionTypes';

export const loginUser = (userInfo) =>{
    return {
        type: LOGIN_USER,
        payload: userInfo
    }
}

export const select_date = (dateSelected) => {
    return {
        type: SELECT_DATE,
        payload: dateSelected
    }
}

export const handle_login_input = (input) => {
    return {
        type: HANDLE_LOGIN_INPUT,
        payload: input
    }
}

export const draw_current_month = () => {
    return {
        type: DRAW_CURRENT_MONTH,
        payload: ''
    }
}

export const fill_month = () => {
    return {
        type: FILL_MONTH,
        payload: ''
    }
}

export const change_month = (direction) => {
    return {
        type: CHANGE_MONTH,
        payload: direction
    }
}

export const calc_new_month = () => {
    return {
        type: CALC_NEW_MONTH,
        payload: ''
    }
}

export const toggle_modal = () => {
    return {
        type: TOGGLE_MODAL,
        payload: ''
    }
}



