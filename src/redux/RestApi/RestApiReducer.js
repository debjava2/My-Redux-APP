import {BUY_CAKE,FETCH_USER} from '../actionConstant/cakeActionType'
const intitialState=[]
const restApiReducer =(state=intitialState,action)=>{
    const { type, payload } = action;
    switch(action.type){
        case FETCH_USER:
            return payload
         default: return  state
    }
}

export default restApiReducer