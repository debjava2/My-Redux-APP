import {BUY_CAKE,FETCH_USER,REGISTER_USER,LOGIN_USER} from '../actionConstant/cakeActionType'
import InventoryDataServices from '../../services/inventoryServices'
import { Redirect ,useHistory} from "react-router-dom";
//import { push } from 'react-router-redux'

import axios from 'axios'
export const buyCake=()=>{
    return {
        type:BUY_CAKE
    }
}
export const retrieveTutorials = () => async (dispatch) => {
    try {
      const res = await InventoryDataServices.getAll();
      console.log(res);
      dispatch({
        type: FETCH_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err); 
    }
  };

  export const RegisterUserLogin=(firstName,lastName,address,email,
    discription,password)=>  (dispatch) => {
      axios.post('http://localhost:8080/saveCustomerDetails', {
        "firstName": firstName,
        "lastName": lastName,
        "address":address,
        "discription":discription,
        "email":email,
        "password":password
      },
      {
        headers: {"Access-Control-Allow-Origin": "*"}
       },
      )
      .then(function (response) {
        dispatch({
          type: REGISTER_USER,
          payload: response.data,
        });
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  

//   export const loginUser=(email,password,history)=>{
//     return function(dispatch){
//         //dispatch(fetchUsersRequest());
//         axios.post('http://localhost:8080/loginUser',
//         {
//           "email": email,
//           "password": password
         
//         }
//         )

//         .then(response=>{
//           dispatch({
//             type: LOGIN_USER,
//             payload: response.data,
//           });
//            // dispatch(fetcUserSucess(users));
//         }).catch(error=>{
//             //fetchUserFailure
//             console.log("##############################")
//           //  dispatch(fetchUserFailure(error));
//         })
//     }
// }


export const loginUser = (email,password) => async (dispatch) => {
 // let history = useHistory();
  try {
    const response = await InventoryDataServices.loginCustomer(email,password);
      //  dispatch({
      //           type: LOGIN_USER,
      //             payload: response.data,
      //           });
                <Redirect to="/cakecontainer" />

               // history.push("/cakecontainer")        
   // dispatch(history.push(`/cakecontainer`));
  } catch (err) {
    console.log(err); 
  }
};



