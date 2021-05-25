import React , {useState,useRef} from 'react'
import { useHistory} from "react-router-dom";
import  '../css/login.css'
import image from '../images/img_avatar.png'
import { Link } from "react-router-dom";
import {connect,useDispatch,useSelector} from 'react-redux'
import {loginUser} from '../redux/index'
import Redirect from './Redirect'

function Login(props) {
const userNamrRef=useRef(null);
const passwordRef=useRef(null)
let history = useHistory();
const dispatch = useDispatch();  
//const dispatch = useDispatch();  
const[loginSucess,setLoginSuccess] = useState(false) 
const value=props.isLogin;
const [success, setSuccess] = useState(value=="" ? false : true);
if(success){
    <Redirect sucess={success}/>
}
const handleSubmit=(e)=>{
    e.preventDefault();
        dispatch(loginUser(userNamrRef.current.value,
        passwordRef.current.value))
       
       // history.push(`/cakecontainer`);
    // console.log(userNamrRef.current.value,passwordRef.current.value)
    // if(userNamrRef.current.value=="Debashish" &&passwordRef.current.value=='1234' ){
    //     sessionStorage.setItem('authenticate',"Debashish");
            
    //         history.push(`/cakecontainer`);
    // }
    // else{
    //     setLoginSuccess(true);
    // }
   
}
    return (
        <>
            <form >
            <div className="imgcontainer">
            <img src={image} alt="Avatar" class="avatar"></img>
        <div className="container">
            {loginSucess && <div className="alert alert-danger" role="alert">User Name of Password Not correct</div>}
         <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" ref={userNamrRef}
       ></input>
        </div>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" ref={passwordRef}
        ></input>
       
        <button  onClick={handleSubmit}>submit</button>  
        <p>Register <Link to="/register">click</Link></p>
         </div>
            </form>
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
        isLogin:state.login
    }
}
export default connect(mapStateToProps,null)(Login) 
