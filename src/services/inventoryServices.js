import http from '../http.common'
import { browserHistory } from 'react-router'
const getAll = () => {
    const config={
      headers:{
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        Authorization:'Bearer '+localStorage.getItem("token")
      }
    }
    return http.get("/getAllUserRegisterd",config);
  };
  
  const loginCustomer=(email,password)=>{
    return http.post("/authenticate",{
      "username":email,
      "password":password
    },
   {
    headers: {"Access-Control-Allow-Origin": "*"}
   },
    ) .then(function (response) {
      localStorage.setItem("token",response.data.jwt);
      window.location.replace("/cakecontainer");
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    ;
  };

  const inventoryServices = {
    getAll,
    loginCustomer
  };
  
  export default inventoryServices;