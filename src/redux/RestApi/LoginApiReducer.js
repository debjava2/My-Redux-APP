import {LOGIN_USER} from '../actionConstant/cakeActionType'
const intitialState=""
const LoginApiReducer =(state=intitialState,action)=>{
    const { type, payload } = action;
    switch(action.type){
        case LOGIN_USER:
            return payload
         default: return  state
    }
}

export default LoginApiReducer