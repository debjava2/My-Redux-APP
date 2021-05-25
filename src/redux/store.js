import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk'
import cakeReducer from './cakes/cakeReducer'
import restApi from './RestApi/RestApiReducer'
import registerApiReducer from './RestApi/RegisterApiReducers'
import LoginApiReducer from './RestApi/LoginApiReducer'


const roorReducer=combineReducers({
    cake:cakeReducer,
    rest:restApi,
    register:registerApiReducer,
    login:LoginApiReducer
    
})

const store=createStore(roorReducer,applyMiddleware(thunkMiddleWare));
export default store