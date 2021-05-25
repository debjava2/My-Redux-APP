import React, {useState,useRef} from 'react'
import { Link } from "react-router-dom";
import { Redirect ,useHistory} from "react-router-dom";
import {connect,useDispatch,useSelector} from 'react-redux'

import {RegisterUserLogin} from '../redux/index'
//import { useState } from "react";
function Register(props) {
const firstNamelRef=useRef(null);
const lastNameRef=useRef(null);    
const emailRef=useRef(null);
const discriptionRef=useRef(null);
const addressRef=useRef(null);
//const[success,setSuccess]=useState(false);
const value=props.isRegister;
const [success, setSuccess] = useState(value!="" ? true : false);

const passwordRef=useRef(null)
const dispatch = useDispatch();  
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(emailRef.current.value,passwordRef.current.value)
    dispatch(RegisterUserLogin(firstNamelRef.current.value,
        lastNameRef.current.value,addressRef.current.value,
        emailRef.current.value,discriptionRef.current.value,
        passwordRef.current.value))

}

    return (
        <div>
             <form>
             <div className="container">
             <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            {success &&  <div className="alert alert-success" role="alert">
                     Succesfully Regiter
            </div> }
           
            <input type="text" placeholder="First Name"  ref={firstNamelRef} name="email" id="email" required /><br></br>
            <input type="text" placeholder="Last Name"  ref={lastNameRef} name="email" id="email" required /><br></br>
            <input type="text" placeholder="Enter Email"  ref={emailRef} name="email" id="email" required /><br></br>
            <input type="text" placeholder="Address"  ref={addressRef} name="email" id="email" required /><br></br>
            <input type="text" placeholder="Description"  ref={discriptionRef} name="email" id="email" required /><br></br>
            
            <input type="password" placeholder="Enter Password" ref={passwordRef}
            name="psw" id="psw" required/><br></br>

  
    <hr></hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button className="registerbtn" onClick={(e)=>handleSubmit(e)}>Register</button>
    <div className="container signin">
    <p>Already have an account? <Link to="/">Sign in</Link></p>
  </div>
             </div>
             </form>
        </div>
    )
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        isRegister:state.register
    }
}

export default connect(mapStateToProps,null)(Register)
