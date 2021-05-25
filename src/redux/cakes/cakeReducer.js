import {BUY_CAKE} from '../actionConstant/cakeActionType'
const instialState={
    numOfCakes:10
}

const cakeReducer=(state=instialState,action)=>{
switch(action.type){
    case BUY_CAKE:
        return {...state,numOfCakes:state.numOfCakes-1}
     default: return  state
}
}

export default cakeReducer