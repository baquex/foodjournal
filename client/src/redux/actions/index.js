import {
    LOGIN_USER
} from './actionTypes';

export const loginUser = (userInfo) =>{
    return {
        type: LOGIN_USER,
        payload: userInfo
    }
}