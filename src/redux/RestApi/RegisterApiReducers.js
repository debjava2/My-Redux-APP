import {REGISTER_USER} from '../actionConstant/cakeActionType'
const intitialState=""
const registerApiReducer =(state=intitialState,action)=>{
    const { type, payload } = action;
    switch(action.type){
        case REGISTER_USER:
            return payload
         default: return  state
    }
}

export default registerApiReducer